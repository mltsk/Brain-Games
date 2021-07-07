const generateRandomInt = (max) => Math.floor(Math.random() * max);

const generateRandomIntOfRange = (min, max) => {
  const randomNumber = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(randomNumber);
};

export { generateRandomInt, generateRandomIntOfRange };
