import { h } from 'vue'
export default {
  $_icon: {
    name: "Manjaro",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["manjaro"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-manjaro"},
      [ 
        h(
          "path",
          {"d":"M2 2V22H7.6V7.6H14.8V2H2M9.2 9.2V22H14.8V9.2H9.2M16.4 2V22H22V2H16.4Z"}
        ) 
      ]
    )
  }
}