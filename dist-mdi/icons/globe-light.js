import { h } from 'vue'
export default {
  $_icon: {
    name: "GlobeLight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["globe","light"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7.1 10C8.1 9 9.5 8.3 11 8.1V2H13V8.1C14.5 8.3 15.9 9 16.9 10H7.1M5.3 13C5.1 13.6 5 14.3 5 15C5 18.9 8.1 22 12 22S19 18.9 19 15C19 14.3 18.9 13.6 18.7 13H5.3Z"}
        ) 
      ]
    )
  }
}