<template>
  <div
    class="conversation-item"
    :class="{
      active: store.activeConversationId === conversation.id,
    }"
    @click="store.selectConversation(conversation.id)"
  >
    <Avatar :src="conversation.avatar" />

    <div class="conversation-content">
      <div class="conversation-top">
        <h3>{{ conversation.name }}</h3>

        <span>
          {{ lastMessage?.createdAt }}
        </span>
      </div>

      <div class="conversation-bottom">
        <p>
          {{
            lastMessage?.sender === "me"
              ? `Você: ${lastMessage?.text}`
              : `${conversation.name.split(" ")[0]}: ${lastMessage?.text}`
          }}
        </p>

        <Badge v-if="conversation.unread" :value="conversation.unread" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useChatStore } from "@/store/chat";
import type { Conversation } from "@/types/chat";
import Avatar from "../UI/Avatar.vue";
import Badge from "../UI/Badge.vue";

const props = defineProps<{
  conversation: Conversation;
}>();
const store = useChatStore();
const lastMessage = computed(() => {
  return props.conversation.messages.at(-1);
});
</script>
<style scoped>
.conversation-item {
  display: flex;
  gap: 10px;
  padding: 5px 15px;
  cursor: pointer;
  transition: background 0.2s;
}

.conversation-item:hover {
  background: #f9fafb;
}

.conversation-item.active {
  background: #eef2f7;
}

.conversation-content {
  flex: 1;
  min-width: 0;
}

.conversation-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 0;
}

.conversation-top h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
}

.conversation-top span {
  font-size: 13px;
  color: #050505;
}

.conversation-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  gap: 8px;
  min-width: 0;
}

.conversation-bottom p {
  flex: 1;
  min-width: 0;
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
