import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('full_name')
      table.string('first_name').nullable()
      table.string('last_name').nullable()
      table.enum('role', ['user', 'admin']).notNullable().defaultTo('user')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('first_name')
      table.dropColumn('last_name')
      table.dropColumn('role')
      table.string('full_name').nullable()
    })
  }
}
