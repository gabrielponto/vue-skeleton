<template>
    <div class="full-loading">
        <img src="https://vuejs.org/images/logo.png" />
    </div>
</template>

<script>
export default {
    name: 'LoadingFull'
}
</script>

<style lang="scss" scoped>
    /** Full page loading */
    .full-loading {
        position:fixed;
        width:100%;
        height:100%;
        background: #f3f3f3;
        text-align:center;
        left:0;
        right:0;
        top:0;
        bottom:0;
        z-index:9999;
        padding:0;
        margin:0;

        img {
            width:200px;
            position:absolute;
            top:50%;
            left:50%;
            margin-left:-100px;
            margin-top:-100px;
        }

        &::after {
            content:'';
            display:block;
            position:absolute;
            left:50%;
            top:50%;
            margin-left:-20px;
            margin-top:-20px;
            width:40px;
            height:40px;
            border-style:solid;
            border-color:black;
            border-top-color:transparent;
            border-width: 4px;
            border-radius:50%;
            -webkit-animation: spin .8s linear infinite;
            animation: spin .8s linear infinite;
        }
    }
    @-webkit-keyframes spin {
        from {-webkit-transform:rotate(0deg);}
        to {-webkit-transform:rotate(360deg);}
    }

    @keyframes spin {
        from {transform:rotate(0deg);}
        to {transform:rotate(360deg);}
    }

    /** End full page loading */
</style>