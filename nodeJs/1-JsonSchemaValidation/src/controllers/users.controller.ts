import { Request, Response, Router } from 'express'

const UsersController: Router = Router()

UsersController.get('/', async (req: Request, res: Response) => {
	try {
		res.status(200).send({
			message: 'Get users with success',
			users: [],
		})
	} catch (e) {
		res.status(500).send({
			message: 'Contact the administrator',
		})
	}
})

export default UsersController