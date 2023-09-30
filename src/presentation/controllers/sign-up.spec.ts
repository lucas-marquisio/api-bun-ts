import { describe, expect, it } from 'bun:test'
import { MissingParamError } from '../erros/missing-param-error'
import { BadRequest } from '../helpers/http-response-helpers'
import { SignUpController } from './sign-up'

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
  }),

  it('Should return 400 if no name is provide', async () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: '',
        name: 'name',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }
    const response = await sut.handle(httpRequest)
    expect(response).toEqual(BadRequest(new MissingParamError('email')))
  }),

  it('Should return 400 if no name is provide', async () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'email',
        name: 'name',
        password: '',
        passwordConfirmation: 'password'
      }
    }
    const response = await sut.handle(httpRequest)
    expect(response).toEqual(BadRequest(new MissingParamError('password')))
})

})
