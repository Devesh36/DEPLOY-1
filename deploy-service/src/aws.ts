import { S3 } from "aws-sdk";
import fs from "fs";
import path from "path";

const s3 = new S3({
    accessKeyId: "df474e221f3e4d62cb10f225984e5e85",
    secretAccessKey: "83e0d496ef98a23b65df9a528c27e5eb3c79104d8690bfa640ca7973b5c19d77",
    endpoint: "https://380a50cdb2d1900a675b060e22a278ec.r2.cloudflarestorage.com"
})

// output/asdasd
export async function downloadS3Folder(prefix: string) {
    const allFiles = await s3.listObjectsV2({
        Bucket: "deploybuddy",
        Prefix: prefix
    }).promise();
    
    // 
    const allPromises = allFiles.Contents?.map(async ({Key}) => {
        return new Promise(async (resolve) => {
            if (!Key) {
                resolve("");
                return;
            }
            const finalOutputPath = path.join(__dirname, Key);
            const outputFile = fs.createWriteStream(finalOutputPath);
            const dirName = path.dirname(finalOutputPath);
            if (!fs.existsSync(dirName)){
                fs.mkdirSync(dirName, { recursive: true });
            }
            s3.getObject({
                Bucket: "deploybuddy",
                Key
            }).createReadStream().pipe(outputFile).on("finish", () => {
                resolve("");
            })
        })
    }) || []
    console.log("awaiting");

    await Promise.all(allPromises?.filter(x => x !== undefined));
}

export function copyFinalDist(id: string) {
    const folderPath = path.join(__dirname, `output/${id}/dist`);
    const allFiles = getAllFiles(folderPath);
    allFiles.forEach(file => {
        uploadFile(`dist/${id}/` + file.slice(folderPath.length + 1), file);
    })
}

const getAllFiles = (folderPath: string) => {
    let response: string[] = [];

    const allFilesAndFolders = fs.readdirSync(folderPath);allFilesAndFolders.forEach(file => {
        const fullFilePath = path.join(folderPath, file);
        if (fs.statSync(fullFilePath).isDirectory()) {
            response = response.concat(getAllFiles(fullFilePath))
        } else {
            response.push(fullFilePath);
        }
    });
    return response;
}

const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "deploybuddy",
        Key: fileName,
    }).promise();
    console.log(response);
}