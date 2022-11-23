import { h } from 'vue'
export default {
  $_icon: {
    name: "PrinterAlert",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["printer","alert"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16 3H4V7H16M17 12C16.4 12 16 11.6 16 11S16.4 10 17 10 18 10.4 18 11 17.6 12 17 12M14 19H6V14H14M17 8H3C1.3 8 0 9.3 0 11V17H4V21H16V17H20V11C20 9.3 18.7 8 17 8M24 13H22V7H24V13M24 17H22V15H24V17Z"}
        ) 
      ]
    )
  }
}