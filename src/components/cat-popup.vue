<template>
    <div class="popup d-flex justify-content-center align-items-center">
        <div class="btn close-button" @click="close">
            <icons name="close" :size="40"/>
        </div>
        <div v-if="show" class="row d-flex justify-content-center align-items-center w-100">
            <div class="col-12 col-sm-8 col-md-8 px-0">
                <cat-slider v-if="content.type === 'slides'" :slides="content.slides"/>
                <div class="d-flex flex-column justify-content-center align-items-center vh-100 p-5" v-else-if="content.type === 'image'">
                    <img :src="require('@/assets/content/' + content.url)"
                         class="img-fluid mh-100" @load="loaded">
                    <div class="text-white p-2" :style="{ width: width + 'px' }">{{ content.caption }}>{{ content.caption }}</div>
                </div>
                <video-player v-else-if="content.type === 'video'" :url="content.video" :poster="content.url"/>
            </div>
        </div>
    </div>
</template>

<script>
import CatSlider from './cat-slider'
import Icons from './icons'
import VideoPlayer from './video-player'

export default {
    name: 'cat-popup',
    components: { VideoPlayer, Icons, CatSlider },
    props: {
        content: Object
    },
    data() {
        return {
            show: false,
            width: 0
        }
    },
    mounted() {
        this.show = true
    },
    methods: {
        loaded(event) {
            this.width = event.target.clientWidth
        },
        close() {
            this.show = false
            this.$nextTick(() => {
                this.$emit('close')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .popup {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 10;
        animation-duration: .5s;
        background: rgba(0, 0, 0, 0.8);

        .close-button {
            position: absolute;
            top: 0;
            right: 0;
            margin: 5px;
            z-index: 11;
        }
    }
</style>
