<template>
  <div class="mx-auto bg-gray-100 p-1 sm:p-10 w-4/5">
    <h2 class="typography-headline-2">
      Rechteckige Aufkleber, bunt gedruckt auf weißes Material
    </h2>
    <div class="pb-8">
      <FilterProduct
        @changeDesign="
          (val) => {
            designOption = val;
            updateDescription();
          }
        "
        @changeProduction="
          (val) => {
            productionOption = val;
            updateDescription();
          }
        "
        @changeDelivery="
          (val) => {
            deliveryOption = val;
            updateDescription();
          }
        "
        @changePayment="
          (val) => {
            paymentOption = val;
            updateDescription();
          }
        "
      />
    </div>
    <div class="flex flex-col lg:flex-row justify-around pb-8">
      <!-- In the parent component -->
      <ProductList :baseProducts="baseProducts" :description="description" />
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
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { baseProducts } from "~/store/Products.ts";

const paymentOption = ref("Auf Rechnung");
const productionOption = ref("UPS Standard");
const deliveryOption = ref("Deutschland");
const designOption = ref("pdf/x-1a oder pdf/x-3");

const assembleDescription = () => {
  // Assemble the description string from the various options
  return `Payment: ${paymentOption.value}, Production: ${productionOption.value}, Delivery: ${deliveryOption.value}, Design: ${designOption.value}`;
};

// Initial description setup
let description = ref(assembleDescription());

// Method to update the description whenever there's a change
const updateDescription = () => {
  description.value = assembleDescription();
  console.log("hh");
  console.log(description.value);
};
console.log("gg");
console.log(description.value);
</script>
