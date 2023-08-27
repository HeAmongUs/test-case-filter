<template>
  <li class="col-12 col-md-6 col-lg-4 p-2 d-flex col-xl-3">
    <div class="card">
      <div class="card-body d-flex flex-column">
        <div class="d-flex flex-column">
          <h5 class="card-title text-primary">{{ post.title }}</h5>
          <p class="card-text">
            {{ post.body }}
          </p>
        </div>
      </div>
      <div class="card-footer bg-transparent text-muted">{{ post.user.name }}</div>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { IPost } from '@/entries/posts'

interface Props {
  post: IPost
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.card {
  box-sizing: border-box;
}
</style>
