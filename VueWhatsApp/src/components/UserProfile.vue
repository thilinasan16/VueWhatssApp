<script setup lang="ts"></script>

<template>
  <div class="profile">
    <div class="profile__image"><img src="/whatsAppIcon.jpg" /></div>
    <div class="profile__name">Thilina Sumithrarachchi</div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  justify-content: flex-start;
  padding: 5px 10px;
  color: black;
  &__image {
    img {
      width: 48px;
      border-radius: 50%;
    }
  }
  &__name {
    justify-content: flex-start;
    display: flex;
    align-items: flex-start;
    color: black;
    font-size: 20px;
    font-weight: 400;
    margin-left: 20px;
  }
}
</style>
