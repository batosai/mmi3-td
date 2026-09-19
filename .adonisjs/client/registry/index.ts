/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'movies.index': {
    methods: ["GET","HEAD"],
    pattern: '/movies',
    tokens: [{"old":"/movies","type":0,"val":"movies","end":""}],
    types: placeholder as Registry['movies.index']['types'],
  },
  'movies.show': {
    methods: ["GET","HEAD"],
    pattern: '/movies/:id',
    tokens: [{"old":"/movies/:id","type":0,"val":"movies","end":""},{"old":"/movies/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['movies.show']['types'],
  },
  'movies.reviews.index': {
    methods: ["GET","HEAD"],
    pattern: '/movies/:movie_id/reviews',
    tokens: [{"old":"/movies/:movie_id/reviews","type":0,"val":"movies","end":""},{"old":"/movies/:movie_id/reviews","type":1,"val":"movie_id","end":""},{"old":"/movies/:movie_id/reviews","type":0,"val":"reviews","end":""}],
    types: placeholder as Registry['movies.reviews.index']['types'],
  },
  'movies.reviews.store': {
    methods: ["POST"],
    pattern: '/movies/:movie_id/reviews',
    tokens: [{"old":"/movies/:movie_id/reviews","type":0,"val":"movies","end":""},{"old":"/movies/:movie_id/reviews","type":1,"val":"movie_id","end":""},{"old":"/movies/:movie_id/reviews","type":0,"val":"reviews","end":""}],
    types: placeholder as Registry['movies.reviews.store']['types'],
  },
  'new_account.create': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.create']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
