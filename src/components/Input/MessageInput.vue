<template>
  <div class="message-input-wrapper">
    <div class="message-input-container">
      <textarea
        v-model="message"
        placeholder="Escreva uma mensagem"
        @keydown="handleKeyDown"
      />

      <button class="attach-btn">
        <Paperclip :size="20" />
      </button>

      <button class="send-btn" @click="sendMessage">
        Enviar

        <SendHorizontal :size="16" />
      </button>
    </div>

    <div class="input-footer">
      <span>{{ message.length }}/2000 caracteres |</span>
      <span>Shift + Enter para adicionar uma nova linha </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Paperclip, SendHorizontal } from "lucide-vue-next";
import { useChatStore } from "@/store/chat";

const store = useChatStore();
const message = ref("");

function sendMessage() {
  if (!message.value.trim()) return;

  store.sendMessage(message.value);

  message.value = "";
}

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();

    sendMessage();
  }
}
</script>

<style scoped>
.message-input-wrapper {
  padding: 14px 16px;
  background: white;
  border-top: 1px solid #e5e7eb;
}

.message-input-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.message-input-container textarea {
  flex: 1;
  height: 32px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  padding: 6px 12px;
  resize: none;
  outline: none;
  font-size: 16px;
  transition: 0.2s;
}

.message-input-container textarea:focus {
  border-color: #0d6efd;
}

.input-footer {
  display: flex;
  justify-content: start;
  margin-top: 8px;
  font-size: 12px;
  gap: 6px;
  color: #6b7280;
}

.attach-btn {
  width: auto;
  height: 34px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent !important;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  color: #0d6efd !important;
  transition: opacity 0.2s ease;
}

.attach-btn:hover {
  opacity: 0.7;
}

.send-btn {
  height: 30px;
  padding: 0 15px;
  border: none;
  border-radius: 5px;
  background: #0d6efd;
  color: white;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: 0.2s;
}

.send-btn:hover {
  opacity: 0.92;
}

@media (max-width: 768px) {
  .message-input-wrapper {
    padding: 16px;
  }

  .input-footer {
    flex-direction: column;
    gap: 4px;
  }
}
</style>
