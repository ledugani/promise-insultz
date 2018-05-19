const outputDiv = $('#rude');

const domString = (word1, word2, noun) => {
  let strang = '';
  strang = `<h3>${word1} ${word2} ${noun}</h3>`;
  printToDom(strang);
};

const printToDom = (insult) => {
  outputDiv.html(insult);
};

module.exports = {
  domString,
};
