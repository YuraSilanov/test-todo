<template>
  <div class="todo-create">
    <v-text-field
      :key="addTaskKey"
      v-model="newTaskName"
      :rules="[rules.required]"
      outlined
      label="Create a task"
      append-icon="mdi-plus"
      clearable
      class="mb-3"
      @click:append="addTask"
      @keyup.enter="addTask"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "TodoCreate",
  data: () => ({
    newTaskName: "",
    addTaskKey: 0,
    rules: {
      required: (value) => !!value || "Required.",
    },
  }),
  methods: {
    addTask() {
      this.$emit("addTask", this.newTaskName);
      this.addTaskKey = this.addTaskKey === 0 ? 1 : 0;
      this.newTaskName = "";
    },
  },
};
</script>
