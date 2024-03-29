import { h } from 'vue'
export default {
  $_icon: {
    name: "Microsoft",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["microsoft"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2,3H11V12H2V3M11,22H2V13H11V22M21,3V12H12V3H21M21,22H12V13H21V22Z"}
        ) 
      ]
    )
  }
}