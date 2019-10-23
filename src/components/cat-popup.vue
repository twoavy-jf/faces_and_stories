<template>
    <div class="popup d-flex justify-content-center align-items-center">
        <div class="btn btn-danger close-button" @click="$emit('close')">schließen</div>
        <div class="row d-flex justify-content-center align-items-center w-100">
            <div class="col-12 col-sm-8 col-md-6">
                <cat-slider v-if="content.bigCat"/>
                <img v-else :src="content.url" class="img-fluid">
            </div>
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
    .popup {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: fixed;
        z-index: 10;
        background: rgba(0, 0, 0, 0.8);

        .close-button {
            position: absolute;
            top: 0;
            right: 0;
            margin: 5px;
        }
    }
</style>
