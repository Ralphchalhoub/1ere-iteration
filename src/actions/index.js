export const increment = (nr) => {
  return {
    type: "INCREMENT",
    payload: nr,
  };
};
export default increment;
