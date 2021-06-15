export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error(res)
    })
}

export const addUrl = (newUrl) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUrl)
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error(res)
    })
}
