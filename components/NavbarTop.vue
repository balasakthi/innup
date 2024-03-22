<template>
  <div class="w-full h-full">
    <div v-if="isOpen" class="fixed w-screen h-screen inset-0" />

    <header
      ref="menuRef"
      class="flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 bg-white border-b border-neutral-200"
    >
      <div
        class="flex flex-wrap lg:flex-nowrap items-center flex-row justify-around h-full max-w-[1536px] w-full"
      >
        <NuxtLink
          to="/"
          aria-label="SF Homepage"
          class="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
        >
          <picture>
            <source srcset="/logo/innup-logo.svg" media="(min-width: 768px)" />
            <NuxtImg
              src="/logo/innup-logo.svg"
              alt="INnUP Logo"
              class="w-[65px] h-[52px] md:w-[85px] md:h-[68px] lg:w-[105px] lg:h-[85px]"
            />
          </picture>
        </NuxtLink>
        <SfButton
          aria-label="Open categories"
          class="lg:hidden order-first lg:order-1 mr-4"
          :aria-haspopup="true"
          :aria-expanded="isOpen"
          variant="tertiary"
          square
          @click="toggle()"
        >
          <SfIconMenu />
        </SfButton>
        <SfButton
          class="hidden lg:flex lg:mr-4"
          :aria-haspopup="true"
          :aria-expanded="isOpen"
          variant="tertiary"
          square
          @click="toggle()"
        >
          <template #suffix>
            <SfIconExpandMore class="hidden md:inline-flex" />
          </template>
          <span class="hidden md:inline-flex whitespace-nowrap px-2"
            >Druckprodukte</span
          >
        </SfButton>

        <nav class="z-10">
          <ul>
            <li role="none">
              <transition
                enter-active-class="transform transition duration-500 ease-in-out"
                leave-active-class="transform transition duration-500 ease-in-out"
                enter-from-class="-translate-x-full md:translate-x-0 md:opacity-0"
                enter-to-class="translate-x-0 md:translate-x-0 md:opacity-100"
                leave-from-class="translate-x-0 md:opacity-100"
                leave-to-class="-translate-x-full md:translate-x-0 md:opacity-0"
              >
                <SfDrawer
                  ref="drawerRef"
                  v-model="isOpen"
                  disable-click-away
                  placement="top"
                  class="grid grid-cols-1 md:gap-x-6 md:grid-cols-5 bg-white shadow-lg p-0 max-h-screen overflow-y-auto md:!absolute md:!top-[7.5rem] max-w-[376px] md:max-w-full md:p-6 mr-[50px] md:mr-0"
                >
                  <div
                    class="sticky top-0 flex items-center justify-between py-2 px-4 bg-primary-700 md:hidden w-full max-w-[376px]"
                  >
                    <div
                      class="flex items-center typography-text-lg font-medium text-white"
                    >
                      Druckprodukte
                    </div>
                    <SfButton
                      square
                      variant="tertiary"
                      aria-label="Close navigation menu"
                      class="text-white ml-2"
                      @click="close()"
                      @keydown.enter.space="close()"
                    >
                      <SfIconClose />
                    </SfButton>
                  </div>
                  <div
                    v-for="{ items } in categoriesContent"
                    class="[&:nth-child(2)]:pt-0 pt-6 md:pt-0"
                  >
                    <ul>
                      <li v-for="item in items" :key="item.title" ref="">
                        <SfListItem
                          :tag="NuxtLink"
                          size="sm"
                          role="none"
                          :href="item.link"
                          @click="toggle()"
                          :class="`typography-text-base md:typography-text-md lg:typography-text-xl py-4 md:py-1.5 text-primary-500 font-medium`"
                        >
                          {{ item.title }}
                        </SfListItem>
                      </li>
                    </ul>
                  </div>

                  <div
                    class="flex flex-col items-center justify-center md:rounded-md border-neutral-300 overflow-hidden"
                  >
                    <NuxtImg
                      :src="bannerDetails.image"
                      :alt="bannerDetails.title"
                      class="object-contain"
                    />
                  </div>
                  <SfButton
                    square
                    size="sm"
                    variant="tertiary"
                    aria-label="Close navigation menu"
                    class="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
                    @click="close()"
                  >
                    <SfIconClose class="text-neutral-500" />
                  </SfButton>
                </SfDrawer>
              </transition>
            </li>
          </ul>
        </nav>

        <form
          role="search"
          class="flex flex-[100%] order-last lg:order-3 mt-2 lg:mt-0 pb-2 lg:pb-0"
          @submit.prevent="search"
        >
          <SfInput
            v-model="inputValue"
            type="search"
            class="[&::-webkit-search-cancel-button]:appearance-none"
            placeholder="Search"
            wrapper-class="flex-1 h-10 pr-0"
            size="base"
          >
            <template #suffix>
              <span class="flex items-center">
                <SfButton
                  variant="tertiary"
                  square
                  aria-label="search"
                  type="submit"
                  class="rounded-l-none hover:bg-transparent active:bg-transparent"
                >
                  <SfIconSearch />
                </SfButton>
              </span>
            </template>
          </SfInput>
        </form>

        <div
          class="my-3 flex px-0 sm:px-10 items-center py-2 sm:py-0 order-last"
        >
          <ul class="flex lg:flex-col">
            <li class="mr-8 lg:mb-3 flex items-center space-x-2">
              <div class="text-primary-700 font-bold">
                <SfIconCall />
              </div>

              <a
                class="text-primary-700 font-bold text-[16px] tracking-tight"
                href="tel:+4904216204850"
                >+49&nbsp;(0)421&nbsp;620&nbsp;485&nbsp;0</a
              >
            </li>
            <li class="flex items-center space-x-2">
              <div class="text-primary-700 font-bold">
                <SfIconEmail />
              </div>

              <a
                class="text-primary-700 font-bold text-[16px] tracking-tight"
                href="mailto:info@innup.de"
                >info@innup.de</a
              >
            </li>
          </ul>
        </div>

        <nav class="flex-1 flex justify-end lg:order-last lg:ml-4">
          <div class="flex flex-row flex-nowrap">
            <SfButton
              :tag="NuxtLink"
              href="/carts"
              class="mr-2 -ml-0.5 rounded-md text-primary-700 active:bg-primary-200 hover:text-primary-600 active:text-primary-700"
              variant="tertiary"
              square
            >
              <template #prefix>
                <Component :is="SfIconShoppingCart" />
              </template>

              <span
                class="absolute -mt-2.5 ms-2 rounded-[0.37rem] bg-danger px-[0.3em] py-[0.25em] text-[0.7rem] leading-none text-white bg-red-600"
                v-if="cartStore.totalCartProducts"
                >{{ cartStore.totalCartProducts }}</span
              >
            </SfButton>

            <SfButton
              v-for="actionItem in actionItems"
              :key="actionItem.ariaLabel"
              class="mr-2 -ml-0.5 rounded-md text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-600 active:text-primary-700"
              :aria-label="actionItem.ariaLabel"
              variant="tertiary"
              square
              :tag="NuxtLink"
              :href="actionItem.href"
              @click="
                actionItem.role === 'login'
                  ? (showLoginModal = !showLoginModal)
                  : ''
              "
            >
              <template #prefix>
                <Component :is="actionItem.icon" />
              </template>
            </SfButton>

            <LoginModal
              v-if="showLoginModal"
              :isOpen="showLoginModal"
              @closed="onLoginModalClosed"
            />
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
import {
  SfButton,
  SfDrawer,
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconClose,
  SfIconExpandMore,
  SfListItem,
  useDisclosure,
  useTrapFocus,
  SfIconMenu,
  SfInput,
  SfIconSearch,
  SfIconCall,
  SfIconEmail,
} from "@storefront-ui/vue";

