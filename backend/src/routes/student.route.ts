import express from "express";

import { StudentController } from "../controllers/student.controller";
import { StudentService } from "../services/student.service";

const router = express.Router();
const studentService = new StudentService("http://localhost:5000/api");
const studentController = new StudentController(studentService)

router.get('/', studentController.getAllStudents);
router.post('/', studentController.addStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);


export default router;

