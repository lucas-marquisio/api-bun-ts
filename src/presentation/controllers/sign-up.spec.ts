import { describe, expect, it } from 'bun:test'
import { SignUpController } from './sign-up'

describe('SignUpController', () => {
  it('Should return 400 if no name is provide', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'email',
        name: '',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }
    const response = sut.handle(httpRequest)
    expect(response.body.message).toBe('name')
    expect(response.statusCode).toBe(400)
  })
})
