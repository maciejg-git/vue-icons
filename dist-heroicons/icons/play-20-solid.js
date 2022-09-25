import { h } from 'vue'
export default {
  $_icon: {
    name: "Play",
    vendor: "H",
    license: "MIT",
    type: ["20","solid"],
    tags: ["play"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-play"},
      [ 
        h(
          "path",
          {"d":"M6.29995 2.84095C5.3011 2.21124 4 2.92906 4 4.10984V15.891C4 17.0718 5.3011 17.7896 6.29995 17.1599L15.6436 11.2693C16.577 10.6809 16.577 9.31997 15.6436 8.73152L6.29995 2.84095Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}