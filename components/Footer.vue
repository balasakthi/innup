<template>
  <footer class="pt-10 bg-neutral-100">
    <div
      class="grid justify-center grid-cols-[1fr_1fr] md:grid-cols-[repeat(4,1fr)] px-4 md:px-6 pb-10 max-w-[1536px] mx-auto"
    >
      <ul
        v-for="{ label, subcategories } in categories"
        :key="label"
        class="grid grid-cols xs:pb-4"
      >
        <li
          class="ml-4 text-lg font-medium leading-7 text-neutral-900 font-body"
        >
          {{ label }}
        </li>
        <SfListItem
          v-for="{ subcategoryLabel, link } in subcategories"
          :key="subcategoryLabel"
          class="py-2 !bg-transparent typography-text-sm font-body"
        >
          <SfLink
            :tag="NuxtLink"
            class="no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
            variant="secondary"
            :href="link"
          >
            {{ subcategoryLabel }}
          </SfLink>
        </SfListItem>
      </ul>
    </div>
    <hr />
    <div class="py-10 md:flex md:mx-auto max-w-[1536px]">
      <div
        v-for="{ label, icon, link, details } in contactOptions"
        :key="label"
        class="mx-auto my-4 text-center"
      >
        <component :is="icon" size="lg" />
        <p class="py-1 my-2 font-medium typography-text-lg font-body">
          <SfLink
            :tag="NuxtLink"
            variant="secondary"
            class="no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
            :href="link"
          >
            {{ label }}
          </SfLink>
        </p>
        <p
          v-for="option in details"
          :key="option"
          class="leading-5 typography-text-sm text-neutral-600 font-body"
        >
          {{ option }}
        </p>
      </div>
    </div>
    <div class="bg-white">
      <div
        class="justify-end px-4 py-10 lg:flex lg:py-6 max-w-[1536px] mx-auto"
      >
        <div class="flex justify-center py-2 gap-x-4 lg:self-start">
          <div
            class="flex flex-wrap lg:justify-between lg:flex-nowrap items-center flex-row justify-center h-full max-w-[1536px] w-full"
          >
            <div
              class="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px]"
            >
              <SfLink
                :tag="NuxtLink"
                href="/"
                aria-label="SF Homepage"
                class="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
              >
                <picture>
                  <source
                    srcset="/logo/innup-text-logo.svg"
                    media="(min-width: 768px)"
                  />
                  <NuxtImg
                    src="/logo/innup-logo.svg"
                    alt="INnUP Logo"
                    class="w-[65px] md:w-[120px] lg:w-[150px]"
                  />
                </picture>
              </SfLink>

              <p
                class="flex items-center justify-center py-2 leading-5 text-center typography-text-sm text-neutral-500 font-body md:ml-6"
              >
                © {{ new Date().getFullYear() }}
                <strong class="ml-2">INnUP Deutschland GmbH</strong>
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-wrap items-center justify-center gap-6 py-2 my-4 md:ml-auto md:my-0"
        >
          <SfLink
            v-for="{ label, link } in bottomLinks"
            :key="label"
            :tag="NuxtLink"
            variant="secondary"
            class="typography-text-sm no-underline text-neutral-600 hover:underline hover:!text-neutral-900 active:underline active:!text-neutral-900"
            :href="link"
          >
            {{ label }}
          </SfLink>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import {
  SfIconContactSupport,
  SfIconHelp,
  SfIconCall,
  SfLink,
  SfListItem,
} from "@storefront-ui/vue";

const NuxtLink = resolveComponent("NuxtLink");

const categories = [
  {
    label: "How to buy",
    subcategories: [
      {
        subcategoryLabel: "Payment methods",
        link: "/",
      },
      {
        subcategoryLabel: "Order pickup",
        link: "/",
      },
      {
        subcategoryLabel: "Purchase status",
        link: "/",
      },
      {
        subcategoryLabel: "Track orders",
        link: "/",
      },
      {
        subcategoryLabel: "Returns",
        link: "/",
      },
    ],
  },
  {
    label: "Help",
    subcategories: [
      {
        subcategoryLabel: "Help centers",
        link: "/",
      },
      {
        subcategoryLabel: "Security & fraud",
        link: "/",
      },
      {
        subcategoryLabel: "Feedback",
        link: "/",
      },
      {
        subcategoryLabel: "Contact",
        link: "/",
      },
    ],
  },
  {
    label: "Services",
    subcategories: [
      {
        subcategoryLabel: "Gift cards",
        link: "/",
      },
      {
        subcategoryLabel: "Order pickup",
        link: "/",
      },
      {
        subcategoryLabel: "Purchase status",
        link: "/",
      },
      {
        subcategoryLabel: "Track orders",
        link: "/",
      },
    ],
  },
  {
    label: "About",
    subcategories: [
      {
        subcategoryLabel: "About us",
        link: "/",
      },
      {
        subcategoryLabel: "Order pickup",
        link: "/",
      },
      {
        subcategoryLabel: "Purchase status",
        link: "/",
      },
      {
        subcategoryLabel: "Track orders",
        link: "/",
      },
      {
        subcategoryLabel: "Returns",
        link: "/",
      },
    ],
  },
];

const contactOptions = [
  {
    label: "Kontakt",
    link: "/",
    details: ["Wir freuen uns auf Sie!"],
    icon: SfIconHelp,
  },
  {
    label: "Live chat",
    link: "/",
    details: ["Mo–Do: 8:00 - 17:30 Uhr", "Fr: 8:00 - 16:30 Uhr"],
    icon: SfIconContactSupport,
  },
  {
    label: "+49 (0)421 620 485 - 0",
    link: "/",
    details: ["Mo–Do: 8:00 - 17:30 Uhr", "Fr: 8:00 - 16:30 Uhr"],
    icon: SfIconCall,
  },
];
const bottomLinks = [
  {
    label: "Kontakt",
    link: "/",
  },
  {
    label: "Impressum",
    link: "/",
  },
  {
    label: "Über INnUP",
    link: "/",
  },
  {
    label: "Offene Stellen",
    link: "/",
  },
  {
    label: "Datenschutz",
    link: "/",
  },
  {
    label: "AGB",
    link: "/",
  },
];
</script>
