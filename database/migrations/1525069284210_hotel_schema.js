'use strict'

const Schema = use('Schema')

class HotelSchema extends Schema {
  up () {
    this.create('hotels', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('shortDescription').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('hotels')
  }
}

module.exports = HotelSchema
