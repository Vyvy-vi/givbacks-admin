export async function performCalculations(startDate: string, endDate: string) {
  try {
    await fetch(`/api/givbacks?startDate=${startDate}&endDate=${endDate}`)
  } catch (e) {
    console.log(e)
  }
}
