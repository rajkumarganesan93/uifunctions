import { DateTime } from "luxon";

export const convertTimezone = (
  date: string | Date,
  fromZone: string,
  toZone: string
): string => {
  return DateTime.fromJSDate(new Date(date), { zone: fromZone })
    .setZone(toZone)
    .toISO();
};