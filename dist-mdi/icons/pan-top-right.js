import { h } from 'vue'
export default {
  $_icon: {
    name: "PanTopRight",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["pan","top","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M18.65,11L13,5.35L19,5L18.65,11Z"}
        ) 
      ]
    )
  }
}