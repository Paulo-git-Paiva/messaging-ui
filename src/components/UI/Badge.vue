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
