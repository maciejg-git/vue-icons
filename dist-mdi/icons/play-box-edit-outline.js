import { h } from 'vue'
export default {
  $_icon: {
    name: "PlayBoxEditOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["play","box","edit","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13 18.9L19.1 12.8L21.2 14.9L15.1 21H13V18.9M21.4 11.3L22.7 12.6C22.9 12.8 22.9 13.1 22.7 13.3L21.7 14.3L19.6 12.3L20.6 11.3C20.7 11.2 20.8 11.1 21 11.1S21.3 11.1 21.4 11.3M11 21H5C4.5 21 4 20.8 3.6 20.4C3.2 20 3 19.5 3 19V5C3 4.5 3.2 4 3.6 3.6C4 3.2 4.5 3 5 3H19C20.1 3 21 3.9 21 5V9H19V5H5V19H11V21M15 12L10 8V16L15 12Z"}
        ) 
      ]
    )
  }
}