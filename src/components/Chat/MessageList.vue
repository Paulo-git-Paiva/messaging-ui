<template>
  <div ref="container" class="message-list">
    <div class="messages-divider">
      <span>Hoje, 01/03</span>
    </div>

    <div class="audit-alert">
      Todas as conversas podem ser visualizadas pelo gestor do sistema para fins
      de auditoria institucional.
    </div>

    <MessageBubble
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />

    <TypingIndicator v-if="store.typing" />
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from "vue";
import { useChatStore } from "@/store/chat";
import MessageBubble from "./MessageBubble.vue";
import TypingIndicator from "./TypingIndicator.vue";

const store = useChatStore();
const container = ref<HTMLDivElement>();
const messages = computed(() => {
  return store.activeConversation?.messages || [];
});

watch(
  messages,
  async () => {
    await nextTick();
    if (container.value) {
      container.value.scrollTop = container.value.scrollHeight;
    }
  },
  {
    deep: true,
  },
);
</script>
