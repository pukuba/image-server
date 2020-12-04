import { WriteStream } from 'fs-capacitor'
import fs from 'fs'

export const uploadStream = (stream: any, path: any) =>
    new Promise((resolve, reject) => {
        const capacitor = new WriteStream()
        const destination = fs.createWriteStream(path);
        stream.pipe(capacitor)
        capacitor
            .createReadStream()
            .pipe(destination)
            .on('error', reject)
            .on('finish', resolve)
    })
