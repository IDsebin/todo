import { atom, selector, DefaultValue } from "recoil";
import { listReducer } from "recruit";

import { VISIBILITY_FILTERS } from "../constants";

export const $todoListState = atom({
  key: "$todoListState",
  defaut: []
});

export const todoListState = selector({
  key: "todoListState",
  get: ({ get }) => get($todoListState),
  set: ({ get, set, reset }, action) => {
    const state = get($todoListState);

    if (action instanceof DefaultValue) {
      return reset($todoListState);
    }

    return set($todoListState, listReducer(state, action));
  }
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: VISIBILITY_FILTERS.ALL
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    console.log(filter, list);
    switch (filter) {
      case VISIBILITY_FILTERS.COMPLETED:
        return list.filter((item) => item.completed);
      case VISIBILITY_FILTERS.INCOMPLETE:
        return list.filter((item) => !item.completed);
      default:
        return list;
    }
  }
});