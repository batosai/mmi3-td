import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'movies.index': { paramsTuple?: []; params?: {} }
    'movies.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'movies.reviews.index': { paramsTuple: [ParamValue]; params: {'movie_id': ParamValue} }
    'movies.reviews.store': { paramsTuple: [ParamValue]; params: {'movie_id': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'movies.index': { paramsTuple?: []; params?: {} }
    'movies.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'movies.reviews.index': { paramsTuple: [ParamValue]; params: {'movie_id': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'movies.index': { paramsTuple?: []; params?: {} }
    'movies.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'movies.reviews.index': { paramsTuple: [ParamValue]; params: {'movie_id': ParamValue} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'movies.reviews.store': { paramsTuple: [ParamValue]; params: {'movie_id': ParamValue} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}