<template>
  <div
    class="h-full flex flex-col justify-between border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]"
  >
    <div class="relative">
      <img
        :src="product.image_calc_url"
        :alt="product.nickname"
        :title="product.nickname"
        class="block object-cover h-auto rounded-md"
        width="350"
        height="229"
      />
      <SfButton
        variant="tertiary"
        size="sm"
        square
        class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
        aria-label="Produkt merken"
      >
        <SfIconFavorite size="sm" />
      </SfButton>
    </div>

    <div class="p-4 border-t border-neutral-200">
      <div class="w-full flex justify-between">
        <p
          class="block py-2 font-bold leading-5 typography-text-sm text-neutral-700"
        >
          {{ product.nickname }}
        </p>
        <Tooltip v-if="product.tooltip_nickname != ''"
          ><strong>{{ product.tooltip_nickname }}</strong></Tooltip
        >
      </div>

      <div class="w-full flex justify-between">
        <p
          class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700"
        >
          {{ product.drucktechnik }}
        </p>
        <Tooltip v-if="product.tooltip_drucktechnik != ''"
          ><strong>{{ product.tooltip_drucktechnik }}</strong></Tooltip
        >
      </div>

      <div class="w-full flex justify-between">
        <p
          class="block py-2 font-bold leading-5 typography-text-sm text-neutral-700"
        >
          {{ description }}
        </p>
      </div>

      <div class="w-full flex justify-between">
        <p
          class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700"
        >
          {{ product.bedruckstoff }}
        </p>
        <Tooltip v-if="product.tooltip_bedruckstoff != ''"
          ><strong>{{ product.tooltip_bedruckstoff }}</strong></Tooltip
        >
      </div>

      <div class="w-full flex justify-between">
        <p
          class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700"
        >
          {{ product.materialfarbe }}
        </p>
        <Tooltip v-if="product.tooltip_materialfarbe != ''"
          ><strong>{{ product.tooltip_materialfarbe }}</strong></Tooltip
        >
      </div>

      <div class="w-full flex justify-between">
        <p
          class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700"
        >
          {{ product.farbigkeit }}
        </p>
        <Tooltip v-if="product.tooltip_farbigkeit != ''"
          ><strong>{{ product.tooltip_farbigkeit }}</strong></Tooltip
        >
      </div>

      <div class="w-full flex justify-between">
        <p
          class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700"
        >
          {{ product.form }}
        </p>
        <Tooltip v-if="product.tooltip_form != ''"
          ><strong>{{ product.tooltip_form }}</strong></Tooltip
        >
      </div>

      <div class="w-full flex justify-between">
        <p
          class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700"
        >
          {{ product.format_breite }} x {{ product.format_hoehe }} mm
        </p>
        <Tooltip v-if="product.tooltip_format != ''"
          ><strong>{{ product.tooltip_format }}</strong></Tooltip
        >
      </div>

      <div class="w-full flex justify-between">
        <p
          class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700"
        >
          {{ product.traeger }}
        </p>
        <Tooltip v-if="product.tootip_traeger != ''"
          ><strong>{{ product.tootip_traeger }}</strong></Tooltip
        >
      </div>

      <div class="w-full flex justify-between">
        <p
          class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700"
        >
          {{ product.klebehaftung }}
        </p>
        <Tooltip v-if="product.tootip_klebehaftung != ''"
          ><strong>{{ product.tootip_klebehaftung }}</strong></Tooltip
        >
      </div>

      <div class="w-full flex justify-between">
        <p
          class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700"
        >
          {{ product.sorten }} x {{ product.auflage }} Stück
        </p>
      </div>

      <div class="w-full flex justify-between">
        <p
          class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700"
        >
          Eintreffend bei Ihnen in {{ product.lieferland }} am
          {{ product.liefertermin }}
        </p>
        <Tooltip v-if="product.liefertermin != ''"
          ><strong>{{ product.liefertermin }}</strong></Tooltip
        >
      </div>

      <div class="w-full flex justify-between">
        <p
          class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700"
        >
          Preis: {{ product.price_gross }} Euro inkl. Versand und MwSt. Netto:
          {{ product.price_net }} Euro ikl. Versand exkl. MwSt.
        </p>
        <Tooltip v-if="product.liefertermin != ''"
          ><strong>{{ product.liefertermin }}</strong></Tooltip
        >
      </div>

      <span class="block pb-2 font-bold typography-text-lg"
        >${{ product.price }}</span
      >
      <SfButton size="sm" @click="addProductToCart">
        <template #prefix>
          <SfIconShoppingCart size="sm" />
        </template>
        In den Einkaufswagen
      </SfButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  SfRating,
  SfCounter,
  SfLink,
  SfButton,
  SfIconShoppingCart,
  SfIconFavorite,
} from "@storefront-ui/vue";
import { defineProps } from "vue";
import Tooltip from "./Tooltip.vue";

// Import CartItem type if defined in ~/types/index.ts
import type { CartItem } from "~/types";

const cartStore = useCartStore();

const props = defineProps({
  product: Object as PropType<Product>, // Existing product prop
  description: String, // Add this line to accept the description
});

const addProductToCart = () => {
  // Transform the product into a CartItem
  const cartItem: CartItem = {
    id: props.product.id,
    nickname: props.product.nickname,
    description: props.description,
    price_net: props.product.price_net,
    price_gross: props.product.price_gross,
    data_cookie: "Some data here", // Example data, adjust as needed
    user_comment: "User comment here", // You might collect this from the user
    quantity: 1, // Default quantity, can be adjusted in cart
  };

  cartStore.addProductToCart(cartItem);
  console.log(cartStore.cart);
};
</script>
