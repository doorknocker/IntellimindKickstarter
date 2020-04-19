module.exports = (array) =>
  array
    .map((item, index) => {
      if (index % 2 !== 0) {
        return undefined;
      }
      return {
        email: array[index],
        score: array[index + 1],
      };
    })
    .filter((item) => item !== undefined);
