import { h } from 'vue'
export default {
  $_icon: {
    name: "Pulse",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["pulse"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M3,13H5.79L10.1,4.79L11.28,13.75L14.5,9.66L17.83,13H21V15H17L14.67,12.67L9.92,18.73L8.94,11.31L7,15H3V13Z"}
        ) 
      ]
    )
  }
}