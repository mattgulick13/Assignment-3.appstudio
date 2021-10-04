let product = ["Crocheted Dog Toy", "Slow Feeder Bowl", "Pawz Grey Treat Jar", "Blue Sweet Dreams Thermal Pajamas", "Checker Chewy Vuiton Bowl", "Red Heart Sweater Dress", "Velvet Hair Bow - Sun Kissed", "Into the Wild Leash"]
let price = [10, 14, 20, 30, 32, 27, 12, 27]

let wishList = ""
let unit = ""

btn1.onclick = function() {
  for (let x = 0; x <= price.length - 1; x++) {
    unit.push(`${product[x]} : ${price[x]}`)
  }
  lbl.value = `${unit}`
}


btn2.onclick = function() {
  let product = items.value
  wishList.push(product)
  list.value = `${wishList}`
}