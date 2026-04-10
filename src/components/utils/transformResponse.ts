export const transformResponse = <T extends Record<string, any>>(data: T) => {
  return Object.entries(data).map(([id, item]) => ({ id, ...item }));
};

// const transformResponse = (data: RecipesResponce): Recipe[] => {
//   return Object.entries(data).map(([id, recipe]) => ({
//     id,
//     ...recipe
//   }));
// };