<template>
  <header v-if="conversation" class="chat-header">
    <div class="chat-user">
      <Avatar :src="conversation.avatar" />
      <h2>{{ conversation.name }}</h2>
    </div>

    <button class="archive-btn">
      <Archive :size="16" />
      Arquivar
    </button>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Archive } from "lucide-vue-next";
import { useChatStore } from "@/store/chat";
import Avatar from "../UI/Avatar.vue";

const store = useChatStore();

const conversation = computed(() => {
  return store.activeConversation;
});
</script>
