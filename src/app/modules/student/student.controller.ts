import { Request, Response } from 'express';
import { StudentServices } from './student.service';


const getAllStudents = async(req: Request, res: Response) =>{

  try{

    const result = await StudentServices.getAllStudentsFromDB()

    res.status(200).json({
      success: true,
      message: 'Students are retrived successfully',
      data: result,
    });

  }catch(err){
    console.log(err)
  }

}

const getSingleStudent = async(req: Request, res: Response) =>{

  try{

    const {studentId} = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is retrived successfully',
      data: result,
    });

  }catch(err){
    console.log(err)
  }

}


const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentID } = req.params;

    const result = await StudentServices.deleteStudentFromDB(studentID);
    res.status(200).json({
      success: true,
      message: "Student data is deleted",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
    getAllStudents,
    getSingleStudent,
    deleteSingleStudent,
}
