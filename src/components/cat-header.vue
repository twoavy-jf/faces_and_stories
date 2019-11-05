<template>
    <div class="d-flex justify-content-center align-items-center">
    <h1>
        <p class="text"><span class="text-danger">public class</span> <span class="text-primary">hello</span> {</p>
        <p style="padding-left: 3em" class="text"><span class="text-danger">public static</span> <span class="text-info">void</span> <span class="text-primary">main</span>(<span class="text-info">String</span>[] <span class="text-warning">args</span>) {</p>
        <p style="padding-left: 6em" class="text"><span class="text-info">System</span>.out.println(</p>
        <p style="padding-left: 9em;" class="animated-text text-secondary">"Hallo Welt!"</p>
        <p style="padding-left: 6em" class="text">);</p>
        <p style="padding-left: 3em" class="text">}</p>
        <p class="text">}</p>
    </h1>
    </div>
</template>

<script>
export default {
    name: 'cat-header'
}
</script>

<style lang="scss" scoped>
    .text {
        font-family: monospace;
        height: 1.1em;
    }
    .animated-text {
        font-family: monospace;
        overflow: hidden;
        height: 1.1em;
        word-wrap: break-word;
        white-space: nowrap;
        animation: typing 4s steps(48) forwards;
        /*animation-delay: 35s;*/
    }

    @keyframes typing {
        from {
            width: 0;
        }

        to {
            width: 48ch;
        }
    }
</style>
