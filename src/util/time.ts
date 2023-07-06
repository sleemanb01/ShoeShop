export const getDate = (date: Date) => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  return dd + "-" + mm + "-" + yyyy;
};
