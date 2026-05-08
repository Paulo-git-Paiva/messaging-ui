<template>
  <div v-if="store.typing && store.activeConversation" class="typing-wrapper">
    <div class="typing-user">
      <img
        class="typing-avatar"
        :src="store.activeConversation.avatar"
        :alt="store.activeConversation.name"
      />

      <span class="typing-name">
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

<style scoped>
.typing-wrapper {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  max-width: 320px;
}

.typing-user {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}

.typing-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
}

.typing-name {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.typing-indicator {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  background: #f8fafc;
  border: 1px solid #edf1f5;
  border-radius: 5px;
  font-size: 13px;
  font-style: italic;
  color: #6b7280;
  width: fit-content;
}
</style>
