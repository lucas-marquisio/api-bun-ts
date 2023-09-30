export class PasswordNotMatch extends Error {
  constructor() {
    super('Passowrd not match')
    this.name = 'PasswordNotMatch'
  }
}