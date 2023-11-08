<script setup>
import Task from '@/components/Task.vue'
import TaskList from '@/components/TaskList.vue'

</script>

<template>
  <main>
    <div class="task">
      <h2>Task</h2>
      <div>DEFAULT </div>
      <Task :task='{ "id": "1", "title": "Test Task", "state": "TASK_INBOX" }' v-on:pin-task="() => { }"
        v-on:archive-task="() => { }" />
      <div>PINNED </div>
      <Task :task='{ "id": "1", "title": "Test Task", "state": "TASK_PINNED" }' v-on:pin-task="() => { }"
        v-on:archive-task="() => { }" />
      <div>ARCHIVED </div>
      <Task :task='{ "id": "1", "title": "Test Task", "state": "TASK_ARCHIVED" }' v-on:pin-task="() => { }"
        v-on:archive-task="() => { }" />

    </div>
    <div class="taskList">
      <h2>TaskList</h2>
      <div>DEFAULT</div>
      <TaskList
        :tasks='[{ "id": "1", "title": "Task 1", "state": "TASK_INBOX" }, { "id": "2", "title": "Task 2", "state": "TASK_INBOX" }, { "id": "3", "title": "Task 3", "state": "TASK_INBOX" }, { "id": "4", "title": "Task 4", "state": "TASK_INBOX" }, { "id": "5", "title": "Task 5", "state": "TASK_INBOX" }, { "id": "6", "title": "Task 6", "state": "TASK_INBOX" }]'
        v-on:pin-task="() => { }" v-on:archive-task="() => { }" />
      <div>With Pinned Tasks</div>
      <TaskList
        :tasks='[{ "id": "1", "title": "Task 1", "state": "TASK_INBOX" }, { "id": "2", "title": "Task 2", "state": "TASK_INBOX" }, { "id": "3", "title": "Task 3", "state": "TASK_INBOX" }, { "id": "4", "title": "Task 4", "state": "TASK_INBOX" }, { "id": "5", "title": "Task 5", "state": "TASK_INBOX" }, { "id": "6", "title": "Task 6 (pinned)", "state": "TASK_PINNED" }]'
        v-on:pin-task="() => { }" v-on:archive-task="() => { }" />
      <div>Loading</div>
      <TaskList :tasks="[]" loading v-on:pin-task="() => { }" v-on:archive-task="() => { }" />
      <div>Empty</div>
      <TaskList :tasks="[]" v-on:pin-task="() => { }" v-on:archive-task="() => { }" />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
