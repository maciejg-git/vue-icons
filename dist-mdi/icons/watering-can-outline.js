import { h } from 'vue'
export default {
  $_icon: {
    name: "WateringCanOutline",
    vendor: "Mdi",
    type: [],
    tags: ["watering","can","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-watering-can-outline"},
      [ 
        h(
          "path",
          {"d":"M18.5 7.47C17.76 8.2 17.57 9.25 17.92 10.15L15 13.07V11C15 10.45 14.55 10 14 10H12.97C13 9.83 13 9.67 13 9.5C13 6.46 10.54 4 7.5 4S2 6.46 2 9.5C2 11.21 2.78 12.73 4 13.74V20C4 20.55 4.45 21 5 21H14C14.55 21 15 20.55 15 20V15.89L19.33 11.56C20.23 11.91 21.28 11.73 22 11L18.5 7.47M4.05 10C4.03 9.83 4 9.67 4 9.5C4 7.57 5.57 6 7.5 6S11 7.57 11 9.5C11 9.67 10.97 9.83 10.95 10M13 19H6V12H13V19Z"}
        ) 
      ]
    )
  }
}