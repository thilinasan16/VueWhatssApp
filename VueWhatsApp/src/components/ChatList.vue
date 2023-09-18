<script setup lang="ts">
import ChatItem from '@/components/ChatItem.vue'
</script>

<template>
  <div class="chat-list">
    <ChatItem v-for="item in 15" :key="item.id">
      {{ item.message }}
    </ChatItem>
  </div>
</template>

<style lang="scss" scoped>
.chat-list {
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 80vh;
}
</style>
