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
