import { NextFunction, Request, Response } from 'express'

const validateHeaders = (req: Request, res: Response, next: NextFunction) => {
	const headers = req.headers

    const contentType = headers['Content-type']
    const accept = headers['accept'] 
    const authorization = headers['authorization']
    const funcionalidad = headers['funcionalidad']
    const codigosesion = headers['codigosesion']
    const xrequestid = headers['xrequestid']
    const xtrackid = headers['xtrackid']
    const rutCliente = headers['rutCliente']
    const dvCliente = headers['dvCliente']

    if (!contentType || contentType !== 'application/json') {
        return res.status(400).send({
            message: 'Content-Type header is required and must be application/json',
        })
    }

    if (!accept || accept !== 'application/json') {
        return res.status(400).send({
            message: 'Accept header is required and must be application/json',
        })
    }

    if (!authorization) {
        return res.status(400).send({
            message: 'Authorization header is required',
        })
    }

    if (!funcionalidad) {
        return res.status(400).send({
            message: 'funcionalidad header is required',
        })
    }

    if (!codigosesion) {
        return res.status(400).send({
            message: 'codigosesion header is required',
        })
    }

    if (!xrequestid) {
        return res.status(400).send({
            message: 'xrequestid header is required',
        })
    }

    if (!xtrackid) {
        return res.status(400).send({
            message: 'xtrackid header is required',
        })
    }

    if (!rutCliente) {
        return res.status(400).send({
            message: 'rutCliente header is required',
        })
    }

    if (!dvCliente) {
        return res.status(400).send({
            message: 'dvCliente header is required',
        })
    }

    next()
}

export default validateHeaders