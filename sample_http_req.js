const TARGET_URL = "https://www.boredapi.com/api/activity/"

let activity = ""

await fetch(TARGET_URL)
  .then(res => res.json())
  .then(resBody => {
    activity = resBody.activity
  })

console.log(activity)
