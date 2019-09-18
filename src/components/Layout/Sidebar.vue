<template>
    <div class="sidebar-mobile-collapse">
        <button class="sidebar-toggle" @click="toggle" v-show="!toggleActive" ref="sidebar-toggle">
            <font-awesome-icon icon="bars" />
        </button>
        <div class="sidebar-wrapper" ref="sidebar-wrapper" :class="{'sidebar-collapse-active': toggleActive}">
            <div class="sidebar">
                <div class="sidebar-main">
                    <div v-for="(item, key) in items" :key="key">
                        <router-link class="sidebar-item" :to="item.href" :key="key" :title="item.title" :class="{'sidebar-item-main': item.main}" v-if="!item.external" v-on:click.native="toggle">
                            <font-awesome-icon :icon="item.icon" v-if="item.icon" />
                            <img :src="item.image" v-if="item.image" />
                        </router-link>
                        <a :href="item.href" v-if="item.external" target="_blank" :title="item.title" class="sidebar-item" :class="{'sidebar-item-main': item.main}" @click="toggle">
                            <font-awesome-icon :icon="item.icon" v-if="item.icon" />
                            <img :src="item.image" v-if="item.image" />
                        </a>
                    </div>
                </div>
                <div class="sidebar-secondary" v-if="subitems">
                    <button class="sidebar-toggle-off" @click="toggle" v-if="toggleActive">
                        <font-awesome-icon icon="arrow-left" />
                    </button>
                    <h2 class="sidebar-secondary-title" v-if="subitemsTitle">{{ subitemsTitle }}</h2>
                    <router-link class="sidebar-secondary-item" v-for="(item, key) in subitems" :to="item.href" :key="key" :title="item.title" :class="{'sidebar-secondary-item-main': item.main}" @click.native="toggle">
                        <font-awesome-icon :icon="item.icon" v-if="item.icon" /> {{ item.title }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        items: Array,
        subitems: Array,
        subitemsTitle: String
    },
    data: function() {
        return {
            toggleActive: false
        }
    },
    methods: {
        toggle: function() {
            this.toggleActive = !this.toggleActive;
        }
    },
    mounted: function() {
        document.addEventListener('click', (event) => {
            const flyoutElement = this.$refs['sidebar-wrapper'];
            let targetElement = event.target; // clicked element
            do {
                if (targetElement == flyoutElement || targetElement == this.$refs['sidebar-toggle']) {
                    // This is a click inside. Do nothing, just return.
                    return;
                }
                // Go up the DOM
                targetElement = targetElement.parentNode;
            } while (targetElement);

            setTimeout(() => {
                if (this.toggleActive)
                    this.toggleActive = false;
            }, 100);
        });
    }
}
</script>

<style lang="scss">
@import '../../sass/variables.scss';
@import '../../sass/mixins.scss';
.sidebar-mobile-collapse {
    .sidebar-toggle {
        display:block;
        position:absolute;
        z-index:1000;
        top:27px;
        left:20px;
        cursor:pointer;
        padding:12px;
        padding-top:7px;
        padding-bottom:7px;
        border:1px solid #CCC;
        border-radius:4px;
        font-size:1.4em;
        background:#FFF;

        @include md {
            display:none;
        }
    }
    .sidebar-toggle-off {
        background:transparent;
        border:0;
        cursor:pointer;
        position:absolute;
        right:10px;
        margin-top:-40px;
        z-index:1000;
        font-size:1.1em;

        @include md {
            display:none;
        }
    }
    .sidebar-wrapper {
        opacity:0;
        height:0;
        width:0;
        overflow:hidden;
        z-index:-1;
        display:none;

        @include md {
            width:304px;
            opacity:1;
            height:auto;
            z-index: 999;
            display:block;
        }

        transition: width 0.5s;

        &.sidebar-collapse-active {
            opacity:1;
            height:auto;
            z-index:999;
            display:block;
        }
    }
}
.sidebar {
    display:flex;
    min-height:100%;
    position:fixed;
    z-index:10;
    top:0;
    border-right:1px solid #CCC;

    .sidebar-main {
        flex:1;
        //background:rgb(7, 71, 166);
        background: linear-gradient(320deg, #070e18 0, #2a3b56 100%);
        color:rgb(222, 235, 255);
        min-width:64px;
        box-sizing: border-box;
    }
    .sidebar-secondary {
        flex:4;
        background:rgb(244, 245, 247);
        color:#000;
        width:240px;
        padding-left:20px;
        padding-right:20px;
        padding-top:60px;
        box-sizing:border-box;

        svg {
            width:30px;
        }

        .sidebar-secondary-title {
            font-weight:normal;
            font-size:1.6em;
            padding-left:10px;
            margin:0;
            margin-bottom:20px;
            border-bottom:1px solid #CCC;
            padding-bottom:30px;
        }

        .sidebar-secondary-item {
            padding:10px;
            color:#333;
            width:100%;
            
            &.router-link-exact-active, &:hover {
                background:#EBECF0;
                border-radius:4px;
            }
        }
    }

    .sidebar-item {
        width:40px;
        height:40px;
        margin:0 auto;
        text-align:center;
        line-height:40px;
        vertical-align:middle;
        color:#FFF;
        margin-left:11px;
        font-size:1.2em;
        margin-top:10px;
        position:relative;

        &:hover {
            background:rgb(7, 53, 124);
            border-radius:50%;
        }

        &.sidebar-item-main {
            font-size:1.3em;
            margin-bottom:15px;
            width:40px;
            height:40px;

            img {
                width:auto;
                height:30px;
            }
        }

        img {
            width:auto;
            height:30px;
            vertical-align: middle;
        }
    }

    .sidebar-item[title]:hover:after {
        content: attr(title);
        position:absolute;
        background:rgba(0, 0, 0, 0.9);
        color:#FFF;
        margin:0;
        font-size:0.6em;
        padding:2px 4px;
        border-radius:4px;
        display:block;
        height:auto;
        width:auto;
        line-height:20px;
        vertical-align:middle;
        top:9px;
        left:45px;
    }
}
</style>
