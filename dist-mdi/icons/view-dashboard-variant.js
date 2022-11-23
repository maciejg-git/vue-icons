import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewDashboardVariant",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["view","dashboard","variant"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2,5V19H8V5H2M9,5V10H15V5H9M16,5V14H22V5H16M9,11V19H15V11H9M16,15V19H22V15H16Z"}
        ) 
      ]
    )
  }
}