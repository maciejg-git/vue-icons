import { h } from 'vue'
export default {
  $_icon: {
    name: "Sitemap",
    vendor: "Mdi",
    type: [],
    tags: ["sitemap"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-sitemap"},
      [ 
        h(
          "path",
          {"d":"M9,2V8H11V11H5C3.89,11 3,11.89 3,13V16H1V22H7V16H5V13H11V16H9V22H15V16H13V13H19V16H17V22H23V16H21V13C21,11.89 20.11,11 19,11H13V8H15V2H9Z"}
        ) 
      ]
    )
  }
}