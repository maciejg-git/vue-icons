import { h } from 'vue'
export default {
  $_icon: {
    name: "TrendingDown",
    vendor: "Mdi",
    type: [],
    tags: ["trending","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-trending-down"},
      [ 
        h(
          "path",
          {"d":"M16,18L18.29,15.71L13.41,10.83L9.41,14.83L2,7.41L3.41,6L9.41,12L13.41,8L19.71,14.29L22,12V18H16Z"}
        ) 
      ]
    )
  }
}