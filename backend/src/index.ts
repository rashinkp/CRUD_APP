import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import studentRoute from './routes/student.route'
dotenv.config();

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: 'GET , POST , PUT , DELETE',
    allowedHeaders:'Content-Type , Authorization',
  })
);

app.use('/api/student', studentRoute);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
