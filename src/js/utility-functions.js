export const randomIntFromRange = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

export const randomFromRange = (min, max) => {
  return Math.random() * (max + 1 - min) + min;
}