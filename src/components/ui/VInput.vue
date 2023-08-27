<template>
  <div class="input-group">
    <span v-if="$slots.prepend" class="input-group-text" id="basic-addon1">
      <slot name="prepend"></slot>
    </span>
    <input
      :type="type"
      :value="modelValue"
      class="form-control"
      :placeholder="placeholder"
      aria-label="Username"
      aria-describedby="basic-addon1"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | number | null
  type?: string
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  modelValue: null
})
</script>

<style scoped></style>
