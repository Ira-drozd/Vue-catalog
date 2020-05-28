import Vue from 'vue'

Vue.directive('customdiv', {
    bind: function (el, binding) {
        el.style.background = 'cyan';
        let fontSize = 90;

        if (binding.value) {
            fontSize = binding.value;
        }

        if (binding.arg) {
            el.getElementsByClassName(binding.arg)[0].style.fontSize = fontSize + 'px';
        } else {
            el.style.fontSize = fontSize + 'px';
        }

        if (binding.modifiers['shadow']) {
            el.style.textShadow = '5px 7px 5px rgba(0,0,0,0.3)'
        }

        if (binding.modifiers['smoked']) {
            setTimeout(() => {
                el.classList.add('cool')
            }, 2000)
        }

    }
});
