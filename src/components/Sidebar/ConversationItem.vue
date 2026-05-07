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
