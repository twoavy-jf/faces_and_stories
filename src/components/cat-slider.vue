<template>
    <div>
        <slick ref="slick" :options="options">
            <img src="http://placekitten.com/g/1000/600" class="cat">
            <img src="http://placekitten.com/g/900/700" class="cat">
            <img src="http://placekitten.com/g/800/500" class="cat">
            <img src="http://placekitten.com/g/950/800" class="cat">
            <img src="http://placekitten.com/g/1200/700" class="cat">
        </slick>
        <div class="position-relative w-100">
            <div class="position-absolute d-flex justify-content-between w-100">
                <div class="btn btn-primary" @click="prev">prev</div>
                <div class="btn btn-primary" @click="next">next</div>
            </div>
        </div>
    </div>
</template>

<script>
import Slick from 'vue-slick'

export default {
    name: 'cat-slider',
    components: { Slick },
    data() {
        return {
            options: {
                arrows: false
            }
        }
    },
    // mounted() {
    //     this.$nextTick(() => {
    //         this.$refs.slick.reSlick()
    //     })
    // }
    methods: {
        next() {
            this.$refs.slick.next()
        },

        prev() {
            this.$refs.slick.prev()
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~slick-carousel/slick/slick.css";

    .cat {
        max-height: 100vh;
    }
</style>
