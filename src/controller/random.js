export default (from, to) => {
  const random = from + Math.random() * (to + 1 - from);
  return Math.floor(random);
};
