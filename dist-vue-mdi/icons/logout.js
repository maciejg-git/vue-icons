import { h } from 'vue'
export default {
  $_icon: {
    name: "Logout",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["logout"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12M4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"}
        ) 
      ]
    )
  }
}