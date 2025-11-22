// kambaz-node-server/kambaz/enrollments/dao.js
import { v4 as uuidv4 } from "uuid";

export default function EnrollmentsDao(db) {
    const { enrollments } = db;

    function enrollUserInCourse(userId, courseId) {
        const alreadyEnrolled = enrollments.some(
            e => e.user === userId && e.course === courseId
        );
        if (!alreadyEnrolled) {
            enrollments.push({
                _id: uuidv4(),
                user: userId,
                course: courseId
            });
        }
        return enrollments.filter(e => e.user === userId);
    }

    function unenrollUserFromCourse(userId, courseId) {
        const index = enrollments.findIndex(
            e => e.user === userId && e.course === courseId
        );
        if (index !== -1) {
            enrollments.splice(index, 1);
        }
        return enrollments.filter(e => e.user === userId);
    }

    function getEnrollmentsByUser(userId) {
        return enrollments.filter(e => e.user === userId);
    }

    function getEnrollmentsByCourse(courseId) {
        return enrollments.filter(e => e.course === courseId);
    }

    return {
        enrollUserInCourse,
        unenrollUserFromCourse,
        getEnrollmentsByUser,
        getEnrollmentsByCourse
    };
}