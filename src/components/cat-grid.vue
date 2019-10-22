<template>
    <div ref="grid">
        <div class="grid-sizer"></div>
        <div class="cat" :class="{ 'big-cat': image.bigCat }" v-for="image in images" :key="image.id" @click="onClick(image)">
            <div class="position-relative">
                <img class="img-fluid" :src="image.url" @load="loaded">
                <div class="overlay w-100 h-100 d-flex justify-content-center align-items-center">
                    <span>cat #{{ image.id }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Masonry from 'masonry-layout'

export default {
    name: 'cat-grid',
    data() {
        return {
            msnry: null,
            numLoaded: 0,
            images: []
        }
    },
    created() {
        this.randomKittens(25)
    },
    methods: {
        loaded() {
            this.numLoaded++
            if (this.numLoaded >= 25) {
                this.init()
            }
        },
        init() {
            this.msnry = new Masonry(this.$refs.grid, {
                // options
                itemSelector: '.cat',
                columnWidth: '.grid-sizer',
                percentPosition: true,
                fitWidth: true
                // horizontalOrder: true
            })
        },
        randomKittens(num) {
            for (let i = 0; i < num; i++) {
                let width = Math.floor(200 + Math.random() * 1050)
                let height = Math.floor(200 + Math.random() * 700)
                let bigCat = Math.random() < 0.2
                this.images.push({
                    id: i,
                    bigCat,
                    url: `http://placekitten.com/g/${width}/${height}`
                })
            }
        },
        onClick(image) {
            this.$emit('open-popup', image)
        }
    }
}
</script>

<style lang="scss" scoped>
    /* For mobile phones: */
    .grid-sizer,
    [class*="cat"] {
        width: 100%;
        padding: 5px;
    }

    @media only screen and (min-width: 600px) {
        /* For tablets: */
        .grid-sizer,
        .cat {
            width: 33%;
        }
        .big-cat {
            width: 66%;
        }
    }

    @media only screen and (min-width: 768px) {
        /* For desktops: */
        .grid-sizer,
        .cat {
            width: 20%;
        }
        .big-cat {
            width: 40%;
        }
    }

    .overlay {
        background: rgba(0, 0, 0, 0.8);
        color: white;
        opacity: 0;
        font-size: 2rem;
        position: absolute;
        transform: translateY(-100%);
        transition: opacity 0.3s;
    }

    .cat:hover {
        .overlay {
            opacity: 1;
        }
    }
</style>
