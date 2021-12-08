const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
}

const state = {
  todoItems: storage.fetch()
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
};

const mutations = {
  addOneItem(state, todoItem) {
    let obj = {
      completed: false,
      item: todoItem
    };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeOneItem(state, payload) {
    let _todoItem = payload.todoItem;
    let _idx = payload.idx;
    localStorage.removeItem(_todoItem.item);
    state.todoItems.splice(_idx, 1);
  },
  toggleOneItem(state, payload) {
    let _todoItem = payload.todoItem;
    let _idx = payload.idx; // todoItem.completed = !todoItem.completed;
    // this.todoItems[idx].completed = !this.todoItems[idx].completed;
    state.todoItems[_idx].completed = !state.todoItems[_idx].completed;
    //   _todoItem.completed = !_todoItem.completed;
    localStorage.removeItem(_todoItem.item);
    localStorage.setItem(_todoItem.item, JSON.stringify(_todoItem));
  },
  clearAllItem(state) {
    state.todoItems = [];
    localStorage.clear();
  }

}

export default {
  state,
  getters,
  mutations
};
