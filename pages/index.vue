<script setup lang="ts">
defineOgImageScreenshot({
  // TODO Mettre à jour l'alt de l'image illustration SEO
  alt: 'Home page'
})
useSeoMeta({
  // TODO Mettre à jour le titre SEO
  title: 'Home',
  // TODO Mettre à jour la description SEO
  description: 'Home page'
})
useHead({
  link: [
    // TODO Mettre à jour l'url canonical
    {
      rel: 'canonical',
      href: 'https://www.example.com/'
    }
  ]
})
</script>

<template>
  <div />
</template>
