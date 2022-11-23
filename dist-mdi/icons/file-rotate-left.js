import { h } from 'vue'
export default {
  $_icon: {
    name: "FileRotateLeft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","rotate","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17 7H13C11.9 7 11 7.9 11 9V18C11 19.11 11.9 20 13 20H19C20.11 20 21 19.11 21 18V11L17 7M19 12H16V9H16.17L19 11.83V12M4 11C4 6.58 7.58 3 12 3L13 3.06V5.08L12 5C8.69 5 6 7.69 6 11H9L5 15L1 11H4"}
        ) 
      ]
    )
  }
}