import { h } from 'vue'
export default {
  $_icon: {
    name: "FacebookF",
    vendor: "Fa",
    type: ["brands"],
    tags: ["facebook","f"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor","data-name":"fa-facebook-f"},
      [ 
        h(
          "path",
          {"d":"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}
        ) 
      ]
    )
  }
}