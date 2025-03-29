import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherDetails',

  props: {
    data: { type: Object, required: true },
  },

  setup () {
    const fields = {
      pressure: 'Давление, мм рт. ст.',
      humidity: 'Влажность, %',
      clouds: 'Облачность, %',
      wind_speed: 'Ветер, м/с',
    };

    return { fields };
  },

  template: `
    <div class="weather-details">
      <div v-for="(value, key) in fields" :key="key" class="weather-details__item">
        <div class="weather-details__item-label">{{ value }}</div>
        <div class="weather-details__item-value">{{ key === 'pressure' ? Math.round(data[key] * 0.75) : data[key] }}</div>
      </div>
    </div>
  `,
})