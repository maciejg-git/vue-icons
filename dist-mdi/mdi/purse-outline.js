import { h } from 'vue'
export default {
  $_icon: {
    name: "PurseOutline",
    vendor: "Mdi",
    type: "",
    tags: ["purse","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-purse-outline"},
      [ 
        h(
          "path",
          {"d":"M19,11L20,19H4L5,11H19M14,3H10L8,5V9H4.7A1.65,1.65 0 0,0 3,10.5L2,19.1A1.74,1.74 0 0,0 3.7,21H20.3A1.74,1.74 0 0,0 22,19.1L21,10.5A1.65,1.65 0 0,0 19.3,9H16V5L14,3M10,9V5H14V9"}
        ) 
      ]
    )
  }
}