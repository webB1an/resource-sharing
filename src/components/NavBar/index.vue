<script setup lang="ts">
import { computed } from "vue";
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";
import { useNavTitleStore } from "@/store/modules/navTitle";

const onClickRight = (event: TouchEvent | MouseEvent) => {
  useToggleDarkMode(event);
};

const navTitle = computed(() => useNavTitleStore().navTitle);
</script>

<template>
  <van-nav-bar fixed placeholder @click-right="onClickRight">
    <template #title> {{ navTitle }} </template>
    <template #right>
      <svg-icon class="text-[18px]" :name="useDarkMode() ? 'light' : 'dark'" />
    </template>
  </van-nav-bar>
</template>

<style scoped></style>
