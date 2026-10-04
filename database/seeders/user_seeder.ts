import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import { Role } from '#enums/roles'

export default class extends BaseSeeder {
  async run() {
    await User.updateOrCreateMany('email', [
      {
        firstName: 'peter',
        lastName: 'parker',
        email: 'peter.parker@gmail.com',
        password: 'secret',
        role: Role.USER,
      },
      {
        firstName: 'ben',
        lastName: 'parker',
        email: 'ben.parker@gmail.com',
        password: 'secret',
        role: Role.USER,
      },
    ])
  }
}
