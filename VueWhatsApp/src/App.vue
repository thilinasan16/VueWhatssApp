<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import UserLogin from '@/components/UserLogin.vue'
import ChatList from '@/components/ChatList.vue'
import ChatWindow from '@/components/ChatWindow.vue'
import UserProfile from '@/components/UserProfile.vue'

const store = useStore()
const isLoggedIn = computed(() => store.state.User.isLoggedIn)

function logOut() {
  store.dispatch('LOGOUT')
}

onMounted(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user: any) => {
    if (user) {
      const currentUser = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber
      }
      store.commit('SET_USER', currentUser)
      store.commit('SET_LOGGED_IN', true)
      store.dispatch('SET_CHAT_USERS')
    }
  })
})
</script>

<template>
  <UserLogin v-if="!isLoggedIn" />
  <div class="chat-container" v-else>
    <div class="chat-container__left-section">
      <div class="chat-container__left-section__wrapper">
        <UserProfile />
        <v-btn density="compact" icon="mdi-logout" @click="logOut"></v-btn>
      </div>
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
    &__wrapper {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid darkcyan;
      .v-btn {
        display: flex;
        align-self: center;
        margin-right: 10px;
      }
    }
  }
  &__right-section {
    flex: 0.65;
  }
}
</style>
