place = true
cities = ""

while (place == true) {
  location = prompt("Do you have a city to enter: ")
  if (location == "yes") {
    city = prompt("Enter a city: ")
    cities.push(city)
  } else {
    place = false
  }
}

count = 0
while (cities.length !== count) {
  let title = cities[count]
  console.log(title.toLowerCase())
  count++
}
