export const randomIntFromRange = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

export const randomFromRange = (min, max) => {
  return Math.random() * (max + 1 - min) + min;
}

export let mouse = {
  x: undefined,
  y: undefined
}

export const colors = [
  'rgba(255, 136, 119, 0.6)',
  'rgba(255, 221, 102, 0.6)',
  'rgba(62, 227, 187, 0.6)',
  'rgba(62, 204, 221, 0.6)',
  'rgba(0, 145, 201, 0.6)'
];