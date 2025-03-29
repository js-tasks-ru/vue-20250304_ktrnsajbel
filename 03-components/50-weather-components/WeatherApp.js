import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import WeatherDetails from './WeatherDetails.js'
import WeatherAlert from './WeatherAlert.js'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherDetails,
    WeatherAlert,
  },

  setup () {
    const weatherData = getWeatherData();  
    const weatherIcons =  WeatherConditionIcons;

    function toMinutes(time) {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
    };

    function isDaytime(time, start, end) {
      const timeMinutes = toMinutes(time);
      return timeMinutes >= toMinutes(start) && timeMinutes <= toMinutes(end);
    };

    return { weatherData, weatherIcons, isDaytime };
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li v-for="item in weatherData"
          class="weather-card"
          :class="{ 'weather-card--night': !isDaytime(item.current.dt, item.current.sunrise, item.current.sunset) }"
        >
          <WeatherAlert v-if="item.alert" :alert="item.alert" />
          <div>
            <h2 class="weather-card__name">
              {{ item.geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ item.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="item.current.weather.description">
              {{ weatherIcons[item.current.weather.id] }}
            </div>
            <div class="weather-conditions__temp">{{ (item.current.temp - 273.15).toFixed(1) }} °C</div>
          </div>
          <WeatherDetails :data="item.current" />
        </li>
      </ul>
    </div>
  `,
});
