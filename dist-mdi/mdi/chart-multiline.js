import { h } from 'vue'
export default {
  $_icon: {
    name: "ChartMultiline",
    vendor: "Mdi",
    type: "",
    tags: ["chart","multiline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"mdi-chart-multiline","innerHTML":"<path d='M22,6.92L20.59,5.5L17.74,8.72C15.68,6.4 12.83,5 9.61,5C6.72,5 4.07,6.16 2,8L3.42,9.42C5.12,7.93 7.27,7 9.61,7C12.35,7 14.7,8.26 16.38,10.24L13.5,13.5L9.5,9.5L2,17L3.5,18.5L9.5,12.5L13.5,16.5L17.55,11.93C18.3,13.28 18.8,14.83 19,16.5H21C20.78,14.18 20.05,12.09 18.96,10.34L22,6.92Z' />"},
    )
  }
}