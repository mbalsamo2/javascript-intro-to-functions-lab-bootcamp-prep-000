function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var spy = "hello" 
  console.log(string.toUpperCase(spy))
}

function logWhisper(string) {
  var spy = "HELLO"
  console.log(string.toLowerCase(spy))
}

function sayHiToGrandma(string) {
  var uppercase = "HELLO"
  var lowercase = "hello"
  if (string === lowercase) {
   return "I can\'t hear you!"
} else {
   return "YES INDEED"
}
}
