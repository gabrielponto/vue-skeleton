<template>
    <div id="loading-over" class="loading-over">
        <img src="../assets/images/loading.png" />
    </div>
</template>
<script>
export default {
    name: 'LoadingOver'
}
</script>
<style lang="scss">
.loading-over {
    background:rgba(255, 255, 255, 0.8);
    width:100%;
    height:100%;
    position:absolute;
    z-index:1001;

    img {
        margin:0 auto;
        width:20px;
        height:20px;
        position:relative;
        top:50%;
        left:50%;
        margin-top:-10px;
        margin-left:-10px;
    }
}
</style>