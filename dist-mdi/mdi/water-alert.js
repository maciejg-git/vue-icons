import { h } from 'vue'
export default {
  name: "WaterAlert",
  vendor: "Mdi",
  type: "",
  tags: ["water","alert"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-water-alert","innerHTML":"<path d='M10 3.25C10 3.25 16 10 16 14C16 17.31 13.31 20 10 20S4 17.31 4 14C4 10 10 3.25 10 3.25M20 7V13H18V7H20M18 17H20V15H18V17Z' />"},
    )
  }
}