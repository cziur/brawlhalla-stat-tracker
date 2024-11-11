fetch('https://brawlhalla.fly.dev/v1/legends/all')
.then(res => res.json())
.then(data => {
  console.log(data.message)
  
})
.catch(err => {
  console.log(`error ${err}`)
})