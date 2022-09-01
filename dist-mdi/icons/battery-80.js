import { h } from 'vue'
export default {
  $_icon: {
    name: "Battery80",
    vendor: "Mdi",
    type: [],
    tags: ["battery","80"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-battery-80"},
      [ 
        h(
          "path",
          {"d":"M16,9H8V6H16M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z"}
        ) 
      ]
    )
  }
}