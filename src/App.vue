<script setup>
import Task from '@/components/Task.vue'
</script>

<template>
  
  <main>
    <div>DEFAULT </div>
    <Task :task='{ "id": "1", "title": "Test Task", "state": "TASK_INBOX" }' v-on:pin-task="() => { }"
      v-on:archive-task="() => { }" />
    <div>PINNED </div>
    <Task :task='{ "id": "1", "title": "Test Task", "state": "TASK_PINNED" }' v-on:pin-task="() => { }"
      v-on:archive-task="() => { }" />
    <div>ARCHIVED </div>
    <Task :task='{ "id": "1", "title": "Test Task", "state": "TASK_ARCHIVED" }' v-on:pin-task="() => { }"
      v-on:archive-task="() => { }" />
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
