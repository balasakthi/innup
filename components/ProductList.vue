<script lang="ts" setup>
    import ProductCard from './ProductCard.vue';
    import { baseProducts } from '~/store/Products.ts'

    const props = defineProps({
        baseProducts: { type: Array, required: true },
        description: String, // Add this line to accept the description
    });
    console.log('ii');
    console.log(props.description);

</script>
<template>
    <ProductCard v-for="product in baseProducts" :key="product.id" :product="product" :description="props.description" />
</template>