import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

const validateFields = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) {
		const mappedErrors = errors.mapped()
		const keys: string[] = Object.keys(mappedErrors)

		const payloadErrors: string[] = keys.map(key => {
			return mappedErrors[key].msg
		})

		return res.status(400).send({
			message: 'Invalid fields',
			errors: payloadErrors,
		})
	}

	next()
}

export default validateFields