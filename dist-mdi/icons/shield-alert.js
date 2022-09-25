import { h } from 'vue'
export default {
  $_icon: {
    name: "ShieldAlert",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["shield","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-shield-alert"},
      [ 
        h(
          "path",
          {"d":"M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5M11,7H13V13H11M11,15H13V17H11"}
        ) 
      ]
    )
  }
}