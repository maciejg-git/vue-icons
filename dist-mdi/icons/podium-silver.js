import { h } from 'vue'
export default {
  $_icon: {
    name: "PodiumSilver",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["podium","silver"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M20,10.09L22.45,11.58L21.8,8.77L24,6.89L21.11,6.64L20,4L18.87,6.64L16,6.89L18.18,8.77L17.5,11.58L20,10.09M23,23H17V13H23V23M1,17V23H7V17H1M5,21H3V19H5V21M9,10V23H15V10H9M13,21H11V12H13V21Z"}
        ) 
      ]
    )
  }
}