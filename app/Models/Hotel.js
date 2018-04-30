'use strict'

const Model = use('Model')

class Hotel extends Model {
  hotels () {
    return this.belongsToMany('App/Models/Hotel', 'hotel_id', 'hotel_related_id')
  }
}

module.exports = Hotel
