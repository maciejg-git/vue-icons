import { h } from 'vue'
export default {
  $_icon: {
    name: "GoogleDrive",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["google","drive"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M7.71,3.5L1.15,15L4.58,21L11.13,9.5M9.73,15L6.3,21H19.42L22.85,15M22.28,14L15.42,2H8.58L8.57,2L15.43,14H22.28Z"}
        ) 
      ]
    )
  }
}