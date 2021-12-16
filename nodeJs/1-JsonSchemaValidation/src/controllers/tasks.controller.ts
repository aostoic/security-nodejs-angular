import { Request, Response, Router } from 'express'

const TasksController: Router = Router()

TasksController.get('/', async (req: Request, res: Response) => {
	try {
		res.status(200).send({
			message: 'Get tasks with success',
			users: [],
		})
	} catch (e) {
		res.status(500).send({
			message: 'Contact the administrator',
		})
	}
})

export default TasksController