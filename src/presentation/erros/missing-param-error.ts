export class MissingParamError extends Error {
  constructor (private readonly paramError: string) {
    super(`Missing param ${paramError}`)
    this.name = 'MissingParamError'
  }
}
