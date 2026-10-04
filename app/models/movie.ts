import env from '#start/env'
import { MovieSchema } from '#database/schema'

export default class Movie extends MovieSchema {
  get posterUrl(): string | null {
    return this.posterPath ? `${env.get('TMDB_IMAGE_BASE_URL')}/w500${this.posterPath}` : null
  }

  get backdropUrl(): string | null {
    return this.backdropPath ? `${env.get('TMDB_IMAGE_BASE_URL')}/w1280${this.backdropPath}` : null
  }

  get releaseYear(): number | null {
    return this.releaseDate ? this.releaseDate.year : null
  }
}
