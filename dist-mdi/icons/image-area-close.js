import { h } from 'vue'
export default {
  $_icon: {
    name: "ImageAreaClose",
    vendor: "Mdi",
    type: [],
    tags: ["image","area","close"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-image-area-close"},
      [ 
        h(
          "path",
          {"d":"M12,23L8,19H16L12,23M20,3A2,2 0 0,1 22,5V15A2,2 0 0,1 20,17H4A2,2 0 0,1 2,15V5A2,2 0 0,1 4,3H20M5,14H19L14.5,8L11,12.5L8.5,9.5L5,14Z"}
        ) 
      ]
    )
  }
}