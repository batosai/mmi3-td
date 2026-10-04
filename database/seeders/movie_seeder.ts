import Movie from '#models/movie'
import tmdb, { type TmdbMovie } from '#services/tmdb_service'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

const PAGES_TO_FETCH = 5

export default class extends BaseSeeder {
  async run() {
    /**
     * Le classement TMDB évolue entre deux appels : un même film peut donc
     * apparaître sur deux pages. On l'indexe par son identifiant TMDB, qui
     * est aussi la clé unique en base.
     */
    const movies = new Map<number, TmdbMovie>()

    for (let page = 1; page <= PAGES_TO_FETCH; page++) {
      for (const movie of await tmdb.popular(page)) {
        movies.set(movie.id, movie)
      }
    }

    const payload = [...movies.values()].map((movie) => ({
      tmdbId: movie.id,
      title: movie.title,
      originalTitle: movie.original_title,
      overview: movie.overview || null,
      posterPath: movie.poster_path,
      backdropPath: movie.backdrop_path,
      releaseDate: movie.release_date ? DateTime.fromISO(movie.release_date) : null,
      voteAverage: movie.vote_average,
      voteCount: movie.vote_count,
      popularity: movie.popularity,
      originalLanguage: movie.original_language,
    }))

    await Movie.updateOrCreateMany('tmdbId', payload)
  }
}
