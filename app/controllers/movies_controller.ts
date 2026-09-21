import type { HttpContext } from '@adonisjs/core/http'

export default class MoviesController {
  async index({ inertia }: HttpContext) {
    return inertia.render('movies/index', {})
  }

  async show({ params, inertia }: HttpContext) {
    return inertia.render('movies/show', {
      id: params.id,
    })
  }
}
