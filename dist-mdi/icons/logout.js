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
          {"d":"M17 8L15.6 9.4L17.2 11H9V13H17.2L15.6 14.6L17 16L21 12L17 8M5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z"}
        ) 
      ]
    )
  }
}