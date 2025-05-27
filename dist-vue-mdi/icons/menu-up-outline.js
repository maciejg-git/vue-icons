import { h } from 'vue'
export default {
  $_icon: {
    name: "MenuUpOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["menu","up","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18,16V14.5L12,8.5L6,14.5V16H18M12,11.33L14.67,14H9.33L12,11.33Z"}
        ) 
      ]
    )
  }
}