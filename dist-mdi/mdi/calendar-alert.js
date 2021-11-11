import { h } from 'vue'
export default {
  name: "CalendarAlert",
  vendor: "Mdi",
  type: "",
  tags: ["calendar","alert"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-calendar-alert","innerHTML":"<path d='M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1H6M5 8H19V19H5V7M11 9V14H13V9H11M11 16V18H13V16H11Z' />"},
    )
  }
}