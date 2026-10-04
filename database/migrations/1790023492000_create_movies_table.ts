import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'movies'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('tmdb_id').notNullable().unique()
      table.string('title').notNullable()
      table.string('original_title').nullable()
      table.text('overview').nullable()
      table.string('poster_path').nullable()
      table.string('backdrop_path').nullable()
      table.date('release_date').nullable()
      table.float('vote_average').notNullable().defaultTo(0)
      table.integer('vote_count').notNullable().defaultTo(0)
      table.float('popularity').notNullable().defaultTo(0)
      table.string('original_language').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
