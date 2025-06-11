import { atom, selector, useRecoilValue } from "recoil";

const todoAtom = atom({
  key: "todosState",
  default: {
    todos: [
      { id: 1, title: "Todo 1" },
      { id: 2, title: "Todo 2" },
      { id: 3, title: "Todo 3" },
    ],
    newTodoInput: "",
  },
});

export const todoStateSelector = selector({
  key: "todosStateSelector",
  get: ({ get }) => {
    return get(todoAtom).todos;
  },
  set: ({ set, get }, newTodos) => {
    set(todoAtom, {
      ...get(todoAtom),
      todos: newTodos,
    });
  },
});

export const todoInputSelector = selector({
  key: "todoInputSelector",
  get: ({ get }) => {
    return get(todoAtom).newTodoInput;
  },
  set: ({ set, get }, newInput) => {
    set(todoAtom, {
      ...get(todoAtom),
      newTodoInput: newInput,
    });
  },
});

export const useTodos = () => {
  return useRecoilValue(todoStateSelector);
};

export default todoAtom;
