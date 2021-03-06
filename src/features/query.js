import ga from '../ga'

/**
 * Plain access to the GA
 * with the query method is possible to pass everything.
 * if there's some new command that is not implemented yet, just use this
 * @param  {any} args
 */
export default function query (...args) {
  ga(...args)
}
