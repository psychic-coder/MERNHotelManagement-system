import { TryCatch } from "../middlewares/error.js";
import pool from "../utils/database.js";
import ErrorHandler from "../utils/errorHandler.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookieOptions } from "../utils/features.js";

export const newUser = TryCatch(async (req, res, next) => {
    const { username, password, email, phone, address } = req.body;

   
    const user = await pool.query('SELECT * FROM People WHERE username=$1 OR email=$2;', [username, email]);
    if (user.rowCount !== 0) {
        return res.status(404).json({ success: false, message: 'User already exists with this email and Username' });
    }

   
    if (!username || !email || !password) {
        return next(new ErrorHandler(404, "All fields are required"));
    }

    
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

   
    const query = `
      INSERT INTO "User" (username, password, email, phone, address)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [username, hashedPassword, email, phone, address];
    const userCreated = await pool.query(query, values);

  
    const token = jwt.sign({ _id: userCreated.rows[0].username }, process.env.JWT_SECRET);

   
    const message = "User created successfully";
    return res
        .status(201)
        .cookie("access_token", token, cookieOptions)
        .json({
            success: true,
            user: userCreated.rows[0],
            message
        });
});
