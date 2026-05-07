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
      <span> Shift + Enter para adicionar uma nova linha </span>
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
