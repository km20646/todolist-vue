<template>
    <div id="root">
        <p>{{orginalPrice}}</p>
        <p>{{doublePrice}}</p>
        <p>{{triplePrice}}</p>
    </div>
</template>

<script>
 import {mapGetters} from 'vuex'

export default {
    ...mapGetters(['originalPrice','doublePrice','tripleprice'])
    // computed : {
    //     orginalPrice(){
    //         return this.$store.getters.orginalPrice;
    //     },
    //     doublePrice(){
    //         return this.$store.getters.doublePrice;
    //     },
    //     triplePrice(){
    //         return this.$store.getters.triplePrice;
    //     }
    // }
}
</script>

<style>

</style>