import { h } from 'vue'
export default {
  $_icon: {
    name: "ShieldCross",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["shield","cross"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-shield-cross"},
      [ 
        h(
          "path",
          {"d":"M12,1L3,5V11C3,16.5 6.8,21.7 12,23C17.2,21.7 21,16.5 21,11V5L12,1M16,10H13V18H11V10H8V8H11V5H13V8H16V10Z"}
        ) 
      ]
    )
  }
}