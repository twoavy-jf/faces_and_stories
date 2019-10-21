<template>
    <div class="home">
        <cat-grid />
    </div>
</template>

<script>
// @ is an alias to /src

import CatGrid from '../components/cat-grid'
export default {
    name: 'home',
    components: { CatGrid }
}
</script>
