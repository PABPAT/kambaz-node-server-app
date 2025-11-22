// kambaz-node-server/kambaz/enrollments/routes.js
import EnrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app, db) {
    const dao = EnrollmentsDao(db);

    // Get enrollments for a specific course
    app.get("/api/courses/:courseId/enrollments", (req, res) => {
        const { courseId } = req.params;
        const enrollments = dao.getEnrollmentsByCourse(courseId);
        res.json(enrollments);
    });

    // Get all enrollments for a user
    app.get("/api/users/:userId/enrollments", (req, res) => {
        const { userId } = req.params;
        const userEnrollments = dao.getEnrollmentsByUser(userId);
        res.json(userEnrollments);
    });

    // Enroll user in a course
    app.post("/api/enrollments/enroll", (req, res) => {
        const { userId, courseId } = req.body;
        if (!userId || !courseId) {
            return res.status(400).json({ message: "userId and courseId required" });
        }
        const userEnrollments = dao.enrollUserInCourse(userId, courseId);
        res.json(userEnrollments);
    });

    // Unenroll user from a course
    app.post("/api/enrollments/unenroll", (req, res) => {
        const { userId, courseId } = req.body;
        if (!userId || !courseId) {
            return res.status(400).json({ message: "userId and courseId required" });
        }
        const userEnrollments = dao.unenrollUserFromCourse(userId, courseId);
        res.json(userEnrollments);
    });

    // Legacy route for People page
    app.get("/api/courses/:courseId/people", (req, res) => {
        const { courseId } = req.params;
        const enrollments = dao.getEnrollmentsByCourse(courseId);
        res.json(enrollments);
    });
}