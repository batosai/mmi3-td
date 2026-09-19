/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  movies: {
    index: typeof routes['movies.index']
    show: typeof routes['movies.show']
    reviews: {
      index: typeof routes['movies.reviews.index']
      store: typeof routes['movies.reviews.store']
    }
  }
  newAccount: {
    create: typeof routes['new_account.create']
    store: typeof routes['new_account.store']
  }
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
}
