<template>
  <div class="todo-block">
    <TodoCreate @addTask="addTask" />
    <TodoList
      :todoList="todoList"
      @changeEditMode="changeEditMode"
      @changeDoneTask="changeDoneTask"
      @removeTask="removeTask"
    />
    <v-btn class="mt-3" color="primary" @click="printConsole">Save</v-btn>
  </div>
</template>

<script>
import TodoCreate from "./TodoCreate.vue";
import TodoList from "./TodoList.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TodoBlock",
  components: { TodoCreate, TodoList },
  computed: {
    ...mapGetters(["todoList"]),
  },
  methods: {
    ...mapMutations(["changeEditMode", "changeDoneTask", "removeTask"]),
    addTask(value) {
      this.$store.commit("addTask", value);
    },
    printConsole() {
      const data = this.todoList.map((task, index) => {
        return {
          field_num: index,
          field_value: task.name,
        };
      });
      console.log(data);
    },
  },
};
</script>

<style lang="scss">
.todo-block {
  max-width: 600px;
  margin: 0 auto;
}
</style>
