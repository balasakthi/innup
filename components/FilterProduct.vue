<template>
  <div class="bg-gray-100 p-10">
    <div class="grid-cols-4 flex md:flex-row flex-col mb-10">
      <!-- Format / edition -->
      <div class="basis-1/4 bg-gray-50 border shadow-xl p-5 m-2">
        <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">
          Format & Auflage
        </h1>
        <div class="">
          <div class="row">
            <div>
              <label>
                <span :class="['text-sm font-medium']"> Breite in [mm] </span>
                <SfInput
                  class="bg-gray-50 text-right"
                  v-model="inputValueBreite"
                >
                  <template #suffix>mm</template>
                </SfInput>
              </label>
              <div class="flex justify-between">
                <div>
                  <p
                    v-if="helpTextBreite"
                    :class="['typography-hint-xs mt-0.5', 'text-neutral-500']"
                  >
                    {{ helpTextBreite }}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label>
                <span :class="['text-sm font-medium']"> Höhe in [mm] </span>
                <SfInput
                  class="bg-gray-50 text-right"
                  v-model="inputValueHoehe"
                >
                  <template #suffix>mm</template>
                </SfInput>
              </label>
              <div class="flex justify-between">
                <div>
                  <p
                    v-if="helpTextHoehe"
                    :class="['typography-hint-xs mt-0.5', 'text-neutral-500']"
                  >
                    {{ helpTextHoehe }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label>
              <span :class="['text-sm font-medium']"> Auflage in [Stück] </span>
              <SfInput
                class="bg-gray-50 text-right"
                v-model="inputValueAuflage"
              >
                <template #suffix>Stück</template>
              </SfInput>
            </label>
            <div class="flex justify-between">
              <div>
                <p
                  v-if="helpTextAuflage"
                  :class="['typography-hint-xs mt-0.5', 'text-neutral-500']"
                >
                  {{ helpTextAuflage }}
                </p>
              </div>
            </div>
          </div>

          <div>
            <label>
              <span :class="['text-sm font-medium']"> Anzahl Motive </span>
              <SfInput class="bg-gray-50 text-right" v-model="inputValueSorten">
                <template #suffix>Motive</template>
              </SfInput>
            </label>
            <div class="flex justify-between">
              <div>
                <p
                  v-if="helpTextMotive"
                  :class="['typography-hint-xs mt-0.5', 'text-neutral-500']"
                >
                  {{ helpTextMotive }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Typesetting & Design -->
      <div class="basis-1/4 border shadow-xl p-5 m-2">
        <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">
          Druckdaten
        </h1>
        <div class="flex justify-between">
          <div>
            <p class="typography-hint-xs mt-0.5 text-neutral-500 pb-4">
              Welcher Art sind Ihre Druckdaten?
            </p>
          </div>
        </div>
        <div class="flex items-center mb-4">
          <SfRadio
            v-model="designOption"
            @change="onChangeDesign"
            name="design"
            id="design1"
            value="pdf/x-1a oder pdf/x-3"
            class="text-indigo-600"
          />
          <label for="design1" class="ms-2 text-sm font-medium text-gray-900"
            >pdf/x-1a oder pdf/x-3</label
          >
        </div>
        <div class="flex items-center mb-4">
          <SfRadio
            checked
            v-model="designOption"
            @change="onChangeDesign"
            name="design"
            id="design2"
            value="Sonstige pdf, ai, eps, jpg"
            class="text-indigo-600"
          />
          <label for="design2" class="ms-2 text-sm font-medium text-gray-900"
            >Sonstige pdf, ai, eps, jpg</label
          >
        </div>
        <div class="flex items-center mb-4">
          <SfRadio
            v-model="designOption"
            @change="onChangeDesign"
            name="design"
            id="design3"
            value="doc, docx, pp, pub, cdr"
            class="text-indigo-600"
          />
          <label for="design3" class="ms-2 text-sm font-medium text-gray-900"
            >doc, docx, pp, pub, cdr</label
          >
        </div>
        <div class="flex items-center mb-4">
          <SfRadio
            v-model="designOption"
            @change="onChangeDesign"
            name="design"
            id="design4"
            value="Layout & Design"
            class="text-indigo-600"
          />
          <label for="design4" class="ms-2 text-sm font-medium text-gray-900"
            >Layout & Design</label
          >
        </div>
        <p>
          <SfLink href="/Druckdatenanlage">Info zur Dateierstellung</SfLink>
        </p>
      </div>

      <!-- Shipment -->
      <div class="basis-1/4 border shadow-xl p-5 m-2">
        <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">
          Produktion & Versand
        </h1>
        <div class="flex justify-between">
          <div>
            <p class="typography-hint-xs mt-0.5 text-neutral-500 pb-4">
              Wie schnell benötigen Sie die Lieferung?
            </p>
          </div>
        </div>
        <div>
          <div class="flex items-center mb-4">
            <SfRadio
              checked
              v-model="productionOption"
              @change="onChangeProduction"
              name="production"
              id="production1"
              value="Standard"
              class="text-indigo-600"
            />
            <label
              for="production1"
              class="ms-2 text-sm font-medium text-gray-900"
              >Standard</label
            >
          </div>
          <div class="flex items-center mb-4">
            <SfRadio
              v-model="productionOption"
              @change="onChangeProduction"
              name="production"
              id="production2"
              value="Express"
              class="text-indigo-600"
            />
            <label
              for="production2"
              class="ms-2 text-sm font-medium text-gray-900"
              >Express</label
            >
          </div>
        </div>
        <div class="flex justify-between pt-8">
          <div>
            <p class="typography-hint-xs mt-0.5 text-neutral-500 pb-4">
              In welches Land soll die Lieferung erfolgen?
            </p>
          </div>
        </div>
        <div>
          <div class="flex items-center mb-4">
            <SfRadio
              checked
              v-model="deliveryOption"
              @change="onChangeDelivery"
              name="delivery"
              id="delivery1"
              value="de"
              class="text-indigo-600"
            />
            <label
              for="delivery1"
              class="ms-2 text-sm font-medium text-gray-900"
              >Deutschland</label
            >
          </div>
          <div class="flex items-center mb-4">
            <SfRadio
              v-model="deliveryOption"
              @change="onChangeDelivery"
              name="delivery"
              id="delivery2"
              value="at"
              class="text-indigo-600"
            />
            <label
              for="delivery2"
              class="ms-2 text-sm font-medium text-gray-900"
              >Österreich</label
            >
          </div>
          <div class="flex items-center mb-4">
            <SfRadio
              v-model="deliveryOption"
              @change="onChangeDelivery"
              name="delivery"
              id="delivery3"
              value="ch"
              class="text-indigo-600"
            />
            <label
              for="delivery2"
              class="ms-2 text-sm font-medium text-gray-900"
              >Schweiz</label
            >
          </div>
        </div>
      </div>

      <!-- Payment method-->
      <div class="basis-1/4 border shadow-xl p-5 m-2">
        <h1 class="text-center text-xl text-white bg-blue-800 p-3 mb-5 w-full">
          Zahlung
        </h1>
        <div class="flex justify-between">
          <div>
            <p class="typography-hint-xs mt-0.5 text-neutral-500 pb-4">
              Wie möchten Sie zahlen?
            </p>
          </div>
        </div>
        <div>
          <div class="flex items-center mb-4">
            <SfRadio
              checked
              v-model="paymentOption"
              @change="onChangePayment"
              name="payment"
              id="payment1"
              value="The invoice"
              class="text-indigo-600"
            />
            <label for="payment1" class="ms-2 text-sm font-medium text-gray-900"
              >Auf Rechnung</label
            >
          </div>
          <div class="flex items-center mb-4">
            <SfRadio
              v-model="paymentOption"
              @change="onChangePayment"
              name="payment"
              id="payment2"
              value="50% advance payment"
              class="text-indigo-600"
            />
            <label for="payment2" class="ms-2 text-sm font-medium text-gray-900"
              >50% Anzahlung</label
            >
          </div>
          <div class="flex items-center mb-4">
            <SfRadio
              v-model="paymentOption"
              @change="onChangePayment"
              name="payment"
              id="payment3"
              value="Payment in advance"
              class="text-indigo-600"
            />
            <label for="payment3" class="ms-2 text-sm font-medium text-gray-900"
              >Vorkasse</label
            >
          </div>
        </div>
        <div
          class="container border border-gray-500 shadow p-2 text-center text-sm"
        >
          <p>Rabatt für Ihre Online-Bestellung</p>
          <p>5,00 € netto</p>
          <p>5.95 € inkl. MwSt.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SfRadio, SfInput, SfLink } from "@storefront-ui/vue";
import { ref } from "vue";

const helpTextBreite = ref("Mindest-Breite: 8 mm");
const helpTextHoehe = ref("Mindest-Höhe: 8 mm");
const helpTextAuflage = ref("Auflage (je Motiv)");
const helpTextMotive = ref("Mehrere Motive je [Auflage] zusammen bestellen");

const inputValueBreite = ref(100);
const inputValueHoehe = ref(80);
const inputValueAuflage = ref(1000);
const inputValueSorten = ref(1);

const paymentOption = ref("Auf Rechnung");
const productionOption = ref("UPS Standard");
const deliveryOption = ref("Deutschland");
const designOption = ref("pdf/x-1a oder pdf/x-3");

const emit = defineEmits();

const onChangeDesign = (value: string) => {
  emit("changeDesign", designOption._value);
};
const onChangeProduction = (value: string) => {
  emit("changeProduction", productionOption._value);
};
const onChangeDelivery = (value: string) => {
  emit("changeDelivery", deliveryOption._value);
};
const onChangePayment = (value: string) => {
  emit("changePayment", paymentOption._value);
};
</script>
<style></style>
