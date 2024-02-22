import { createModel } from "@rematch/core";

export const user = createModel()({
  state: {
    name:""
  },

  reducers: {
    addTodo(state, todo) {
      return {
        ...state,
        [Date.now()]: {todo},
      };
    },
  },

  effects: {
    async asyncRemoveTodo(id) {},
  },
})