import { Request, Response } from 'express'
import path from 'path'
import fs from 'fs'
import im from 'imagemagick'
import { delay } from '../lib'

const upload = async (req: Request, res: Response) => {
    const imagePath = path.join(__dirname, '../img', `${req.body.name}.png`)
    fs.writeFile(imagePath, req.body.file, 'base64', (err) => {
        if (err) {
            throw new Error(`error ${err}`)
        }
    })

    // await delay(2000)
    // im.crop({
    //     srcPath: imagePath,
    //     dstPath: imagePath,
    //     width: 128,
    //     height: 128,
    //     quality: 1,

    // }, (err) => {
    //     if (err) {
    //         throw new Error(`error ${err}`)
    //     }
    // })
    res.send("success")

}

export { upload }