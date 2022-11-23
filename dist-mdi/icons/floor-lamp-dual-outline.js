import { h } from 'vue'
export default {
  $_icon: {
    name: "FloorLampDualOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["floor","lamp","dual","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11.73 10.06L10.17 11.24L11 12.2V20H8V22H16V20H13V12.3L13.85 11.26L12.27 10.07L11.73 10.06M8.32 5.31L9.23 8.19L9 8.37L6.47 6.7L8.32 5.31M9.39 2L3 6.81L9.08 10.82L11.55 8.93L9.39 2M15.67 5.3L17.53 6.7L15 8.37L14.77 8.2L15.67 5.3M14.61 2L12.44 8.95L14.92 10.82L21 6.81L14.61 2Z"}
        ) 
      ]
    )
  }
}