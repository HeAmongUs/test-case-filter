<template>
  <div class="container d-flex flex-column align-items-center">
    <div class="post-widget-filter">
      <v-input v-model="search" placeholder="Filter by author">
        <template #prepend>
          <svg class="input-prepend-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
        </template>
      </v-input>
    </div>
    <post-list :posts="filteredPosts" :is-loading="!!isLoading.length" />
  </div>
</template>

<script setup lang="ts">
import VInput from '@/components/ui/VInput.vue'
import {computed, Ref, ref} from 'vue'
import type IUser from '@/entries/users'
import type { IPost, IPostResponse } from '@/entries/posts'
import PostList from '@/components/posts/PostList.vue'

import { users as userApi, posts as postApi } from '@/api/index.ts'

const search: Ref<string> = ref('')

const users: Ref<Array<IUser>> = ref([] as Array<IUser>)
const posts: Ref<Array<IPost>> = ref([] as Array<IPost>)

const isLoading: Ref<Array<boolean>> = ref([true])
userApi
  .get()
  .then((r: any) => {
    users.value = r.data

    isLoading.value.push(true)
    postApi
      .get()
      .then((r: any) => {
        posts.value = r.data.map((post: IPostResponse) => ({
          id: post.id,
          title: post.title,
          body: post.body,
          user: users.value.find((user: IUser) => user.id === post.userId)
        }))
      })
      .finally(() => isLoading.value.pop())
  })
  .finally(() => isLoading.value.pop())

const filteredPosts = computed(() => {
  if (!search.value) {
    return posts.value
  }

  const compareValue = search.value.toLowerCase()
  return posts.value.filter(
    (post: IPost) =>
      post.user.name.toLowerCase().includes(compareValue) ||
      post.user.username.toLowerCase().includes(compareValue)
  )
})
</script>

<style scoped lang="scss">
.post-widget-filter {
  padding: 16px 32px;
  max-width: 360px;
}
</style>
