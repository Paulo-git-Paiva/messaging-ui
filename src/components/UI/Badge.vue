<template>
  <span class="badge">
    {{ value }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  value: number;
}>();
</script>

<style scoped>
.badge {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #0768ac;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
}
</style>
