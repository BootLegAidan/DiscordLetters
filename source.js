var input = document.getElementById('in')
var output = document.getElementById('out')
var button = document.getElementById('btn')
var letters = "abcdefghijklmnopqrstuvwxyz"
var temp = ""
var letter = ""
 
button.onclick = function() {
  output.innerHTML = ""
  temp = ""
  for (j = 0; j < input.value.length; j++) {
    for (i = 0; i < letters.length; i++) {
      if (input.value.charAt(j) == " ") {
        temp = "\\\n"
      } else if (input.value.charAt(j).toLowerCase() == letters.charAt(i)) {
        letter = letters.charAt(i)
        temp = `:` + letter + letter + letter + `:`
      }
    }
   output.innerHTML += temp.toUpperCase()
  }
  output.innerHTML = output.innerHTML.split('\\').join('');
  output.select()
  document.execCommand('copy')
  input.select()
}
