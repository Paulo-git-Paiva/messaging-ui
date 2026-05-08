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
<style scoped>
.message-list {
  flex: 1;
  overflow-y: auto;
  padding: 120px 25px;
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.messages-divider {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 30px 0 20px;
}

.messages-divider::before,
.messages-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #e5e7eb;
}

.messages-divider span {
  font-size: 12px;
  font-weight: 600;
  color: #374151;
}

.audit-alert {
  align-self: center;
  background: #fff8db;
  border: 1px solid #facc15;
  color: #a16207;
  padding: 6px 10px;
  border-radius: 5px;
  font-size: 12px;
  margin-bottom: 5px;
}
</style>
