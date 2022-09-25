import { h } from 'vue'
export default {
  $_icon: {
    name: "RefreshCircle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["refresh","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-refresh-circle"},
      [ 
        h(
          "path",
          {"d":"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2M18 11H13L14.81 9.19A3.94 3.94 0 0 0 12 8A4 4 0 1 0 15.86 13H17.91A6 6 0 1 1 12 6A5.91 5.91 0 0 1 16.22 7.78L18 6Z"}
        ) 
      ]
    )
  }
}