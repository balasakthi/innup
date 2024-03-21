<template>
  <div class="hero">
    <section
      class="py-16 mx-auto max-w-screen-xl px-4 items-center lg:flex md:px-8 lg:min-h-[500px]"
    >
      <div class="space-y-4 flex-1 text-left">
        <h3 class="text-white font-bold">Willkommen!</h3>
        <h1 class="text-white font-bold text-4xl xl:text-5xl">
          Druckerei INnUP
        </h1>
        <p class="text-gray-300 max-w-xl leading-relaxed lg:mx-auto lg:ml-0">
          Beratung & Bemusterung•Service-Druck zum Online-Preis
        </p>
        <div
          class="pt-3 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex sm:justify-start"
        >
          <SfButton
            :tag="NuxtLink"
            to="/"
            size="lg"
            class="px-7 py-3 w-full sm:w-auto"
          >
            Jetzt bestellen
          </SfButton>
          <SfButton
            :tag="NuxtLink"
            to="/"
            size="lg"
            variant="secondary"
            class="px-7 py-3 w-full sm:w-auto"
          >
            Über INnUP
          </SfButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from "@storefront-ui/vue";

const NuxtLink = resolveComponent("NuxtLink");
</script>

<style scoped>
.hero {
  background-image: url("/images/hero/hero-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
