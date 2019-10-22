<template>
    <div ref="grid">
        <div class="grid-sizer"></div>
        <img src="http://placekitten.com/g/1000/600" class="cat" @load="loaded">
        <img src="http://placekitten.com/g/900/700" class="cat" @load="loaded">
        <img src="http://placekitten.com/g/600/200" class="cat" @load="loaded">
        <img src="http://placekitten.com/g/800/500" class="cat" @load="loaded">
        <img src="http://placekitten.com/g/950/800" class="cat big-cat" @load="loaded">
        <img src="http://placekitten.com/g/1200/700" class="cat big-cat" @load="loaded">
        <img src="http://placekitten.com/g/300/700" class="cat" @load="loaded">
        <img src="http://placekitten.com/g/1000/200" class="cat" @load="loaded">
        <img src="http://placekitten.com/g/500/200" class="cat" @load="loaded">
        <img src="http://placekitten.com/g/700/700" class="cat" @load="loaded">
    </div>
</template>

<script>
import Masonry from 'masonry-layout'

export default {
    name: 'cat-grid',
    data() {
        return {
            msnry: null,
            numLoaded: 0
        }
    },
    methods: {
        loaded() {
            this.numLoaded++
            if (this.numLoaded >= 10) {
                this.init()
            }
        },
        init() {
            this.msnry = new Masonry(this.$refs.grid, {
                // options
                itemSelector: '.cat',
                columnWidth: '.grid-sizer',
                percentPosition: true
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    /* For mobile phones: */
    .grid-sizer,
    [class*="cat"] {
        width:100%;
        padding: 5px;
    }
    @media only screen and (min-width: 600px) {
        /* For tablets: */
        .grid-sizer,
        .cat {
            width: 33%;
            padding: 5px;
        }
        .big-cat {
            width: 66%;
        }
    }
    @media only screen and (min-width: 768px) {
        /* For deskops: */
        .grid-sizer,
        .cat {
            width: 20%;
            padding: 5px;
        }
        .big-cat {
            width: 40%;
        }
    }
</style>
