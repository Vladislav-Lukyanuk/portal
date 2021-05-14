export const objMap = <In, Out>(obj: In, mapFunc: (obj: In) => Out): Out => {
  return mapFunc(obj);
};
