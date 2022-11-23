import { h } from 'vue'
export default {
  $_icon: {
    name: "UnfoldMoreVertical",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["unfold","more","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M18.17,12L15,8.83L16.41,7.41L21,12L16.41,16.58L15,15.17L18.17,12M5.83,12L9,15.17L7.59,16.59L3,12L7.59,7.42L9,8.83L5.83,12Z"}
        ) 
      ]
    )
  }
}