<template>
  <div class="relative">
    <div class="bg-primary-50 p-10 text-center">
      <p class="text-3xl font-bold text-primary-800">
        Werden Sie Ein Teil Unserer Welt
      </p>
      <p
        class="typography-text-sm sm:typography-text-base mt-2 mb-5 text-primary-800"
      >
        Bestellen Sie unseren Newsletter und erhalten Sie Tipps, Angebote sowie
        Neuigkeiten aus der Druckbranche direkt per E-Mail.
      </p>
      <form
        class="mb-4 flex flex-col sm:flex-row gap-4 max-w-[688px] mx-auto"
        @submit.prevent="subscribeNewsletter(inputValue)"
      >
        <SfInput
          v-model="inputValue"
          type="email"
          wrapper-class="grow"
          placeholder="E-Mail-Adresse"
        />
        <SfButton type="submit" size="lg"> Newsletter abonnieren </SfButton>
      </form>
      <div class="typography-text-sm text-primary-800">
        Um zu erfahren wie wir Ihre Daten verarbeiten, besuchen Sie unser
        <SfLink href="#">Datenschutzerklärung</SfLink>. Du kannst
        <SfLink href="#">Abbestellen</SfLink>
        jederzeit und ohne Kosten.
      </div>
    </div>
    <div class="absolute top-0 right-0 mx-2 mt-2 sm:mr-6">
      <div
        v-if="showPositiveAlert"
        role="alert"
        class="flex items-start md:items-center shadow-md max-w-[600px] bg-positive-100 pr-2 pl-4 mb-2 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md"
      >
        <SfIconCheckCircle class="mr-2 my-2 text-positive-700" />
        <p class="py-2 mr-2">
          Your email has been added to the newsletter subscription.
        </p>
        <button
          type="button"
          class="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900"
          aria-label="Close positive alert"
          @click="showPositiveAlert = false"
        >
          <SfIconClose class="hidden md:block" />
          <SfIconClose size="sm" class="md:hidden block" />
        </button>
      </div>
      <div
        v-if="showErrorAlert"
        role="alert"
        class="flex items-start md:items-center max-w-[600px] shadow-md bg-negative-100 pr-2 pl-4 ring-1 ring-negative-300 typography-text-sm md:typography-text-base py-1 rounded-md"
      >
        <p class="py-2 mr-2">
          This email is already subscribed for our newsletter.
        </p>
        <button
          type="button"
          class="p-1.5 md:p-2 ml-auto rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900"
          aria-label="Close error alert"
          @click="showErrorAlert = false"
        >
          <SfIconClose class="hidden md:block" />
          <SfIconClose size="sm" class="md:hidden block" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";
import {
  SfButton,
  SfInput,
  SfLink,
  SfIconCheckCircle,
  SfIconClose,
} from "@storefront-ui/vue";

const inputValue = ref("");
const showPositiveAlert = ref(false);
const showErrorAlert = ref(false);
const emailDataBase: Ref<string[]> = ref([]);

const checkEmailDataBase = (email: string) =>
  emailDataBase.value.find((element) => element === email);

const subscribeNewsletter = (email: string) => {
  if (!email) return;
  if (checkEmailDataBase(email)) {
    showErrorAlert.value = true;
    setTimeout(() => (showErrorAlert.value = false), 5000);
  } else {
    showPositiveAlert.value = true;
    emailDataBase.value.push(email);
    setTimeout(() => (showPositiveAlert.value = false), 5000);
  }
  console.log(email);
  inputValue.value = "";
};
</script>
