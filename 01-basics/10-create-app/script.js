import { defineComponent, createApp } from 'vue'

const App = defineComponent({
  name: 'App',
  setup () {
    const date = new Date;
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString('en-EN', options);

    return { formattedDate };
  },

  template: `<div>
    <p>Сегодня {{ formattedDate }}</p>
  </div>`,
});

const app = createApp(App);
app.mount('#app');
