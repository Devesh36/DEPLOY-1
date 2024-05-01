import express from "express";
import { S3 } from "aws-sdk";

const s3 = new S3({
    accessKeyId: "df474e221f3e4d62cb10f225984e5e85",
    secretAccessKey: "83e0d496ef98a23b65df9a528c27e5eb3c79104d8690bfa640ca7973b5c19d77",
    endpoint: "https://380a50cdb2d1900a675b060e22a278ec.r2.cloudflarestorage.com"
})

const app = express();

app.get("/*", async (req, res) => {
  
    const host = req.hostname;

    const id = host.split(".")[0];
    const filePath = req.path;

    const contents = await s3.getObject({
        Bucket: "deploybuddy",
        Key: `dist/${id}${filePath}`
    }).promise();
    
    const type = filePath.endsWith("html") ? "text/html" : filePath.endsWith("css") ? "text/css" : "application/javascript"
    res.set("Content-Type", type);

    res.send(contents.Body);
})

app.listen(3002);