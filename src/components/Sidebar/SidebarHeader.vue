<template>
  <div class="sidebar-header">
    <div class="sidebar-top">
      <div>
        <h2>Central de Comunicação</h2>
        <p>Comunicação interna</p>
      </div>

      <button class="new-chat-btn">
        <MessageSquarePlus :size="20" />
      </button>
    </div>

    <div class="sidebar-divider"></div>

    <div class="sidebar-search">
      <Search class="search-icon" :size="15" />

      <input type="text" placeholder="Buscar conversas" />
    </div>

    <div class="archived-label">
      <Archive class="archive-icon" :size="14" />

      <span>Conversas arquivadas</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search, Archive, MessageSquarePlus } from "lucide-vue-next";
</script>
