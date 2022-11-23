import { h } from 'vue'
export default {
  $_icon: {
    name: "TableFilter",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["table","filter"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17 21L18.8 22.77C19.3 23.27 20 22.87 20 22.28V18L22.8 14.6C23.3 13.9 22.8 13 22 13H15C14.2 13 13.7 14 14.2 14.6L17 18V21M12 11H20V3C20 1.9 19.11 1 18 1H4C2.9 1 2 1.9 2 3V15C2 16.11 2.9 17 4 17H13.42L12 15V11M12 5H18V9H12V5M10 15H4V11H10V15M10 9H4V5H10V9Z"}
        ) 
      ]
    )
  }
}