<template>
  <BlogArticlePage :slug="slug" locale="en" />
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
definePageMeta({ validate: (r) => { return true } })
</script>