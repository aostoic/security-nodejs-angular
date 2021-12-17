import { Request, Response, Router } from 'express'
import { check } from 'express-validator'
import validateFields from '../middlewares/validate-fields.middleware'

const UsersController: Router = Router()

UsersController.get('/', async (_: Request, res: Response) => {
	try {
		res.status(200).send({
			message: 'Getting users with success',
			users: [],
		})
	} catch (e) {
		res.status(500).send({
			message: 'Contact the administrator',
		})
	}
})

UsersController.get('/:id', async (_: Request, res: Response) => {
	try {
		res.status(200).send({
			message: 'Getting user {ID} with success',
			users: [],
		})
	} catch (e) {
		res.status(500).send({
			message: 'Contact the administrator',
		})
	}
})

UsersController.post('/', [
	check('name', 'Name field is required').not().isEmpty(),
	check('name', 'Name field must be an string').isString(),
	check('age', 'Age field is required').not().isEmpty(),
	check('age', 'Age field must be numeric').isNumeric(),
	validateFields,
],async (_: Request, res: Response) => {
	try {
		res.status(200).send({
			message: 'User created with success',
			users: [],
		})
	} catch (e) {
		res.status(500).send({
			message: 'Contact the administrator',
		})
	}
})

UsersController.put('/:id', async (_: Request, res: Response) => {
	try {
		res.status(200).send({
			message: 'Updating user {ID} with success',
			users: [],
		})
	} catch (e) {
		res.status(500).send({
			message: 'Contact the administrator',
		})
	}
})

UsersController.delete('/:id', async (_: Request, res: Response) => {
	try {
		res.status(200).send({
			message: 'Removing user {ID} with success',
			users: [],
		})
	} catch (e) {
		res.status(500).send({
			message: 'Contact the administrator',
		})
	}
})

export default UsersController