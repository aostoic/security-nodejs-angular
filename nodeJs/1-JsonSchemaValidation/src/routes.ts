import { Application, Router } from 'express'
import TasksController from './controllers/tasks.controller'
import UsersController from './controllers/users.controller'

const _routes: [string, Router][] = [
	['/users', UsersController],
	['/tasks', TasksController],
]

const routes = (app: Application) => {
	_routes.forEach(route => {
		const [url, controller] = route
		app.use(url, controller)
	})
}

export default routes