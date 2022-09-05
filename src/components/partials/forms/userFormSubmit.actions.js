const submitUserForm = async (el, auth) => {
  const apiPath = auth ? "auth" : "register"
  console.log(el, auth)
  return fetch(`https://wonderful-app-lmk4d.cloud.serverless.com/${apiPath}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      username: el.userName,
      password: el.password,
    }),
  }).then((res) => {
    const json = res.json()
    console.log(json)
    if (res.status === 200) {
      return json
    }
    return json.then(Promise.reject.bind(Promise))
  })
}

export default submitUserForm
