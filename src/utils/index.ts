export const getManyRandomElements = <T>(
  arr: Array<T>,
  numOfArray: number
): Array<T> => {
  if (arr.length === 0) return [];

  const limit = Math.min(numOfArray, arr.length);

  const randomIndices = new Set<number>();

  while (randomIndices.size < limit) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    randomIndices.add(randomIndex);
  }

  return Array.from(randomIndices).map((index) => arr[index]);
};

export const getSingleRandomElement = <T>(arr: Array<T>): T | null => {
  if (arr.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
