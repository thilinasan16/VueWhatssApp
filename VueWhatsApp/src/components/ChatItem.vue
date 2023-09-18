<script setup lang="ts"></script>

<template>
  <div class="chat-item">
    <div class="chat-item__profile"><img src="/whatsAppIcon.jpg" /></div>
    <div class="chat-item__details">
      <div class="chat-item__name">Sandun Madushanka</div>
      <div class="chat-item__status">Hey there ! I'm using Whatsapp!!</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-item {
  display: flex;
  justify-content: flex-start;
  padding: 5px 10px;
  min-width: 210px;
  margin-bottom: 20px;
  cursor: pointer;
  $chat-item: &;
  &__profile {
    img {
      width: 48px;
      border-radius: 50%;
    }
  }
  &__details {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    justify-content: flex-start;
    #{$chat-item}__name {
      font-size: 16px;
      font-weight: 400;
      color: black;
    }
    #{$chat-item}__status {
      font-size: 10px;
      font-weight: 400;
      color: grey;
    }
  }
}
</style>
