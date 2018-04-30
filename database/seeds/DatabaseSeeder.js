'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Hotel = use('App/Models/Hotel')

class DatabaseSeeder {
  async run () {
    await Hotel.truncate()

    const hotel = await Hotel.create({ name: 'XYZ' })
    const hotel1 = await Hotel.create({ name: 'XYZ city 1' })
    const hotel2 = await Hotel.create({ name: 'XYZ city 2' })
    await hotel.hotels().attach([hotel1.id, hotel2.id])
  }
}

module.exports = DatabaseSeeder
