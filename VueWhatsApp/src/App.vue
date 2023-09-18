<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import UserLogin from '@/components/UserLogin.vue'
import ChatList from '@/components/ChatList.vue'
import ChatWindow from '@/components/ChatWindow.vue'
import UserProfile from '@/components/UserProfile.vue'

const store = useStore()
const isLoggedIn = computed(() => store.state.User.isLoggedIn)

onMounted(() => {
  store.dispatch('SET_CHAT_USERS')
})
</script>

<template>
  <UserLogin v-if="!isLoggedIn" />
  <div class="chat-container" v-else>
    <div class="chat-container__left-section">
      <UserProfile />
      <ChatList />
    </div>
    <div class="chat-container__right-section">
      <ChatWindow />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  justify-content: flex-start;
  height: 100vh;
  width: 85vw;
  padding: 100px;
  &__left-section {
    flex: 0.35;
  }
  &__right-section {
    flex: 0.65;
  }
}
</style>
