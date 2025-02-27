import express from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  updateStudent,
} from "../controllers/student.controller";

const router = express.Router();

router.route("/").get(getAllStudents).post(createStudent);

router.route("/:id").put(updateStudent).delete(deleteStudent);

export default router;
