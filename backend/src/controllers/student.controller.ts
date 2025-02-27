import { Request ,Response } from "express";

import { StudentService } from "../services/student.service";

export class StudentController {
  private studentService: StudentService;

  constructor(studentService: StudentService) {
    this.studentService = studentService;
  }

  getAllStudents = async (req: Request, res: Response) => {
    try {
      const students = await this.studentService.getAllStudent();
      res.status(200).json(students);
    } catch (error) {
      console.log('Internal Server Error', error)
       res.status(500).json({ message: error });
    }
  }

  addStudent = async (req: Request, res: Response) => {
    try {
      const { name, age, course } = req.body
      const student = await this.studentService.addStudent({name , age ,course});
      res.status(201).json(student);
    } catch (error) {
      console.log("Internal Server Error", error);
      res.status(500).json({ message: error });
    }
  }

  updateStudent = async (req: Request, res: Response) => {
    try {
      const student = await this.studentService.updateStudent(req.params.id, req.body);
      res.status(200).json(student);
    } catch (error) {
       console.log("Internal Server Error", error);
       res.status(500).json({ message: error });
    }
  }

  deleteStudent = async (req: Request, res: Response) => {
    try {
      await this.studentService.deleteStudent(req.params.id);
      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
       console.log("Internal Server Error", error);
       res.status(500).json({ message: error });
    }
  }
}