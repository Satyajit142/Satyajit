import express, { response } from "express";
import { connectDB } from "./repository/employeeRepository.js";
import { Router } from "./controller/controller.js"
import "dotenv/config"
import axios from "axios";
import cors from "cors"
const app=express();
app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/v1/employee",Router);


app.listen(4433);