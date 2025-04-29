# 🛒 E-Commerce API

Một RESTful API backend được xây dựng bằng **Node.js**, **Express**, và **TypeScript** với các tính năng hiện đại như:

- Xác thực người dùng với **JWT**
- Kết nối **MongoDB** qua **Mongoose**
- **Upload file** bằng **Multer**
- Middleware **CORS**
- Tổ chức dự án chuẩn theo mô hình MVC

---

## 🧰 Công nghệ sử dụng

- TypeScript
- Node.js & Express
- MongoDB + Mongoose
- JSON Web Token (JWT)
- Multer (Upload ảnh)
- CORS Middleware
- Nodemon + ts-node cho môi trường phát triển

---

## 🚀 Bắt đầu dự án

### 1. Tạo thư mục & khởi tạo

```bash
mkdir my-app
cd my-app
npm init -y
2. Cài đặt các dependencies
🎯 Gói chính
bash
Sao chép
Chỉnh sửa
npm install express mongoose jsonwebtoken multer cors
🛠 Gói phát triển
bash
Sao chép
Chỉnh sửa
npm install --save-dev typescript ts-node nodemon
npm install --save-dev @types/express @types/jsonwebtoken @types/multer @types/cors
3. Khởi tạo TypeScript
bash
Sao chép
Chỉnh sửa
npx tsc --init
Sửa tsconfig.json như sau:

jsonc
Sao chép
Chỉnh sửa
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
📁 Cấu trúc dự án đề xuất
perl
Sao chép
Chỉnh sửa
my-app/
├── src/
│   ├── index.ts          # Điểm vào ứng dụng
│   ├── routes/           # Định tuyến API
│   ├── controllers/      # Xử lý logic
│   ├── models/           # Mongoose models
│   ├── middleware/       # JWT, Multer, v.v.
│   └── config/           # DB connect, env
├── dist/                 # File sau khi build
├── tsconfig.json
├── package.json
└── README.md
🧪 Ví dụ code khởi đầu
src/index.ts

ts
Sao chép
Chỉnh sửa
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to E-Commerce API');
});

mongoose.connect('mongodb://localhost:27017/ecommerce')
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  })
  .catch(err => console.error(err));
⚙️ Scripts trong package.json
json
Sao chép
Chỉnh sửa
"scripts": {
  "dev": "nodemon src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
Chạy lệnh:

bash
Sao chép
Chỉnh sửa
npm run dev
🔐 Tính năng JWT (sắp thêm)
Đăng ký / đăng nhập người dùng

Middleware xác thực JWT

Bảo vệ các route riêng tư

📤 Upload ảnh với Multer (sắp thêm)
Tải lên ảnh sản phẩm

Lưu file vào server hoặc dịch vụ cloud (Cloudinary/S3)

✨ Các tính năng dự kiến mở rộng
Phân quyền (Admin / User)

Tìm kiếm và lọc sản phẩm

Quản lý đơn hàng

Tích hợp thanh toán (Stripe/PayPal)

Viết test với Jest

📄 Giấy phép
Dự án được phát hành theo giấy phép MIT.

🤝 Liên hệ
GitHub: @tuanlev

Email: tuanlv1303@gmail.com
