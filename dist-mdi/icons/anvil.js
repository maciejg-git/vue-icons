import { h } from 'vue'
export default {
  $_icon: {
    name: "Anvil",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["anvil"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M9,5V10C13.03,12.47 8.44,14.97 6,16V19H21V16C14.59,13.27 17.47,9 22,8V5H9M2,6C2.81,8.13 4.42,9.5 7,10V6H2Z"}
        ) 
      ]
    )
  }
}