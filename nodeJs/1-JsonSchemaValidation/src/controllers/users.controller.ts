import { Request, Response, Router } from 'express'
import validateFields from '../middlewares/validate-fields.middleware'

const UsersController: Router = Router()

UsersController.post('/create', [
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

export default UsersController