<template>
    <div class="home">
        <cat-grid @open-popup="openPopup"/>
        <transition name="fade">
            <cat-popup v-if="showPopup" @close="showPopup = false" :content="popupContent"/>
        </transition>
    </div>
</template>

<script>
// @ is an alias to /src

import CatGrid from '../components/cat-grid'
import CatPopup from '../components/cat-popup'

export default {
    name: 'home',
    components: { CatPopup, CatGrid },
    data() {
        return {
            showPopup: false,
            popupContent: null
        }
    },
    methods: {
        openPopup(image) {
            this.showPopup = true
            this.popupContent = image
        }
    }
}
</script>
