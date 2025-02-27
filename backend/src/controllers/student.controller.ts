import { Request, Response } from "express";

import Student from "../models/student.model";

export const getAllStudents = async (
  req: Request,
  res: Response
)  => {
  try {
    const students = await Student.find().select('-__v').lean();
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching students" });
  }
};

export const createStudent = async (
  req: Request,
  res: Response
)  => {
  try {
    const { name, age, course } = req.body;
    if (!name || !age || !course) {
      res
        .status(400)
        .json({ message: "Failed to update student. Data missing " });
      return;
    }
    const newStudent = new Student({ name, age, course });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateStudent = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, age, course } = req.body;
    const studentId = req?.params?.id;

    if (!studentId) {
      res.status(400).json({ message: "Student ID is required" });
      return;
    }

    const currentStudent = await Student.findById(studentId);

    if (!currentStudent) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    const updatedData = {
      name: name || currentStudent.name,
      age: age || currentStudent.age,
      course: course || currentStudent.course,
    };

    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      updatedData
    );

    if (!updatedStudent) {
      res.status(500).json({ message: "Failed to update student" });
      return;
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteStudent = async (
  req: Request,
  res: Response
) => {
  try {
    const studentId = req?.params?.id;
    await Student.findByIdAndDelete(studentId);
    res.status(200).json({ message: "Student Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
