import { Controller, Get, Post, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './student.model';

@Controller('Students')
export class StudentController {
    constructor (
        private readonly studentService: StudentsService
    ) {}

    @Post('/')
    async addStudent(@Res() res, @Body() newStudent : { name: string, dateOfBirth: Date }) {
        if (!newStudent.name) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                error: {
                    message: 'Name cannot be empty!'
                }
            });
        }

        if (!newStudent.dateOfBirth) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                error: {
                    message: 'Date of birth cannot be empty!'
                }
            });
        }

        const student: Student = await this.studentService.addStudent(newStudent.name, newStudent.dateOfBirth);
        
        return res.status(HttpStatus.CREATED).json(student);
    }

    @Get('/')
    async getAllStudents(@Res() res) {
        const students: Student[] = await this.studentService.getAllStudents();
        
        return res.status(HttpStatus.OK).json(students);
    }

    @Get(':id')
    async findStudentById(@Res() res, @Param('id') studentId: string) {
        const foundStudent: Student = await this.studentService.getStudentById(studentId);
        
        return res.status(HttpStatus.OK).json(foundStudent);
    }
}
