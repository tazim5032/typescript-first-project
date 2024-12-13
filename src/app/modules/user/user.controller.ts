import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;

    //will call function to send data
    const result = await UserServices.createStudentIntoDB(password, studentData);

    //send response
    res.status(200).json({
      success: true,
      message: 'Student is created Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserController = {
  createStudent,
};
