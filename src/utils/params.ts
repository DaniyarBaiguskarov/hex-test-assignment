interface IOrder {
  short: boolean;
  target: boolean;
  counter: boolean;
}

export const createParams = (limit: number, offset: number, data: IOrder) => {
  const stringArrs: string[] = [];
  Object.entries(data).forEach(([key, value]: [string, boolean]) => {
    if (value === true) {
      stringArrs.push(`order=asc_${key}`);
    } else {
      stringArrs.push(`order=desc_${key}`);
    }
  });
  stringArrs.push(`offset=${offset}`);
  stringArrs.push(`limit=${limit}`);
  return stringArrs.join("&");
};
