import model from "./model.js";
import Database from "../Database/index.js";

export function findEnrollmentsForUser(userId) {
  const { enrollments } = Database;
  const enrolledCourses = enrollments.filter((enrollment) => enrollment.user === userId);
  return enrolledCourses;
}
export async function findCoursesForUser(userId) {
 const enrollments = await model.find({ user: userId }).populate("course");
 return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
export function enrollUserInCourse(user, course) {
 return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
 return model.deleteOne({ user, course });
}
