import { h } from 'vue'
export default {
  $_icon: {
    name: "LandRowsHorizontal",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["land","rows","horizontal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-land-rows-horizontal"},
      [ 
        h(
          "path",
          {"d":"M22 20V4C22 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20M4 6.5V4H20V6.5H4M4 11V8.5H20V11H4M4 15.5V13H20V15.5H4M4 20V17.5H20V20H4Z"}
        ) 
      ]
    )
  }
}