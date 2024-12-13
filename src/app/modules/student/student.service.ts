import { StudentModel } from "./student.model";



const getAllStudentsFromDB = async () =>{
    const result = await StudentModel.find();

    return result;
}

const getSingleStudentFromDB = async (id: string) =>{
    const result = await StudentModel.findOne({id});

    return result;
}
const deleteStudentFromDB = async(id: string) => {
    const res = await StudentModel.updateOne({id}, {isDeleted : true});
    return res;
}

export const StudentServices = {
    getAllStudentsFromDB,
    getSingleStudentFromDB,
    deleteStudentFromDB,
}