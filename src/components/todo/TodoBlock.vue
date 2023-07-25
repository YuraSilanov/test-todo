<template>
  <div class="todo-block">
    <TodoCreate />
    <TodoList />
    <v-btn class="mt-3" color="primary" @click="printConsole">Save</v-btn>
  </div>
</template>

<script>
import TodoCreate from "./TodoCreate.vue";
import TodoList from "./TodoList.vue";
import { mapGetters } from "vuex";

export default {
  name: "TodoBlock",
  components: { TodoCreate, TodoList },
  computed: {
    ...mapGetters(["todoList"]),
  },
  methods: {
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
