import * as quizzesDao from "./dao.js"
import * as questionsDao from "../Questions/dao.js"
import * as attemptsDao from "../Attempts/dao.js"
import { mongoose } from 'mongoose';
export default function QuizRoutes(app) {
    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
        res.send(status);
    });
    
    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.deleteQuiz(quizId);
        res.send(status);
    });

    app.post("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const question = {
            ...req.body,
            quiz: new mongoose.Types.ObjectId(quizId),
        };
        const newQuestion = await questionsDao.createQuestion(question);
        res.send(newQuestion);
    });

    app.get("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const questions = await questionsDao.findQuestionsforQuiz(quizId);
        res.json(questions);
    });

    app.post("/api/quizzes/:quizId/attempts/:userId", async (req, res) => {
        const { quizId, userId } = req.params;
        const attempt = {
            ...req.body,
            userId: new mongoose.Types.ObjectId(userId),
            quiz: new mongoose.Types.ObjectId(quizId),
        };
        const newAttempt = await attemptsDao.createAttempt(attempt);
        res.send(newAttempt);
    });

    app.get("/api/quizzes/:quizId/attempts/:userId", async (req, res) => {
        const { quizId, userId } = req.params;
        const attempts = await attemptsDao.findAttemptsforQuiz(userId, quizId);
        res.json(attempts);
    });

}
