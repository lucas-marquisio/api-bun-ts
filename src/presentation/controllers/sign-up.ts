import type { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ['name']
    const body = httpRequest.body

    for (const field of requiredFields) {
      if (!body[field] || body[field] === '')
        return {
          statusCode: 400,
          body: new Error(field)
        }
    }
    return {
      statusCode: 200,
      body: {}
    }
  }
}
