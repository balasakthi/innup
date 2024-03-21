<template>
  <section class="my-12 mx-auto px-4 max-w-screen-xl lg:px-8">
    <div class="text-center">
      <h1 class="text-3xl text-primary-50 font-semibold">Unsere Produkte</h1>
      <p class="mt-3 text-gray-500 font-semibold">
        Beratung & Bemusterung•Service-Druck zum Online-Preis
      </p>
    </div>
    <div class="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <article
        v-for="product in productDetails"
        :key="product.title"
        class="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
      >
        <div>
          <NuxtImg
            :src="product.image"
            :alt="product.title"
            class="object-cover h-48 rounded-t-md aspect-video"
          />

          <div class="pt-3 ml-4 mr-2 mb-3">
            <h3 class="text-lg text-gray-500 font-bold">
              {{ product.title }}
            </h3>
            <SfButton
              :tag="NuxtLink"
              :href="product.href"
              size="sm"
              variant="tertiary"
              class="relative mt-3"
            >
              <SfIconShoppingCart />
              Preise
            </SfButton>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { SfButton, SfIconShoppingCart } from "@storefront-ui/vue";

const productDetails = getProductDetails();
const NuxtLink = resolveComponent("NuxtLink");
</script>

<style scoped></style>
