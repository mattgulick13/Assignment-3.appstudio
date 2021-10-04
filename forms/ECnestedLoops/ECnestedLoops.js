let columns = prompt('How many asterisks 1 to 10')

let rows = prompt('How many lines 1 to 10?')

randomChar = ''

for (y = 0; y < rows; y++) {

  for (z = 0; z < columns; z++) {

    randomChar += '*'

  }

  randomChar += '<br/>'

}

document.write(`${randomChar}`)