export const CategoryLoader = async ({ params }: any) => {
  console.log(params, "params");
  return params.id;
};
