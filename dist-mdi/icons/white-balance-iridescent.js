import { h } from 'vue'
export default {
  $_icon: {
    name: "WhiteBalanceIridescent",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["white","balance","iridescent"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-white-balance-iridescent"},
      [ 
        h(
          "path",
          {"d":"M4.96,19.95L6.76,18.15L5.34,16.74L3.55,18.53M3.55,4.46L5.34,6.26L6.76,4.84L4.96,3.05M20.45,18.53L18.66,16.74L17.24,18.15L19.04,19.95M13,22.45V19.5H11V22.45C11.32,22.45 13,22.45 13,22.45M19.04,3.05L17.24,4.84L18.66,6.26L20.45,4.46M11,3.5H13V0.55H11M5,14.5H19V8.5H5V14.5Z"}
        ) 
      ]
    )
  }
}