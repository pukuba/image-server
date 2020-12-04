import { Request, Response } from 'express'
import path from 'path'
import fs from 'fs'

const upload = (req: Request, res: Response) => {

    const imagePath = path.join(__dirname, '../img', `${req.body.name}.png`)
    fs.writeFile(imagePath, req.body.file, 'base64', (err) => {
        if (err === null) {
            res.send("good")
        } else {
            res.send("bad")
        }
    })
}


export { upload }