import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true }
}, { timestamps: true, versionKey:false });

export interface Student extends mongoose.Document {
    name: string,
    dateOfBirth: Date
}
