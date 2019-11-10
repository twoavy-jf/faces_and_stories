<template>
    <div class="home">
        <imm-header/>
        <cat-header/>
        <cat-grid @open-popup="openPopup"/>
        <transition name="fade">
            <cat-popup v-if="showPopup" @close="closePopup" :content="popupContent"/>
        </transition>
    </div>
</template>

<script>
// @ is an alias to /src

import CatHeader from '../components/cat-header'
import CatGrid from '../components/cat-grid'
import CatPopup from '../components/cat-popup'
import ImmHeader from '../components/imm-header'

export default {
    name: 'home',
    components: { ImmHeader, CatHeader, CatPopup, CatGrid },
    data() {
        return {
            showPopup: false,
            popupContent: null
        }
    },
    methods: {
        openPopup(image) {
            this.showPopup = true
            this.popupContent = image.data
        },
        closePopup() {
            this.showPopup = false
            this.popupContent = null
        }
    }
}
</script>
