import { h } from 'vue'
export default {
  $_icon: {
    name: "CellphoneDock",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["cellphone","dock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M16,15H8V5H16M16,1H8C6.89,1 6,1.89 6,3V17A2,2 0 0,0 8,19H16A2,2 0 0,0 18,17V3C18,1.89 17.1,1 16,1M8,23H16V21H8V23Z"}
        ) 
      ]
    )
  }
}