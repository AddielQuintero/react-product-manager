export const FormatDate = (currentDate: Date) => {
  return new Date(currentDate).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
