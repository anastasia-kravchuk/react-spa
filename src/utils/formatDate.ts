import { getDaySuffix } from "./getDaySuffix";

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const day = date.getUTCDate();
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  return `${month} ${day}${getDaySuffix(day)}, ${year}`;
}

console.log(formatDate("2025-12-25T05:00:30Z"))