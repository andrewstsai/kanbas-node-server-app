import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.post("/api/enrollments/:userId/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        const status = enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.send(status);
    });
    
    app.delete("/api/enrollments/:enrollmentId", (req, res) => {
        const { enrollmentId } = req.params;
        const status = enrollmentsDao.unenrollUserFromCourse(enrollmentId);
        res.send(status);
    });

    const findCoursesForEnrolledUser = (req, res) => {
        let { userId } = req.params;
        if (userId === "current") {
          const currentUser = req.session["currentUser"];
          if (!currentUser) {
            res.sendStatus(401);
            return;
          }
          userId = currentUser._id;
        }
        const enrollments = enrollmentsDao.findEnrollmentsForUser(userId);
        res.json(enrollments);
      };
    app.get("/api/users/:userId/enrollments", findCoursesForEnrolledUser);
   }