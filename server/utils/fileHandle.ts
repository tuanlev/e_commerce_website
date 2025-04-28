import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';
import path from 'path';
// Cấu hình nơi lưu file
import fs from 'fs'
const uploadDir =path.join(__dirname, "../asset/uploads");

// Đảm bảo thư mục tồn tại
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // thư mục lưu file
  },
  filename: (req, file, cb) => {
    const newName = (Date.now() + file.originalname).replace(/\s+/g, '');
    cb(null, newName);
  }
});
const fileFilter = (req:Request, file:Express.Multer.File, cb: FileFilterCallback) => {
    console.log(file)
    file?.mimetype.startsWith('image/') ? cb(null, true) : cb(new Error('File is not an image'));
}
const upload = multer({ storage, fileFilter });
export default upload ; // không upload file nào
export const uploadFile = (fileFieldName:string) => upload.single(fileFieldName); // tên field trong form-data là 'file'
export const uploadFiles = (fileFieldName:string) => upload.array(fileFieldName); // tên field trong form-data là 'files'
export const uploadFields = (fileFieldName:string) => upload.fields([{ name: fileFieldName, maxCount: 10 }]); // tên field trong form-data là 'file'
export interface RequestWithFile extends Request {
    file: Express.Multer.File;
    files: Express.Multer.File[];
}