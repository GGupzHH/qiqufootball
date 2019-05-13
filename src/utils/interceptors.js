export function interceptorsRequest (config) {
  return config
}

export function interceptorsResponse (response) {
  if (response.status === 200) {
    const { data: { data, msg, error } } = response
    if (!error) {
      return { data, msg }
    } else {
      alert(msg)
    }
  }
}
