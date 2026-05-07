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
