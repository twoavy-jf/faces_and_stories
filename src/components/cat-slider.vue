<template>
    <div>
        <slick ref="slick" :options="options">
            <div class="cat py-5 px-md-3" v-for="(slide, s) in slides" :key="slide.url">
                <img :src="require('@/assets/content/' + slide.url)" class="img-fluid mh-100" @load="loaded($event, s)">
                <div class="caption p-2" :style="{ width: widths[s] + 'px' }">{{ slide.caption }}</div>
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
    props: { slides: Array },
    data() {
        return {
            options: {
                arrows: false
            },
            loadedImages: 0,
            widths: new Array(this.slides.length).fill(0)
        }
    },
    methods: {
        loaded(event, index) {
            this.widths[index] = event.target.clientWidth
            this.loadedImages++
            if (this.loadedImages >= this.slides.length) {
                this.$refs.slick.reSlick()
                this.$forceUpdate()
            }
        },
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
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .caption {
            text-align: left;
            color: #fff;
        }
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
