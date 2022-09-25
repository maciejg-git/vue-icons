import { h } from 'vue'
export default {
  $_icon: {
    name: "FlashOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["flash","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-flash-outline"},
      [ 
        h(
          "path",
          {"d":"M7,2H17L13.5,9H17L10,22V14H7V2M9,4V12H12V14.66L14,11H10.24L13.76,4H9Z"}
        ) 
      ]
    )
  }
}