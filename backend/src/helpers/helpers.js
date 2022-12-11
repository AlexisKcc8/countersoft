import { v4 } from "uuid";
export const iteratorBodyRequestArray = (bodyRequest) => {
  let newObjectArray = [];
  for (const element of bodyRequest) {
    element.id = v4();
    newObjectArray.push(element);
  }
  return newObjectArray;
};
