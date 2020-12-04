import { uploadStream } from '../lib'
import path from 'path'

export default {
    fileUpload: async (parent: void, { file, name }: any): Promise<String> => {
        const imagePath = path.join(__dirname, '../img', `${name}.png`)
        const { createReadStream } = await file
        const stream = createReadStream(imagePath)
        await uploadStream(stream, imagePath)
        return name
    }
}