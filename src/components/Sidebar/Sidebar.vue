<template>
  <aside class="sidebar">
    <SidebarHeader />
    <ConversationList />
  </aside>
</template>

<script setup lang="ts">
import SidebarHeader from "./SidebarHeader.vue";
import ConversationList from "./ConversationList.vue";
</script>
<style scoped>
.sidebar {
  width: 322px;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    max-width: 100%;
    flex: 1;
  }
}
</style>
