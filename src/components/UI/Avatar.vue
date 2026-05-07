<template>
  <img class="avatar" :src="src" alt="avatar" />
</template>

<script setup lang="ts">
defineProps<{
  src: string;
}>();
</script>
