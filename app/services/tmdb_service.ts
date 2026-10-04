import env from '#start/env'
import ky, { type KyInstance } from 'ky'

/**
 * https://developer.themoviedb.org/reference/movie-popular-list
 */
export interface TmdbMovie {
  id: number
  title: string
  original_title: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  vote_average: number
  vote_count: number
  popularity: number
  original_language: string
}

export class TmdbService {
  #client: KyInstance

  constructor() {
    this.#client = ky.create({
      prefix: env.get('TMDB_BASE_URL'),
      headers: {
        Authorization: `Bearer ${env.get('TMDB_READ_ACCESS_TOKEN').release()}`,
        Accept: 'application/json',
      },
    })
  }

  /**
   * Récupère une page de films populaires (20 films par page).
   */
  async popular(page: number = 1): Promise<TmdbMovie[]> {
    const response = await this.#client
      .get('movie/popular', { searchParams: { page, language: 'fr-FR' } })
      .json<{ results: TmdbMovie[] }>()

    return response.results
  }
}

export default new TmdbService()
