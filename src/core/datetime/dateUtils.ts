import { format } from "date-fns";

/**
 * Format a date into a given pattern.
 * @param date - Date object or ISO string
 * @param pattern - Format string (default: "yyyy-MM-dd")
 * @returns Formatted date string
 */
export const formatDate = (
  date: Date | string,
  pattern = "yyyy-MM-dd"
): string => {
  return format(new Date(date), pattern);
};

/**
 * Human-friendly relative time (e.g., "5 minutes ago").
 * @param date - Date object or ISO string
 * @returns Relative time string
 */
export const timeAgo = (date: Date | string): string => {
  const diff = Date.now() - new Date(date).getTime();
  const minutes = Math.floor(diff / 60000);

  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
};