<template>
  <div class="conversation-list">
    <ConversationItem
      v-for="conversation in store.conversations"
      :key="conversation.id"
      :conversation="conversation"
    />
  </div>
</template>

<script setup lang="ts">
import { useChatStore } from "@/store/chat";
import ConversationItem from "./ConversationItem.vue";

const store = useChatStore();
</script>