import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const { isOpen, toggle, close } = useDisclosure();
const menuRef = ref();
const drawerRef = ref();

useTrapFocus(drawerRef, {
  activeState: isOpen,
  arrowKeysUpDown: true,
  initialFocus: "container",
});
onClickOutside(menuRef, () => {
  close();
});

const inputValue = ref("");
const showLoginModal = ref(false);

const NuxtLink = resolveComponent("NuxtLink");
const cartStore = useCartStore();

function onLoginModalClosed(isClosed: boolean) {
  showLoginModal.value = isClosed;
}

const search = () => {
  alert(`Successfully found 10 results for ${inputValue.value}`);
};

const actionItems = [
  {
    icon: SfIconFavorite,
    label: "",
    ariaLabel: "Wishlist",
    role: "button",
    href: "/",
  },
  {
    icon: SfIconPerson,
    label: "Log in",
    ariaLabel: "Log in",
    role: "login",
    href: "/",
  },
];
const bannerDetails = {
  image: "/images/products/brochure.jpg",
  title: "An image of a Broucher",
};

const categoriesContent = [
  {
    items: [
      {
        title: "Aufkleber",
        link: "/Aufkleber_weiss_rechteckig",
        image: "/images/products/sticker.jpg",
      },
      {
        title: "Rollenetiketten",
        link: "/",
        image: "/images/products/Roll_Labels.jpg",
      },
      {
        title: "Folder",
        link: "/",
        image: "/images/products/Folders.png",
      },
      {
        title: "Flyer",
        link: "/",
        image: "/images/products/flyers-006.png",
      },
      {
        title: "Broschüren",
        link: "/",
        image: "/images/products/Brochures_1.png",
      },
    ],
  },
  {
    items: [
      {
        title: "Nummerierte Etiketten",
        link: "/",
        image: "/images/products/numerslabel.jpg",
      },
      {
        title: "Poster",
        link: "/",
        image: "/images/products/poster.png",
      },
      {
        title: "Rubbellose",
        link: "/",
        image: "/images/products/rubbellose.png",
      },
      {
        title: "Visitenkarten",
        link: "/",
        image: "/images/products/businesscard.jpg",
      },
      {
        title: "Briefpapier",
        link: "/",
        image: "/images/products/stationery.jpg",
      },
    ],
  },
  {
    items: [
      {
        title: "Blöcke",
        link: "/",
        image: "/images/products/blocks.png",
      },
      {
        title: "Briefumschläge",
        link: "/",
        image: "/images/products/envelopes.png",
      },
      {
        title: "Lettershop-Arbeiten",
        link: "/",
        image: "/images/products/Lettershop-Arbeiten.png",
      },
      {
        title: "Hohlkammer Plakate",
        link: "/",
        image: "/images/products/hohlkammer.jpg",
      },
      {
        title: "Banner",
        link: "/",
        image: "/images/products/banner.jpg",
      },
    ],
  },
  {
    items: [
      {
        title: "Plastikkarten",
        link: "/",
        image: "/images/products/Plastic-cards.png",
      },
      {
        title: "Stickermagazine",
        link: "/",
        image: "/images/products/sticker magazine.png",
      },
      {
        title: "Schilder",
        link: "/",
        image: "/images/products/signs.png",
      },
      {
        title: "Selfmailer",
        link: "/",
        image: "/images/products/Self-mailer.png",
      },
      {
        title: "Banderolen",
        link: "/",
        image: "/images/products/banderole-publicitaire.jpg",
      },
    ],
  },
];
</script>
