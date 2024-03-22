<template>
  <!-- Backdrop -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 bg-neutral-700 bg-opacity-50" />
  </transition>

  <!-- Modal -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-10"
  >
    <SfModal
      v-model="isOpen"
      class="min-w-96"
      tag="section"
      role="alertdialog"
      aria-labelledby="promoModalTitle"
      aria-describedby="promoModalDesc"
      disable-click-away
    >
      <header>
        <SfButton
          square
          variant="tertiary"
          class="absolute right-2 top-2"
          @click="onModalClosed"
        >
          <SfIconClose />
        </SfButton>
        <h3
          id="promoModalTitle"
          class="mb-6 font-bold typography-headline-4 md:typography-headline-3"
        >
          Willkommen bei INnUP
        </h3>
      </header>
      <form @submit.prevent="sendForm">
        <div class="flex flex-col gap-y-5">
          <SfInput
            v-model="email"
            type="email"
            placeholder="Email-Adresse"
            required
          >
            <template #prefix
              ><SfIconPerson class="text-primary-700"
            /></template>
          </SfInput>
          <SfInput
            v-model="password"
            type="password"
            placeholder="Passwort"
            required
          >
            <template #prefix
              ><SfIconLockOpen class="text-primary-700"
            /></template>
          </SfInput>
        </div>

        <footer class="flex justify-end gap-4 mt-5">
          <SfButton variant="secondary" @click="onModalClosed"
            >Schließen</SfButton
          >
          <SfButton type="submit">Einloggen</SfButton>
        </footer>
      </form>
    </SfModal>
  </transition>
</template>

<script lang="ts" setup>
import {
  SfModal,
  SfButton,
  SfIconClose,
  useDisclosure,
  SfInput,
  SfIconPerson,
  SfIconLockOpen,
} from "@storefront-ui/vue";

const props = defineProps({ isOpen: Boolean });
const emits = defineEmits(["closed"]);

const { open, isOpen, close } = useDisclosure({ initialValue: props.isOpen });

const onModalClosed = () => {
  emits("closed", false);
  close();
};

const email = ref("");
const password = ref("");

const sendForm = () => {
  const userData = {
    email: email.value,
    password: password.value,
  };
  onModalClosed();
  console.log(userData);
};
</script>
