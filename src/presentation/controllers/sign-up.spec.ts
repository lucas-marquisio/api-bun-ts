import { describe, expect, it } from 'bun:test'
import { MissingParamError } from '../erros/missing-param-error'
import { BadRequest } from '../helpers/http-response-helpers'
import { SignUpController } from './sign-up'
import { PasswordNotMatch } from '../erros/password-not-match'

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

  it('Should return 400 if no email is provide', async () => {
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

  it('Should return 400 if no password is provide', async () => {
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
  }),

  it('Should return 400 if no passwordConfirmation is provide', async () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'email',
        name: 'name',
        password: 'password',
        passwordConfirmation: ''
      }
    }
    const response = await sut.handle(httpRequest)
    expect(response).toEqual(BadRequest(new MissingParamError('passwordConfirmation')))
  }),

  it('Should return 400 if password not match with passwordConfirmation', async () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'email',
        name: 'name',
        password: 'password',
        passwordConfirmation: 'password_error'
      }
    }
    const response = await sut.handle(httpRequest)
    expect(response).toEqual(BadRequest(new PasswordNotMatch()))
  })
})
