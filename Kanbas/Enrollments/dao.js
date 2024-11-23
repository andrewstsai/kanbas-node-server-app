import Database from "../Database/index.js";

export function findEnrollmentsForUser(userId) {
  const { enrollments } = Database;
  const enrolledCourses = enrollments.filter((enrollment) => enrollment.user === userId);
  return enrolledCourses;
}

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments.push({ _id: Date.now().toString(), user: userId, course: courseId });
  return enrollments;
}

export function unenrollUserFromCourse(enrollmentId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((enrollment) => enrollment._id !== enrollmentId);
    return enrollments;
}
