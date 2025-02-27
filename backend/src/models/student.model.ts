import mongoose from "mongoose";
import { Document } from "mongoose";


export interface StudentData {
  name: string;
  age: number;
  course: string;
}

export interface IStudent extends Document, StudentData { };

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  course: { type: String, required: true },
});

export const Student = mongoose.model<IStudent>("Students", StudentSchema);

