import { h } from 'vue'
export default {
  $_icon: {
    name: "FileMusicOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["file","music","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M13,10V12H11V17A2,2 0 0,1 9,19A2,2 0 0,1 7,17A2,2 0 0,1 9,15C9.4,15 9.7,15.1 10,15.3V10H13Z"}
        ) 
      ]
    )
  }
}