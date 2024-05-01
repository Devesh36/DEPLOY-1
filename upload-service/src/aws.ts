import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
    accessKeyId: "df474e221f3e4d62cb10f225984e5e85",
    secretAccessKey: "83e0d496ef98a23b65df9a528c27e5eb3c79104d8690bfa640ca7973b5c19d77",
    endpoint: "https://380a50cdb2d1900a675b060e22a278ec.r2.cloudflarestorage.com"
})


export const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "deploybuddy",
        Key: fileName,
    }).promise();
    console.log(response);
}