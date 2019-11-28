const QueryString = {
  get (key, defaultValue = 0, qs = undefined) {
    if (qs === undefined) {
      qs = window.location.href
    }

    let results = new RegExp('[?&]' + key + '=([^&#]*)').exec(qs)

    if (results) {
      return results[1] || defaultValue
    }

    return defaultValue
  },
}

export default QueryString
