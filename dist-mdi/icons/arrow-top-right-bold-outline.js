import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTopRightBoldOutline",
    vendor: "Mdi",
    type: [],
    tags: ["arrow","top","right","bold","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-top-right-bold-outline"},
      [ 
        h(
          "path",
          {"d":"M5.64,4.22H19.78V18.36L15.54,14.12L9.88,19.78L4.22,14.12L9.88,8.46L5.64,4.22M17.66,6.34H10.59L12.71,8.46L7.05,14.12L9.88,16.95L15.54,11.29L17.66,13.41V6.34H17.66Z"}
        ) 
      ]
    )
  }
}