import { HttpResponse } from '../protocols/http'

export const BadRequest = (body: Error): HttpResponse => ({
  statusCode: 400,
  body
})