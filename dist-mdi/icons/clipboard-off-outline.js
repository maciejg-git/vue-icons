import { h } from 'vue'
export default {
  $_icon: {
    name: "ClipboardOffOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["clipboard","off","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-clipboard-off-outline"},
      [ 
        h(
          "path",
          {"d":"M2.39 1.73L1.11 3L3 4.9C3 4.93 3 4.97 3 5V19C3 20.11 3.9 21 5 21H19C19.03 21 19.07 21 19.1 21L20.84 22.73L22.11 21.46L2.39 1.73M5 19V6.89L17.11 19H5M17 7V5H19V15.8L21 17.8V5C21 3.9 20.11 3 19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H6.2L10.2 7H17M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3Z"}
        ) 
      ]
    )
  }
}