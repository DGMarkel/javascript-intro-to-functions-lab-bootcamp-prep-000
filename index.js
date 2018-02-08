<<<<<<< HEAD
function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
  } else if (string === string.toUpperCase()) {
    return 'YES INDEED!';
  } else if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
  }
=======
function shout('Hello') {
  return shout.toUpperCase();
>>>>>>> 1a464c8ce5821f1f21bbe445bb76de64f40ee6a2
}
