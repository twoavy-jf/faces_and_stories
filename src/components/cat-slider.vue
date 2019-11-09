<template>
    <div>
        <slick ref="slick" :options="options">
            <div class="cat px-md-3">
                <img src="http://placekitten.com/g/1000/600" class="img-fluid">
            </div>
            <div class="cat px-md-3">
                <img src="http://placekitten.com/g/900/700" class="img-fluid">
            </div>
            <div class="cat px-md-3">
                <img src="http://placekitten.com/g/800/500" class="img-fluid">
            </div>
            <div class="cat px-md-3">
                <img src="http://placekitten.com/g/950/800" class="img-fluid">
            </div>
            <div class="cat px-md-3">
                <img src="http://placekitten.com/g/1200/700" class="img-fluid">
            </div>
        </slick>
        <div class="position-fixed d-flex justify-content-between align-items-center px-md-5 buttons">
            <div class="btn" @click="prev">
                <icons name="arrow-left" :size="30"/>
            </div>
            <div class="btn" @click="next">
                <icons name="arrow-right" :size="30"/>
            </div>
        </div>
    </div>
</template>

<script>
import Slick from 'vue-slick'
import Icons from './icons'

export default {
    name: 'cat-slider',
    components: { Icons, Slick },
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
        height: 100vh;
        display: flex !important;
        align-items: center;
    }

    .buttons {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        pointer-events: none;
        div {
            pointer-events: all;
        }
    }
</style>
