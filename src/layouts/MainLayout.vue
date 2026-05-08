<template>
  <div class="app-layout">
    <Sidebar v-if="!isMobile || !store.mobileChatOpened" />
    <ChatView v-if="!isMobile || store.mobileChatOpened" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useChatStore } from "@/store/chat";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import ChatView from "@/views/ChatView.vue";

const store = useChatStore();
const isMobile = ref(window.innerWidth <= 768);

function handleResize() {
  isMobile.value = window.innerWidth <= 768;
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
</style>
