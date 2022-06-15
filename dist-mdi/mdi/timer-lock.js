import { h } from 'vue'
export default {
  $_icon: {
    name: "TimerLock",
    vendor: "Mdi",
    type: "",
    tags: ["timer","lock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-timer-lock","innerHTML":"<path d='M15 3H9V1H15V3M14.2 14.5V14.74C13.5 15.34 13 16.24 13 17.2V20.7C13 21.12 13.09 21.53 13.24 21.91C12.83 21.96 12.42 22 12 22C7.03 22 3 17.97 3 13S7.03 4 12 4C14.12 4 16.07 4.74 17.62 6L19.04 4.56C19.55 5 20 5.46 20.45 5.97L19.03 7.39C19.71 8.24 20.23 9.22 20.57 10.28C20.07 10.11 19.55 10 19 10C16.4 10 14.2 12.06 14.2 14.5M13 7H11V14H13V7M23 17.3V20.8C23 21.4 22.4 22 21.7 22H16.2C15.6 22 15 21.4 15 20.7V17.2C15 16.6 15.6 16 16.2 16V14.5C16.2 13.1 17.6 12 19 12S21.8 13.1 21.8 14.5V16C22.4 16 23 16.6 23 17.3M20.5 14.5C20.5 13.7 19.8 13.2 19 13.2S17.5 13.7 17.5 14.5V16H20.5V14.5Z' />"},
    )
  }
}