import { h } from 'vue'
export default {
  $_icon: {
    name: "DomainPlus",
    vendor: "Mdi",
    type: "",
    tags: ["domain","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-domain-plus"},
      [ 
        h(
          "path",
          {"d":"M12 7V3H2V21H13.35A5.8 5.8 0 0 1 13 19H12V17H13.35A5 5 0 0 1 14 15.69V15H12V13H14V11H12V9H20V13.09A5.58 5.58 0 0 1 22 13.81V7M6 19H4V17H6M6 15H4V13H6M6 11H4V9H6M6 7H4V5H6M10 19H8V17H10M10 15H8V13H10M10 11H8V9H10M10 7H8V5H10M16 13H18V11H16M16 11V13H18V11M16 11V13H18V11M20 15V18H23V20H20V23H18V20H15V18H18V15Z"}
        ) 
      ]
    )
  }
}