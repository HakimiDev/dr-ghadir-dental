<template>
  <BlogArticlePage :slug="slug" locale="ar" />
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
definePageMeta({ validate: (r) => { return true } })
</script>