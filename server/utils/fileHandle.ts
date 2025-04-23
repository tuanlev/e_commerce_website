import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';
// Cấu hình nơi lưu file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../asset/uploads/'); // thư mục lưu file
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // tên file lưu
  }
});
const fileFilter = (req:Request, file:Express.Multer.File, cb: FileFilterCallback) => {
    req.file?.mimetype.startsWith('image/') ? cb(null, true) : cb(new Error('File is not an image'));
}
const upload = multer({ storage, fileFilter });
export const uploadFile = (fileFieldName:string) => upload.single(fileFieldName); // tên field trong form-data là 'file'
export const uploadFiles = (fileFieldName:string) => upload.array(fileFieldName); // tên field trong form-data là 'file'
export const uploadFields = (fileFieldName:string) => upload.fields([{ name: fileFieldName, maxCount: 10 }]); // tên field trong form-data là 'file'
