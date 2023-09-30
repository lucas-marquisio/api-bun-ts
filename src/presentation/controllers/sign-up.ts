import { MissingParamError } from '../erros/missing-param-error'
import { PasswordNotMatch } from '../erros/password-not-match'
import { BadRequest } from '../helpers/http-response-helpers'
import type { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    const body = httpRequest.body

    for (const field of requiredFields) {
      if (!body[field] || body[field] === '')
        return BadRequest(new MissingParamError(field))
    }

    if (body.password !== body.passwordConfirmation) {
      return BadRequest(new PasswordNotMatch())
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}
