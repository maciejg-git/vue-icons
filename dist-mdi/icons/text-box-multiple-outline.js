import { h } from 'vue'
export default {
  $_icon: {
    name: "TextBoxMultipleOutline",
    vendor: "Mdi",
    type: [],
    tags: ["text","box","multiple","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-text-box-multiple-outline"},
      [ 
        h(
          "path",
          {"d":"M16,15H9V13H16V15M19,11H9V9H19V11M19,7H9V5H19V7M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17C23,18.11 22.11,19 21,19H7A2,2 0 0,1 5,17V3C5,1.89 5.89,1 7,1H21M7,3V17H21V3H7Z"}
        ) 
      ]
    )
  }
}