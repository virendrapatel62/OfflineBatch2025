// src/upload/upload.service.ts
import { Injectable } from '@nestjs/common';
import * as FormData from 'form-data';
import axios from 'axios';
import { Multer } from 'multer';

const IMGBB_API_KEY = process.env.IMGBB_API_KEY; // 🔐 put this in .env for production

@Injectable()
export class UploadService {
  async uploadToImgBB(file: Multer.File) {
    const imageBase64 = file.buffer.toString('base64');
    const form = new FormData();
    form.append('key', IMGBB_API_KEY);
    form.append('image', imageBase64);

    const response = await axios.post('https://api.imgbb.com/1/upload', form, {
      headers: form.getHeaders(),
    });

    return {
      url: response.data.data.url,
      delete_url: response.data.data.delete_url,
    };
  }
}
