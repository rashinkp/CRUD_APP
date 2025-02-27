import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import studentRoute from './routes/student.route'
import mongoose from "mongoose";


class Server {
  private app: express.Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.configureMiddleware();
    this.setupRoutes();
    this.start();
  }

  private configureMiddleware() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private setupRoutes() {
    this.app.use('/api/students', studentRoute);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server running on http://localhost:${this.port}`);
      connectDB();
    })
  }
}


const PORT = Number(process.env.PORT) || 5000;
new Server(PORT);

