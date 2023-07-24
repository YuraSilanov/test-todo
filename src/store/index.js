import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [],
  },
  mutations: {
    addTask(state, name) {
      if (!name) return;
      state.todoList.push({
        id: Date.now(),
        name,
        done: false,
        editMode: false,
      });
    },
    changeEditMode(state, id) {
      const task = state.todoList.find((task) => task.id === id);
      if (task && task.name) {
        task.editMode = !task.editMode;
      }
    },
    changeStatusTask(state, id) {
      const task = state.todoList.find((task) => task.id === id);
      if (task) {
        task.done = !task.done;
      }
    },
    removeTask(state, id) {
      state.todoList = state.todoList.filter((task) => task.id !== id);
    },
  },
});
