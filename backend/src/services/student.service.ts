import axios from 'axios';
import {Student , IStudent, StudentData} from '../models/student.model';

export class StudentService {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async getAllStudent(): Promise<IStudent[]> {
    try {
      return await Student.find();
    } catch (error) {
        console.error("Error fetching students:", error);
        throw new Error("Failed to fetch students");
    }
  }

  async addStudent(student: StudentData):Promise<IStudent>  {
    try {
      const newStudent = new Student(student);
      return await newStudent.save();
    } catch (error) {
       console.error("Error adding student:", error);
       throw new Error("Failed to add student");
    }
  }

  async updateStudent(id:string , student: StudentData): Promise<IStudent | null> {
    try {
      return await Student.findByIdAndUpdate(id, student, { new: true });
    } catch (error) {
       console.error("Error updating student:", error);
       throw new Error("Failed to update student");
    }
  }

  async deleteStudent(id: string): Promise<void> {
    try {
       await Student.findByIdAndDelete(id);
    } catch (error) {
      console.error("Error deleting student:", error);
      throw new Error("Failed to delete student");
    }
  }
}