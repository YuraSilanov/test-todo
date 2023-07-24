<template>
  <v-card class="mx-auto" max-width="600" tile>
    <v-list flat>
      <v-list-item v-for="(item, id) in items" :key="id">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "TodoList",

  data: () => ({}),
};
</script>
