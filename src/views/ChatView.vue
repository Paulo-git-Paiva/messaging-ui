<template>
  <main class="chat-view">
    <ChatHeader />
    <MessageList />
    <MessageInput />
  </main>
</template>

<script setup lang="ts">
import ChatHeader from "@/components/Chat/ChatHeader.vue";
import MessageList from "@/components/Chat/MessageList.vue";
import MessageInput from "@/components/Input/MessageInput.vue";
</script>

<style scoped>
.chat-view {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  overflow: hidden;
}

@media (max-width: 768px) {
  .chat-view {
    width: 100%;
    max-width: 100%;
    flex: 1;
  }
}
</style>
