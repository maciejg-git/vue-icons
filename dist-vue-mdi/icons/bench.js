import { h } from 'vue'
export default {
  $_icon: {
    name: "Bench",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["bench"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M23 13H1V15H3V19H5V15H19V19H21V15H23V13Z"}
        ) 
      ]
    )
  }
}