//orderna una lista asc
const orderListAsc = (data, param) => {
  let datasort = [...data];
  datasort.sort((a, b) => {
    if (a[param] < b[param]) {
      return -1;
    }
    return 1;
  });
  return datasort;
};

export { orderListAsc };
