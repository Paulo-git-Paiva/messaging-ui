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
<style scoped>
.sidebar-header {
  padding: 24px;
}

.sidebar-header h2 {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
}

.sidebar-header p {
  margin-top: 4px;
  color: #6b7280;
  font-size: 14px;
}

.sidebar-search {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  background: #f3f4f6;
  border-radius: 5px;
  padding: 0 10px;
}

.sidebar-search input {
  flex: 1;
  height: 31px;
  border: none;
  background: transparent;
  outline: none;
  font-size: 16px;
}

.sidebar-divider {
  width: calc(100% + 38px);
  height: 1px;
  background: #e5e7eb;
  margin: 13px -14px 12px;
}

.archived-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
  margin-left: 11px;
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
}

.sidebar-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.new-chat-btn {
  border: none;
  background: transparent;
  color: #0d6efd;
  cursor: pointer;
}

.search-icon,
.archive-icon {
  color: #64748b;
  flex-shrink: 0;
}
</style>
