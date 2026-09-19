import type { HttpContext } from '@adonisjs/core/http'

export default class MoviesController {
  async index({ inertia }: HttpContext) {
    return inertia.render('movies/index', {})
  }

  async show({ params }: HttpContext) {}
}
