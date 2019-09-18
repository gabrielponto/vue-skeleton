<template>
    <div class="proress-bar-container">
        <div class="progress-pie-chart" ref="progressPieChart" :data-percent="percent">
            <div class="ppc-progress">
                <div class="ppc-progress-fill" ref="ppcProgressFill"></div>
            </div>
            <div class="ppc-percents" ref="ppcPercents">
                <div class="pcc-percents-wrapper">
                <span ref="ppcPercentsSpan">%</span>
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="progress-bar-text blinking" v-if="text">
                {{ text }}
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: [
        'percent',
        'text'
    ],
    mounted: function() {
        this.updateProgress();
    },
    methods: {
        updateProgress: function() {
            var $ppc = this.$refs.progressPieChart,
                percent = parseInt(this.percent),
                deg = 360*percent/100;
            if (percent > 50) {
                $ppc.classList.add('gt-50');
            }
            this.$refs.ppcProgressFill.style.transform = 'rotate('+ deg +'deg)';
            this.$refs.ppcPercentsSpan.innerHTML = percent+'%';
        }
    },
    watch: {
        percent: function() {
            this.updateProgress();
        }
    }
}
</script>

<style lang="scss">
    @import '../sass/components/progressbar.scss';
</style>