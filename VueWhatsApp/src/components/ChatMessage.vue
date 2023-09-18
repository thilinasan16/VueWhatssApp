<script setup lang="ts"></script>

<template>
  <div class="message">
    <span class="message__content">Hi</span>
    <span class="message__time">2.11pm</span>
  </div>
</template>

<style lang="scss" scoped>
.message {
  padding: 10px 20px;
  &__content {
    font-size: 14px;
    color: white;
  }
  &__time {
    font-size: 8px;
    color: grey;
    margin-left: 10px;
  }
}
</style>
