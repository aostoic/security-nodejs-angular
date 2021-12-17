import { Application, Router } from 'express'
import UsersController from './controllers/users.controller'

const _routes: [string, Router][] = [
	['/users', UsersController],
]

const routes = (app: Application) => {
	_routes.forEach(route => {
		const [url, controller] = route
		app.use(url, controller)
	})
}

export default routes