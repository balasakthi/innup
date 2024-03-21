<template>
  <section class="py-14 bg-primary-50">
    <div class="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
      <h3 class="text-primary-800 text-3xl font-semibold sm:text-4xl">
        Next Level Printing - INnUP
      </h3>
      <p class="mt-3 text-primary-800">
        INnUP setzt auf hoch ausgebildete und motivierte Mitarbeiter, gestützt
        durch modernste Technologie, insbesondere künstliche Intelligenz (KI),
        um Ihren Druckeinkauf zu einem hoch stabilen und erfolgführenden
        Erlebnis zu machen. Von der Beratung und Bemusterung über das
        Druckdatenhandling bis hin zur Druckausführung und der Lieferung
        erhalten Sie so ein hohes Maß an Sicherheit, dass Ihre Anforderungen
        erkannt und umgesetzt werden, und das zu dem jeweils günstigsten Preis,
        der uns, und wohl den meisten, für diese jeweilige konkrete Anforderung
        möglich ist.
      </p>
      <SfButton :tag="NuxtLink" href="/" class="mt-5" variant="secondary"
        >Über INnUP</SfButton
      >
    </div>
  </section>
</template>

<script setup>
import { SfButton } from "@storefront-ui/vue";
const NuxtLink = resolveComponent("NuxtLink");
</script>
