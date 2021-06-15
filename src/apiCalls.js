export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error(res)
    })
}
