export const objectValueExtractor = (value: string, object: { [key: string]: string }) => {
  for (let i in object) {
    if (value === i) {
      return object[i];
    }
  }
};

export const percentage = (num: number, percentage: number) => {
  return num * (percentage / 100);
};

export const booleanCondition = (condition: any) => {
  if (condition) {
    return true;
  }
  return false;
};
