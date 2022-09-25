import { h } from 'vue'
export default {
  $_icon: {
    name: "EraserVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["eraser","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-eraser-variant"},
      [ 
        h(
          "path",
          {"d":"M15.14,3C14.63,3 14.12,3.2 13.73,3.59L2.59,14.73C1.81,15.5 1.81,16.77 2.59,17.56L5.03,20H12.69L21.41,11.27C22.2,10.5 22.2,9.23 21.41,8.44L16.56,3.59C16.17,3.2 15.65,3 15.14,3M17,18L15,20H22V18"}
        ) 
      ]
    )
  }
}