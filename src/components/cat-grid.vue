<template>
    <div ref="grid">
        <div class="grid-sizer"></div>
        <div class="cat zoom" :class="{ 'big-cat': image.bigCat }" v-for="(image, i) in images" :key="image.id"
             @click="onClick(image)">
            <div class="position-relative">
                <img @load="loaded"
                     :src="require('@/assets/content/thumbnails/' + image.data.url)" class="img-fluid">
                <div id="color" class="overlay w-100 h-100 d-flex justify-content-center align-items-center"
                     :class="getBGcolor(i)">
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
        this.randomKittens(this.$store.state.data.length)
    },
    methods: {
        loaded() {
            this.numLoaded++
            if (this.numLoaded >= this.$store.state.data.length) {
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
                let bigCat = Math.random() < 0.3
                this.images.push({
                    id: i,
                    bigCat,
                    data: this.$store.getters.getImage(i)
                })
            }
        },
        onClick(image) {
            this.$emit('open-popup', image)
        },
        getBGcolor(index) {
            let colors = ['bg-primary', 'bg-success']
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
