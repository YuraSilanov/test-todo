<template>
  <v-app>
    <v-main class="pt-5">
      <TodoList />
    </v-main>
  </v-app>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
  name: "App",

  components: {
    TodoList,
  },
};
</script>
