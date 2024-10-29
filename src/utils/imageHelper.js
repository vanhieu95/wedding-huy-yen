function getImageUrl (path) {
  return new URL(`../assets/img/${path}`, import.meta.url)
    .href
}

export {
  getImageUrl
}