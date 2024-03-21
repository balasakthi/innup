<template>
  <section class="about_us py-28 relative">
    <div
      class="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8"
    >
      <div class="max-w-xl md:mx-auto">
        <p class="text-primary-900 text-3xl font-bold sm:text-4xl">
          Über INnUP
        </p>
        <p class="text-lg text-primary-900 mt-3 font-semibold">
          Wer wir sind und wie wir helfen, Marken zum Leben zu erwecken.
        </p>
      </div>
      <div class="mt-4">
        <SfButton size="lg"> Über INnUP </SfButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { SfButton } from "@storefront-ui/vue";
</script>

<style scoped>
.about_us {
  background: linear-gradient(rgba(0, 81, 159, 0.5), rgba(0, 81, 159, 0.7)),
    url("/images/banner/banner-1.jpg");
}
</style>
