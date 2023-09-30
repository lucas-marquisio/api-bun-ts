import { describe, expect, it } from 'bun:test'

class SignUpController {
  handle (httpRequest: any): any {
    const requiredFields = ['name']
    const body = httpRequest.body

    for (const field of requiredFields) {
      if(!body[field] || body[field] === '') return {
        statusCode: 400,
        body: new Error(field)
      }
    }
  }
}

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
