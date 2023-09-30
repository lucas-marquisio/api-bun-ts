import { describe, expect, it } from 'bun:test'
import { SignUpController } from './sign-up'
import { BadRequest } from '../helpers/http-response-helpers'
import { MissingParamError } from '../erros/missing-param-error'

describe('SignUpController', () => {
  it('Should return 400 if no name is provide', async () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'email',
        name: '',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }
    const response = await sut.handle(httpRequest)
    expect(response).toEqual(BadRequest(new MissingParamError('name')))
  })
})
