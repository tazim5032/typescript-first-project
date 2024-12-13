import config from '../../config';
import { Student } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: Student) => {
  //create a user object
  const userData: Partial<TUser> = {};

  //if password is not given use default password

  userData.password = password || (config.default_password as string);

 

  //set role as student
  userData.role = 'student';

  //manually generated id
  userData.id = '2030100001';

  //create a user model
  const result = await UserModel.create(userData);

  //create a student
  if (Object.keys(result).length) {
    //if er vitore object k array te nie length ber kortece


    //set id, _id as user
    studentData.id = result.id;
    studentData.user= result._id; //reference _id

    const newStudent = await StudentModel.create(studentData);

    return newStudent;
  }

  
};

export const UserServices = {
  createStudentIntoDB,
};
