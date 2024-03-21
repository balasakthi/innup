<template>
  <div class="mx-auto bg-gray-100 p-1 sm:p-10 w-4/5">
    <h2 class="typography-headline-2">
      Rechteckige Aufkleber, bunt gedruckt auf weißes Material
    </h2>
    <div class="pb-8">
      <FilterProduct
        @changeDesign="handleChangeDesign"
        @changeProduction="handleChangeProduction"
        @changeDelivery="handleChangeDelivery"
        @changePayment="handleChangePayment"
      />
    </div>
    <div class="flex flex-col lg:flex-row justify-around pb-8">
      <ProductList :baseProducts="baseProducts" />
    </div>
  </div>
  <div class="mx-auto bg-primary-100 p-1 sm:p-10">
    <div class="flex flex-col items-center pb-8">
      <h1 class="typography-headline-1 text-center text-white">
        TOLLE Produkte
      </h1>
      <p class="typography-text-lg text-center text-white">
        Viele, viele bunte Flyer...
      </p>
    </div>
  </div>

  <Footer class="mx-auto bg-gray-100 p-1 sm:p-10 w-4/5" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ProductList from "./ProductList.vue";
import FilterProduct from "./FilterProduct.vue";
import Footer from "./Footer.vue";
import { baseProducts } from "~/store/Products.ts";

const handleChangeDesign = (value: string) => {
  console.log("Design Changed:", value._value);
  const actualValue = value._value; // Access the actual value from the Vue Ref
  baseProducts.value.forEach((item) => {
    // Presumably, you'd update something more relevant than just the nickname
    item.nickname += ` - ${actualValue}`;
  });
};

const handleChangeProduction = (value: string) => {
  console.log("Production Option Changed:", value);
  // Handle production option change
};

const handleChangeDelivery = (value: string) => {
  console.log("Delivery Option Changed:", value);
  // Handle delivery option change
};

const handleChangePayment = (value: string) => {
  console.log("Payment Option Changed:", value);
  // Handle payment option change
};
</script>
