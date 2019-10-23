<template>
    <div class="popup d-flex justify-content-center align-items-center">
        <div class="btn btn-danger close-button" @click="$emit('close')">schließen</div>
        <div v-if="content.bigCat" class="image-container">
            <cat-slider/>
        </div>
        <div v-else class="image-container d-flex justify-content-center align-items-center">
            <img :src="content.url">
        </div>
    </div>
</template>

<script>
import CatSlider from './cat-slider'

export default {
    name: 'cat-popup',
    components: { CatSlider },
    props: {
        content: Object
    }
}
</script>

<style lang="scss" scoped>
    @media only screen and (max-width: 600px) {
        .popup {
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            position: fixed;
            z-index: 10;
            background: rgba(0, 0, 0, 0.8);

            .image-container {
                width: 90%;
                height: 90%;

                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }
            .close-button {
                position: absolute;
                top: 0;
                right: 0;
                margin: 5px;
            }
        }
    }
    .popup {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 10;
        background: rgba(0, 0, 0, 0.8);

        .image-container {
            width: 50%;
            height: 75%;

            img {
                max-height: 100%;
                max-width: 100%;
            }
        }

        .close-button {
            position: absolute;
            top: 0;
            right: 0;
            margin: 5px;
        }
    }
</style>
