/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const FILE_NUMBER = 6;
// 이미지 파일 경로 (public 폴더 내 JPEG 파일)
const inputFilePath = path.join(
  process.cwd(),
  "public/images/origin-carousel-images",
  `${FILE_NUMBER}.jpeg`
);

// 출력 파일 경로 (WebP 파일로 저장)
const outputFilePath = path.join(
  process.cwd(),
  "public/images/main-carousel-images",
  `compressed-image-${FILE_NUMBER}.webp`
);

// 이미지 처리 함수
async function compressImage() {
  try {
    // 이미지 리사이징 및 WebP로 변환
    await sharp(inputFilePath)
      .resize({ width: 2400 }) // 가로 크기를 5400px로 리사이징
      .webp({ quality: 80 }) // WebP 포맷으로 변환 (품질 80%)
      .toFile(outputFilePath); // 결과물 저장

    console.log("이미지 압축 완료:", outputFilePath);

    // 파일 크기 확인
    const stats = fs.statSync(outputFilePath);
    const fileSizeInMB = stats.size / (1024 * 1024); // 파일 크기를 MB 단위로 변환

    if (fileSizeInMB > 1) {
      console.warn(
        "경고: 파일 크기가 1MB를 초과합니다:",
        fileSizeInMB.toFixed(2),
        "MB"
      );
    } else {
      console.log("파일 크기:", fileSizeInMB.toFixed(2), "MB");
    }
  } catch (error) {
    console.error("이미지 처리 중 오류 발생:", error);
  }
}

// 함수 실행
compressImage();
