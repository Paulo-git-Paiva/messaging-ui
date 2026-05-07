<template>
  <div
    v-if="store.typing && store.activeConversation"
    class="message-wrapper other"
  >
    <div class="message-user">
      <img
        class="message-avatar"
        :src="store.activeConversation.avatar"
        :alt="store.activeConversation.name"
      />

      <span class="message-name">
        {{ store.activeConversation.name }}
      </span>
    </div>

    <span class="typing-indicator"> Digitando... </span>
  </div>
</template>

<script setup lang="ts">
import { useChatStore } from "@/store/chat";

const store = useChatStore();
</script>
