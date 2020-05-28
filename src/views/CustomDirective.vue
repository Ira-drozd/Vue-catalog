<template>
    <div id="my-custom-directive" v-customdiv:first.shadow.smoked="30">
        <span class="first">{{firstText | reverce('*')}} </span>
        <span class="second">{{secondText | ToUppercase}}</span>
    </div>
</template>

<script>

    import customdiv from "../directive/customdiv";
    import Vue from 'vue'


    export default {
        name: "CustomDirective",
        data() {
            return {
                firstText: 'Here is: ',
                secondText: 'My cool directive'
            }
        },
        computed: {
            fullText: function () {
                return (this.firstText + this.secondText)

            }
        },
        directive: {
            customdiv
        },
        filters: {
            'reverce': function (value, joinSymbol) {
                   return value.split('').reverse().join(joinSymbol);
            }
        },
        methods: {
            sayHi: setTimeout(function () {
                //alert("Hi")
            }, 500)
        }
    }

    Vue.filter('ToUppercase', function (value) {
        return value.toUpperCase();

    })


</script>

<style scoped>

</style>