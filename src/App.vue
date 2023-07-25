<template>
  <v-app>
    <v-main class="pt-5">
      <TodoBlock />
    </v-main>
  </v-app>
</template>

<script>
import TodoBlock from "./components/todo/TodoBlock";

export default {
  name: "App",

  components: {
    TodoBlock,
  },
};
</script>
