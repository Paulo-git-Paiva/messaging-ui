<template>
  <img class="avatar" :src="src" alt="avatar" />
</template>

<script setup lang="ts">
defineProps<{
  src: string;
}>();
</script>

<style scoped>
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}
</style>
