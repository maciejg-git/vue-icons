import { h } from 'vue'
export default {
  $_icon: {
    name: "BowlMix",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bowl","mix"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16.2 11L20.3 4.5L22 5.5L18.6 11H16.2M15.6 12H2V15C2 18.9 5.1 22 9 22H15C18.9 22 22 18.9 22 15V12H15.6Z"}
        ) 
      ]
    )
  }
}