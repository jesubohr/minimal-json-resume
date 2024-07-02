function getMonthYearRange(startDate: string, endDate: string) {
  return new Intl.DateTimeFormat(`en-US`, {
    month: "short",
    year: "numeric"
  }).formatRange(new Date(startDate), new Date(endDate))
}

function getMonthYear(date: string) {
  return new Intl.DateTimeFormat(`en-US`, {
    month: "short",
    year: "numeric"
  }).format(new Date(date))
}

export function getRangeDateWithPresent(startDate: string,
  endDate: string | undefined) {
  return endDate != null
    ? `${getMonthYearRange(startDate, endDate)}`
    : `${getMonthYear(startDate)} - Present`
}
