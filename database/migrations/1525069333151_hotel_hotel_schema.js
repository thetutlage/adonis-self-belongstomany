'use strict'

const Schema = use('Schema')

class HotelHotelSchema extends Schema {
  up () {
    this.create('hotel_hotel', (table) => {
      table.increments()
      table.integer('hotel_id')
      table.integer('hotel_related_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('hotel_hotel')
  }
}

module.exports = HotelHotelSchema
