import { h } from 'vue'
export default {
  $_icon: {
    name: "Brightness6",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["brightness","6"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-brightness-6"},
      [ 
        h(
          "path",
          {"d":"M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"}
        ) 
      ]
    )
  }
}