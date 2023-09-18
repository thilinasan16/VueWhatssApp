<script setup lang="ts">
import ChatMessage from '@/components/ChatMessage.vue'
import UserProfile from '@/components/UserProfile.vue'
</script>

<template>
  <UserProfile />
  <!-- <div class="chat-window--unselected">
    <div class="info">Start a New Message</div>
  </div> -->
  <div class="chat-window--selected">
    <div class="messages-wrapper">
      <ChatMessage v-for="item in 100" :key="item" />
    </div>
    <div class="chat-window__text-container">
      <v-text-field
        :append-icon="'mdi-send'"
        label="Type a Message"
        type="text"
        single-line
        density="compact"
        variant="solo"
        @click:append="sendMessage"
      ></v-text-field>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-window {
  &--selected {
    display: flex;
    flex-direction: column;
    height: 78vh;
    .messages-wrapper {
      flex: 1;
      overflow-y: auto;
      background-image: url('/ChatBackGround.jpg');
      background-repeat: repeat;
    }
    &__text-container {
      margin-top: 5px;
    }
  }
  &--unselected {
    background-image: url('/ChatBackGround.jpg');
    background-repeat: repeat;
    position: relative;
    .info {
      background-color: white;
      border-radius: 10px;
      color: grey;
      position: absolute;
      top: 50px;
    }
  }
}
</style>
