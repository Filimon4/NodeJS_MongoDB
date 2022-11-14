import Router from 'express'
import postController from './postController.js'

const router = new Router()

router.post('/post', postController.create)
router.get('/post', postController.getAll)
router.get('/post/:id', postController.getOne)
router.put('/post', postController.update)
router.delete('/post/:id', postController.delete)

export default router
