<template>
  <div class="message-wrapper" :class="message.sender">
    <div class="message-user">
      <img
        class="message-avatar"
        :src="
          message.sender === 'me'
            ? myUser.avatar
            : store.activeConversation?.avatar
        "
        :alt="
          message.sender === 'me' ? myUser.name : store.activeConversation?.name
        "
      />

      <span class="message-name">
        {{
          message.sender === "me" ? myUser.name : store.activeConversation?.name
        }}
      </span>
    </div>

    <div class="message-bubble">
      {{ message.text }}
    </div>

    <span class="message-time">
      {{ message.createdAt }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Message } from "@/types/chat";
import { useChatStore } from "@/store/chat";

const store = useChatStore();
const myUser = {
  name: "Roberto Silva",
  avatar: "https://i.pravatar.cc/150?img=68",
};

defineProps<{
  message: Message;
}>();
</script>
<style scoped>
.message-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 320px;
}

.message-wrapper.me {
  align-self: flex-end;
  flex-direction: column;
  align-items: flex-end;
}

.message-wrapper.other {
  align-self: flex-start;
}

.message-user {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}

.message-wrapper.me .message-user {
  justify-content: flex-end;
  flex-direction: row-reverse;
}

.message-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
}

.message-name {
  font-size: 14px;
  font-weight: 600;
  color: #374151;
}

.message-bubble {
  max-width: 720px;
  width: fit-content;
  padding: 6px 10px;
  border-radius: 6px;
  background: #edf1f5;
  line-height: 1.5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  word-break: break-word;
}

.message-wrapper.me .message-bubble {
  background: #0f172a;
  color: #f1f5f9;
}

.message-time {
  margin-top: 6px;
  font-size: 12px;
  color: #6b7280;
}
</style>
