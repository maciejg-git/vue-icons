import { h } from 'vue'
export default {
  $_icon: {
    name: "TemperatureFahrenheit",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["temperature","fahrenheit"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-temperature-fahrenheit"},
      [ 
        h(
          "path",
          {"d":"M11,20V5H20V8H14V11H19V14H14V20H11M6,3A3,3 0 0,1 9,6A3,3 0 0,1 6,9A3,3 0 0,1 3,6A3,3 0 0,1 6,3M6,5A1,1 0 0,0 5,6A1,1 0 0,0 6,7A1,1 0 0,0 7,6A1,1 0 0,0 6,5Z"}
        ) 
      ]
    )
  }
}