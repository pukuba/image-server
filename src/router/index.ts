import { Router } from 'express'
const router = Router()

import { upload } from './upload'

router.post('/upload', upload)

export { router }