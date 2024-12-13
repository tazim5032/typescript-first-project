import express from 'express'
import { UserController } from './user.controller';



const router = express.Router();


router.post('/create-student', UserController.createStudent);

// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentID', StudentControllers.getSingleStudent);
// router.delete('/:studentID', StudentControllers.deleteSingleStudent);



export const UserRoutes = router;