import { h } from 'vue'
export default {
  $_icon: {
    name: "CarClutch",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["car","clutch"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-car-clutch"},
      [ 
        h(
          "path",
          {"d":"M10 18.84L14 20.7V23L8 20V14H5V10H8V4L14 1V3.3L10 5.16V18.84M19 10H15V5.41L12 6.8V17.2L15 18.6V14H19V10Z"}
        ) 
      ]
    )
  }
}