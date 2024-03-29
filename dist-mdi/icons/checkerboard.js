import { h } from 'vue'
export default {
  $_icon: {
    name: "Checkerboard",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["checkerboard"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z"}
        ) 
      ]
    )
  }
}