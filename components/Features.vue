<template>
  <section class="py-14 bg-gray-100">
    <div class="max-w-screen-xl mx-auto px-4 md:px-8">
      <div class="max-w-xl mx-auto space-y-3 sm:text-center">
        <p class="text-primary-50 text-3xl font-semibold sm:text-4xl">
          Ihre Vorteile Bei INnUP
        </p>
      </div>
      <div class="mt-12">
        <ul class="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-2">
          <li v-for="(item, idx) in features" :key="idx" class="flex gap-x-4">
            <div class="flex-none w-12 h-12 flex items-center justify-center">
              <NuxtImg :src="item.icon" />
            </div>
            <div>
              <h4 class="mb-1 text-2xl text-gray-500 font-bold">
                {{ item.title }}
              </h4>
              <p class="mb-4 text-base text-gray-500 font-bold">
                {{ item.subtitle }}
              </p>
              <ul
                class="mt-2 list-disc text-left text-gray-500"
                v-for="desc in item.desc"
              >
                <li>{{ desc }}</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const features = ref([
  {
    icon: "/icons/feature1.png",
    title: "Druck mit Sicherheit",
    subtitle:
      "Wir drucken vor allem im B2B- und Agenturumfeld. Unsere Kunden schätzen besonders:",
    desc: [
      "Persönliche Beratung durch Druckfachleute. Feste Ansprechpartner",
      "Vorab-Bemusterung von Material und Drucktechnik",
      "Dateien-Prüfung durch unsere Vorstufe",
      "Druckdaten-Freigabe durch Sie. Andrucke und Proofs auf Wunsch",
    ],
  },
  {
    icon: "/icons/feature2.png",
    title: "Einfachste Bestellprozesse",
    subtitle:
      "Seit mehr als 10 Jahren arbeiten wir daran, unsere Bestellprozesse zu vereinfachen:",
    desc: [
      "Kalkulation online. Oder als individuelles Angebot via Email",
      "Bestellung auf Rechnung. Online, per Email oder Fax",
      "Druckdaten-Annahme vom pdf/X-1 über jpg bis Skizze",
      "Archivierung Ihrer Druckdaten zur einfacheren Nachbestellung",
    ],
  },
  {
    icon: "/icons/feature3.png",
    title: "Corporate Dienstleistungen",
    subtitle:
      "Weil - manchmal - nicht nur der Flyer oder Aufkleber gebraucht wird",
    desc: [
      "Rahmenverträge für Ihr Cashflow- und Inventorymanagement",
      "Einlagerung und Abrufe auf Wunsch",
      "Zählen, sortieren, konfektionieren. Verteilerversand direkt an Ihre Filialen",
      "PO-Nummern und Projektnamen in Auftragsbestätigungen und Rechnungen",
    ],
  },
  {
    icon: "/icons/feature4.png",
    title: "Produktionsprozesse nach Ihren Wünschen",
    subtitle:
      "Wenn Ihre Druckprodukte unterschiedlichsten Anforderungen genügen müssen",
    desc: [
      "Druck auf der günstigen Sammelform oder individuell nur für Sie",
      "Liefertermine auf Wunsch vorziehen",
      "Jenseits von DIN-Maßen: Sonder- und Individualformate fast aller Druckprodukte",
      "Jenseits von 4c: Druck in Ihren Pantone- und HKS-Hausfarben",
    ],
  },
]);
</script>
