import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaJCircle",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["alpha","j","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M13,7V15H11V14H9V15A2,2 0 0,0 11,17H13A2,2 0 0,0 15,15V7H13Z"}
        ) 
      ]
    )
  }
}