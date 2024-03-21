<template>
  <section class="py-14 bg-gray-100">
    <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
      <div class="max-w-xl space-y-3">
        <p class="text-primary-50 text-3xl font-semibold sm:text-4xl">
          INnUP Support
        </p>
        <p class="text-gray-500">
          Wir freuen uns darauf, Ihnen bei Ihrem Druckvorhaben behilflich sein
          zu dürfen.
        </p>
      </div>
      <div>
        <ul
          class="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24"
        >
          <li v-for="(item, idx) in contactMethods" :key="idx">
            <h4 class="text-gray-500 text-lg font-medium">{{ item.title }}</h4>
            <div class="mt-3 flex items-center gap-x-3">
              <Component :is="item.icon" />
              <a class="text-gray-500" :href="item.href">{{ item.contact }}</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import {
  SfIconCall,
  SfIconLocationOn,
  SfIconEmail,
  SfButton,
  SfLink,
  SfIconCheckCircle,
} from "@storefront-ui/vue";

const contactMethods = ref([
  {
    icon: SfIconLocationOn,
    contact: "Theodor-Heuss-Allee 21, 28215 Bremen, Deutschland.",
    title: "INnUP Deutschland GmbH",
    href: "/",
  },
  {
    icon: SfIconCall,
    contact: "+49 (0) 421 - 620 485 - 0",
    title: "Tel.",
    href: "tel:+4904216204850",
  },
  {
    icon: SfIconCheckCircle,
    contact: "+49 (0) 421 - 620 485 - 29",
    title: "Fax.",
    href: "tel:+49042162048529",
  },
  {
    icon: SfIconEmail,
    contact: "info@innup.de",
    title: "Email",
    href: "mailto:info@innup.de",
  },
]);
</script>
