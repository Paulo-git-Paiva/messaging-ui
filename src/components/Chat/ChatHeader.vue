<template>
  <header v-if="conversation" class="chat-header">
    <div class="chat-user-wrapper">
      <button v-if="isMobile" class="back-btn" @click="store.closeMobileChat()">
        ‹
      </button>

      <div class="chat-user">
        <Avatar :src="conversation.avatar" />
        <h2>
          {{ conversation.name }}
        </h2>
      </div>
    </div>

    <button class="archive-btn">
      <Archive :size="16" />
      Arquivar
    </button>
  </header>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";
import { Archive } from "lucide-vue-next";
import { useChatStore } from "@/store/chat";
import Avatar from "../UI/Avatar.vue";

const store = useChatStore();
const conversation = computed(() => {
  return store.activeConversation;
});
const isMobile = ref(window.innerWidth <= 768);

function handleResize() {
  isMobile.value = window.innerWidth <= 768;
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.chat-header {
  height: 80px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

.chat-user-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.back-btn {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  font-size: 32px;
  line-height: 1;
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-btn:hover {
  background: #e5e7eb;
}

.chat-user {
  display: flex;
  align-items: center;
  gap: 8px;
}

.chat-user h2 {
  font-size: 18px;
  font-weight: 600;
}

.archive-btn {
  border: 1px solid #d1d5db;
  background: white;
  padding: 10px 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.archive-btn:hover {
  background: #f9fafb;
}
</style>
