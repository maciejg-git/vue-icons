import { h } from 'vue'
export default {
  $_icon: {
    name: "DeskLampOff",
    vendor: "Mdi",
    type: [],
    tags: ["desk","lamp","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-desk-lamp-off"},
      [ 
        h(
          "path",
          {"d":"M9 10.87L8.8 11.13C8.93 11.4 9 11.7 9 12C9 12.47 8.83 12.92 8.53 13.28L13 20H17V22H7V20H10.62L6.58 13.95C5.66 13.75 5 12.94 5 12C5 10.9 5.9 10 7 10H7.14L7.53 9.42L1.11 3L2.39 1.73L22.11 21.46L20.84 22.73L9 10.87M18.33 7L16.67 9.5C17.35 9.95 18.29 9.77 18.75 9.08S19 7.46 18.33 7M9.57 6.37L11 7.82L12 6.37C11.78 8.05 12.75 9.89 14.45 11L18.89 4.37C17.2 3.24 15.12 3.04 13.65 3.87L10.85 2L9.18 4.5L10.32 5.25L9.57 6.37Z"}
        ) 
      ]
    )
  }
}