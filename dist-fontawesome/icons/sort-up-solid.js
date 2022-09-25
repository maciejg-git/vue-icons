import { h } from 'vue'
export default {
  $_icon: {
    name: "SortUp",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["sort","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor","data-name":"fa-sort-up"},
      [ 
        h(
          "path",
          {"d":"M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224z"}
        ) 
      ]
    )
  }
}