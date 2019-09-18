<template>
    <header>
        <a class="logo">
            <a href="/" class="logo">
                <img src="/logo.png" />
            </a>
        </a>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style>
header {
    padding:15px;
    background:#FFF;
    border-bottom:4px solid #CCC;
}
header .logo {
    display:block;
    margin:0 auto;
    text-align:center;
}
header .logo img {
    height:60px;
}
</style>