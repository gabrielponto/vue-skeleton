<template>
    <div class="pin-group">
        <div class="pin-group__one">
            <input type="text" class="pin-group__item" v-model="pinGroup.one" @keyup="pinKeyupOne" @paste="pinPaste" />
            <input type="text" class="pin-group__item" maxlength="1" v-model="pinGroup.two" @keyup="pinKeyupOne" />
            <input type="text" class="pin-group__item" maxlength="1" v-model="pinGroup.three" @keyup="pinKeyupOne" />
        </div>
        <div class="pin-group__separator">-</div>
        <div class="pin-group__two">
            <input type="text" class="pin-group__item" maxlength="1" v-model="pinGroup.four" @keyup="pinKeyupTwo" />
            <input type="text" class="pin-group__item" maxlength="1" v-model="pinGroup.five" @keyup="pinKeyupTwo" />
            <input type="text" class="pin-group__item" maxlength="1" v-model="pinGroup.six" @keyup="pinKeyupTwo" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'Pin',
    props: {
        onFinish: Function
    },
    data: function() {
        return {
            pinGroup: {},
            pasting: false
        }
    },
    methods: {
        pinKeyupOne: function(event) {
            if (event.code == 'Backspace') {
                var previousElement = event.target.previousSibling;
                if (previousElement) {
                    event.target.previousSibling.focus();
                }
            }
            if (event.target.value.length > 0 && !this.pasting) {
                // Check if is different of numbers
                if (isNaN(event.target.value)) {
                    event.target.value = '';
                } else {
                    var nextElement = event.target.nextSibling;
                    if (nextElement) {
                        event.target.nextSibling.focus();
                    } else {
                        event.target.parentElement.nextSibling.nextSibling.children[0].focus();
                    }
                }
            }
            if (event.target.value.length > 1 && !this.pasting) {
                event.target.value = event.target.value[0];
                this.pinGroup.one = event.target.value;   
            }
        },
        pinKeyupTwo: function(event) {
            if (event.code == 'Backspace') {
                var previousElement = event.target.previousSibling;
                if (previousElement) {
                    event.target.previousSibling.focus();
                } else {
                    event.target.parentElement.previousSibling.previousSibling.children[2].focus();
                }
            }
            if (event.target.value.length > 0) {
                if (isNaN(event.target.value)) {
                    event.target.value = '';
                } else {
                    var nextElement = event.target.nextSibling;
                    if (nextElement) {
                        event.target.nextSibling.focus();
                    } else {
                        this.fireOnFinish();
                    }
                }
            }
        },
        fireOnFinish: function() {
            let pin = this.pinGroup.one + this.pinGroup.two + this.pinGroup.three + this.pinGroup.four + this.pinGroup.five + this.pinGroup.six;
            if (this.onFinish) {
                this.onFinish(pin);
            }
        },
        getCharAt: function(value, index) {
            if (value && value.length > index) {
                return value[index];
            } else {
                return '';
            }
        },
        pinPaste: function(event) {
            this.pasting = true;
            // Get the first 6 chars
            setTimeout(() => {
                var value = event.target.value.replace(/-/gi, '');
                this.pinGroup.one = this.getCharAt(value, 0);
                this.pinGroup.two = this.getCharAt(value, 1);
                this.pinGroup.three = this.getCharAt(value, 2);
                this.pinGroup.four = this.getCharAt(value, 3);
                this.pinGroup.five = this.getCharAt(value, 4);
                this.pinGroup.six = this.getCharAt(value, 5);
                event.target.blur();
                this.fireOnFinish();
                this.pasting = false;
            }, 100);
        }
    }
}
</script>
<style>

</style>