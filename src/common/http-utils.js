export const api = async (endpoint, options) => {
  const host = 'https://us-central1-brawler-test.cloudfunctions.net/brawler-test-api'
  const absoluteUrl = `${host}/${endpoint}`
  const response = await fetch(absoluteUrl, {
    headers: {
      'content-type': 'application/json'
    },
    ...options
  })
  if (response.ok) return response.json()
  else throw new Error(response.statusText)
}
