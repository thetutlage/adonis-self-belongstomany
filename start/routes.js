'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const Hotel = use('App/Models/Hotel')

Route.get('/', async ({ request }) => {
  const hotel = await Hotel.find(request.input('id'))
  return hotel.hotels().fetch()
})
