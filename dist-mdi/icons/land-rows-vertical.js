import { h } from 'vue'
export default {
  $_icon: {
    name: "LandRowsVertical",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["land","rows","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2M6.5 20H4V4H6.5V20M11 20H8.5V4H11V20M15.5 20H13V4H15.5V20M20 20H17.5V4H20V20Z"}
        ) 
      ]
    )
  }
}