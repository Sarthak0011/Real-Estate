import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
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
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

