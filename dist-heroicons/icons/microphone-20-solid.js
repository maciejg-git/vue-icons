import { h } from 'vue'
export default {
  $_icon: {
    name: "Microphone",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["microphone"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true","data-slot":"icon"},
      [ 
        h(
          "path",
          {"d":"M7 4a3 3 0 0 1 6 0v6a3 3 0 1 1-6 0V4Z"}
        ),
        h(
          "path",
          {"d":"M5.5 9.643a.75.75 0 0 0-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.546A6.001 6.001 0 0 0 16 10v-.357a.75.75 0 0 0-1.5 0V10a4.5 4.5 0 0 1-9 0v-.357Z"}
        ) 
      ]
    )
  }
}