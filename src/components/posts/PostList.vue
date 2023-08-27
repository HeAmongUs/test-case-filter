<template>
  <div class="w-100">
    <div v-if="!isLoading && !posts?.length">No data found</div>
    <ul class="d-flex flex-wrap pb-4">
      <template v-if="!isLoading">
        <post-list-item v-for="post in posts" :post="post" :key="post.id" />
      </template>
      <template v-else-if="isLoading">
        <post-list-item-placeholder v-for="index in [...Array(12).keys()]" :key="index" />
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { IPost } from '@/entries/posts'
import PostListItem from '@/components/posts/PostListItem.vue'
import PostListItemPlaceholder from "@/components/posts/PostListItemPlaceholder.vue";

interface Props {
  posts: Array<IPost>
  isLoading: Boolean
}

defineProps<Props>()
</script>
<style scoped>

</style>
