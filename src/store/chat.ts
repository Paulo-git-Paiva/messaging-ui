import { defineStore } from "pinia";
import { mockConversations } from "@/data/mock";
import type { Message } from "@/types/chat";

export const useChatStore = defineStore("chat", {
  state: () => ({
    conversations: mockConversations,
    activeConversationId: 1,
    typing: false,
  }),

  getters: {
    activeConversation(state) {
      return state.conversations.find(
        (c) => c.id === state.activeConversationId,
      );
    },
  },

  actions: {
    selectConversation(id: number) {
      this.activeConversationId = id;
    },

    sendMessage(text: string) {
      if (!this.activeConversation) return;

      const message: Message = {
        id: Date.now(),
        text,
        sender: "me",
        createdAt: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      this.activeConversation.messages.push(message);

      this.simulateTyping();
    },

    simulateTyping() {
      this.typing = true;

      setTimeout(() => {
        if (!this.activeConversation) return;

        this.activeConversation.messages.push({
          id: Date.now(),
          text: "Claro! Vamos alinhar isso.",
          sender: "other",
          createdAt: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });

        this.typing = false;
      }, 1500);
    },
  },
});
