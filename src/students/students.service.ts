import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Student } from './student.model';

@Injectable()
export class StudentsService {
    constructor(
        @InjectModel('StudentModel') private readonly studentModel: Model<Student> 
    ) {}

    async addStudent(name: string, dateOfBirth: Date): Promise<Student> {
        const newStudent = new this.studentModel({ name: name, dateOfBirth: dateOfBirth });
        const result = await newStudent.save();
        return result;
    }

    async getAllStudents(): Promise<Student[]> {
        const students: Student[] = await this.studentModel.find({}).exec();
        return students;
    }

    async getStudentById(id: string): Promise<Student> {
        const foundStudent: Student = await this.studentModel.findById(id).exec();
        return foundStudent; 
    }
}
