import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'UiClock',
  
  setup() {
    const time = ref();
    let intervalId;

    const updateTime = () => {
      time.value = new Intl.DateTimeFormat(navigator.language, {
        timeStyle: 'medium',
      }).format(new Date());
    };

    onMounted(() => {
      updateTime();
      intervalId = setInterval(updateTime, 1000);
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return {
      time,
    }
  },

  template: `<div class="clock">{{ time }}</div>`,
})
