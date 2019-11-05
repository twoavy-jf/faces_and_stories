<template>
    <div ref="grid">
        <div class="grid-sizer"></div>
        <div class="cat zoom" :class="{ 'big-cat': image.bigCat }" v-for="(image, i) in images" :key="image.id"
             @click="onClick(image)">
            <div class="position-relative">
                <img class="img-fluid" :src="image.url" @load="loaded">
                <div id="color" class="overlay w-100 h-100 d-flex justify-content-center align-items-center" :class="getBGcolor(i)">
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
                    url: `http://placekitten.com/${width}/${height}`
                })
            }
        },
        onClick(image) {
            this.$emit('open-popup', image)
        },
        getBGcolor(index) {
            let colors = ['bg-primary', 'bg-info', 'bg-warning', 'bg-success']
            return colors[index % colors.length]
        }
    }
}
</script>

<style lang="scss" scoped>
    /* For mobile phones: */
    .grid-sizer,
    [class*="cat"] {
        width: 100%;
        padding: 10px;
        transition: transform .5s;
    }

    .zoom:hover {
        transform: scale(1.03);
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
        color: white;
        opacity: 0;
        font-size: 2rem;
        position: absolute;
        transform: translateY(-100%);
        transition: opacity 0.3s;
    }

    .cat:hover {
        .overlay {
            opacity: 0.8;
        }
    }
</style>
