
<script setup lang="ts">
// Todo Changer les fonts si besoin
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous'
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap',
      rel: 'stylesheet'
    }
  ]
})

// TODO Config ici
useSchemaOrg([
  defineOrganization({
    name: 'Nom de l\'organisation',
    logo: '/images/logo/example.svg'
  }),
  defineWebSite({
    name: 'Nom du site'
  }),
  defineWebPage()
])
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
