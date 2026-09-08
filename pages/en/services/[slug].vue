<template>
  <ServicePage :slug="slug" locale="en" />
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string
</script>