<template>
  <div class="todo-list">
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

    <v-card tile>
      <v-list v-if="todoList.length > 0">
        <v-list-item
          v-for="(task, index) in todoList"
          :key="task.id"
          class="todo-list__item"
          :class="{ 'blue lighten-5': task.done }"
          :data-count="`${index + 1}.`"
        >
          <v-list-item-content>
            <v-list-item-title
              v-if="!task.editMode"
              class="todo-list__title"
              :class="{
                'text-decoration-line-through': task.done,
              }"
              >{{ task.name }}
            </v-list-item-title>
            <v-text-field
              v-else
              v-model="task.name"
              :rules="[rules.required]"
              class="mt-0 pt-0"
              :class="{ 'text-decoration-line-through': task.done }"
            ></v-text-field>
          </v-list-item-content>

          <v-list-item-action>
            <v-row class="align-center">
              <v-checkbox
                :value="task.done"
                color="primary"
                @click="changeStatusTask(task.id)"
              >
              </v-checkbox>
              <v-btn icon class="ml-1">
                <v-icon
                  color="primary lighten-1"
                  @click="changeEditMode(task.id)"
                  >mdi-pencil</v-icon
                >
              </v-btn>
              <v-btn icon>
                <v-icon color="primary lighten-1" @click="removeTask(task.id)"
                  >mdi-delete</v-icon
                >
              </v-btn>
            </v-row>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-list-item v-else>
        <v-list-item-content>No items in the list</v-list-item-content>
      </v-list-item>
    </v-card>
    <v-btn class="mt-3" color="primary" @click="printConsole">Save</v-btn>
  </div>
</template>

<script>
export default {
  name: "TodoList",

  data: () => ({
    newTaskName: "",
    addTaskKey: 0,
    rules: {
      required: (value) => !!value || "Required.",
    },
  }),
  computed: {
    todoList() {
      return this.$store.state.todoList;
    },
  },
  methods: {
    addTask() {
      this.$store.commit("addTask", this.newTaskName);
      this.addTaskKey = this.addTaskKey === 0 ? 1 : 0;
      this.newTaskName = "";
    },
    changeEditMode(id) {
      this.$store.commit("changeEditMode", id);
    },
    changeStatusTask(id) {
      this.$store.commit("changeStatusTask", id);
    },
    removeTask(id) {
      this.$store.commit("removeTask", id);
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
.todo-list {
  max-width: 600px;
  margin: 0 auto;

  &__item {
    &::before {
      content: attr(data-count);
      font-size: 12px;
      padding-right: 8px;
      opacity: 0.9 !important; //sorry
    }

    &:not(:last-child) {
      border-bottom: 1px solid rgb(192, 192, 192);
    }
  }

  &__title {
    height: 32px;
    line-height: 32px !important; //sorry
  }
}
</style>
