import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    // origin: process.env.CORS_ORIGIN,
    origin: '*',
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser());


import queryRoutes from './routes/query.js';

app.use("/api", queryRoutes);

app.use('/', (req, res) => res.json({ message: 'Welcome to the world of generators' }));

app.use((err, req, res, next) => {
    console.log(err.stack); // Log the error (optional)

    // Set the status code (default to 500 if not set)
    res.status(err.statusCode || 500);

    // Send a response with the error message
    res.json({
        success: false,
        message: err.message || 'Internal Server Error',
        // You can include other information like `err.code` or `err.details` if needed
    });
});

export { app }