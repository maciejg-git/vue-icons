import { h } from 'vue'
export default {
  $_icon: {
    name: "ThermometerAuto",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["thermometer","auto"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-thermometer-auto"},
      [ 
        h(
          "path",
          {"d":"M12 14C11.7 13.6 11.4 13.3 11 13V5C11 3.3 9.7 2 8 2S5 3.3 5 5V13C2.8 14.7 2.3 17.8 4 20S8.8 22.7 11 21 13.7 16.2 12 14M9 8H7V5C7 4.5 7.5 4 8 4S9 4.5 9 5V8M18 3H16L12.8 12H14.7L15.4 10H18.6L19.3 12H21.2L18 3M15.8 8.7L17 5L18.2 8.7H15.8Z"}
        ) 
      ]
    )
  }
}