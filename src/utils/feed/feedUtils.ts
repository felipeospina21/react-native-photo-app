export function calcPublishingTimeInHours(createdAt:string) {
  const now = new Date();
  const creationDate = new Date(createdAt);
  const hoursAgo = (now.getTime() - creationDate.getTime()) / (1000 * 60 * 60);
  return Math.floor(hoursAgo);
}

export function calculateYears(days: number) {
  return Math.floor(days / 365);
}
export function calculateMonths(days: number) {
  return Math.floor(days / 30);
}
export function calculateDays(hours: number) {
  return Math.floor(hours / 24);
}
export function formatPublishingTime(hours: number) {
  const days = Math.floor(hours / 24);
  const overTwoYears = days >= 730
  const overOneYear = days >= 365 && days < 730
  const overTwoMonths = days >= 60 && days < 365
  const overOneMonth = days >= 30 && days < 60
  const overTwoDays = hours >= 48
  const overOneDay = hours >= 24

  if (overTwoYears) return `${calculateYears(days)} years`;
  if (overOneYear) return `${calculateYears(days)} year`;
  if (overTwoMonths) return `${calculateMonths(days)} months`;
  if (overOneMonth) return `${calculateMonths(days)} month`;
  if (overTwoDays) return `${calculateDays(hours)} days`;
  if (overOneDay) return `${calculateDays(hours)} day`;
  return `${hours} hours`;
}

export function formatUserLocation(location: string | null) {
  return location ? `at ${location}` : '';
}
