export class SignUpController {
  handle (httpRequest: any): any {
    const requiredFields = ['name']
    const body = httpRequest.body

    for (const field of requiredFields) {
      if (!body[field] || body[field] === '')
        return {
          statusCode: 400,
          body: new Error(field)
        }
    }
  }
}
