let nouns = [];
let descriptors = [];

const loadNouns = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/nouns.json')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject('error', error);
      });
  });
};

const loadDescriptors = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/descriptors.json')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject('error', error);
      });
  });
};

const getAllData = () => {
  return Promise.all([loadNouns(),loadDescriptors(),])
    .then((results) => {
      nouns = results[0];
      descriptors = results[1];
    })
    .catch((error) => {
      console.error('error', error);
    });
};

const initializer = () => {
  getAllData();
};

const getNouns = () => {
  return nouns[Math.floor(Math.random() * nouns.length)].text;
};

const getDescriptors = () => {
  return descriptors[Math.floor(Math.random() * descriptors.length)].text;
};

module.exports = {
  initializer,
  getNouns,
  getDescriptors,
};
