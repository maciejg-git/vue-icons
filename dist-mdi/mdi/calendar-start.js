import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarStart",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","start"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-calendar-start","innerHTML":"<path d='M2 14H4V17H9V14L13 18L9 22V19H4V22H2V14M19 19V8H5V12H3L3 5C3 3.89 3.89 3 5 3H6V.998H8V3H16V.998H18V3H19C20.1 3 21 3.89 21 5V19C21 20.1 20.1 21 19 21L12.83 21L14.83 19L19 19Z' />"},
    )
  }
}