import { setYear, parseISO } from 'date-fns'

/**
 * Receives "2022-02-26"
 * @param date 
 */
export function getFutureDate(date: string): Date {
  return setYear(parseISO(date), new Date().getFullYear() + 1)
}