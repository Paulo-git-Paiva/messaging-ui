<template>
  <div class="app-layout">
    <Sidebar />
    <ChatView />
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import ChatView from "@/views/ChatView.vue";
</script>
<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
</style>
