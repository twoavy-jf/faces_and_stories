<template>
    <video controls :poster="require('@/assets/content/' + poster)" class="img-fluid">
        <source :src="require('@/assets/content/' + url)" type="video/mp4"/>
    </video>
</template>

<script>
export default {
    name: 'video-player',
    props: {
        url: String,
        poster: String
    }
}
</script>

<style lang="scss" scoped>
    video {
        outline: none;
    }
</style>
