import model from "./model.js";

export function createAttempt(attempt) {
  delete attempt._id;
  return model.create(attempt);
}

export function updateAttempt(attemptId, attemptUpdates) {
  return model.updateOne({ _id: attemptId }, { $set: attemptUpdates });
}

export function findAttemptForQuiz(userId, quizId) {
  return model.find({ user: userId, quiz: quizId });
}
