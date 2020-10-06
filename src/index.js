const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const wordsMorse = [];
  const wordsArr = [];
  const regSpace = /\*{10}/g;
  const regEleven = /11/g;
  const regTen = /10/g;
  const regZero = /0/g;

  for (let i = 0; i < expr.length / 10; i++) {
    wordsMorse.push(expr.slice(i * 10, (i + 1) * 10));
  }

  const strMorse = wordsMorse.map((word) => word.replace(regSpace, ' ').replace(regEleven, '-').replace(regTen, '.').replace(regZero, ''));

  strMorse.forEach((word) => wordsArr.push(MORSE_TABLE[word] || ' '));

  return wordsArr.join('');
}

module.exports = {
  decode,
};
