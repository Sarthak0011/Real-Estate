import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4001;

//connect to database
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log("Error connecting to DB" + err);
});

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//API
app.use("/api/user", userRouter);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message
    });
});

