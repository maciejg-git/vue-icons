import { h } from 'vue'
export default {
  $_icon: {
    name: "PlusCircleMultiple",
    vendor: "Mdi",
    type: [],
    tags: ["plus","circle","multiple"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-plus-circle-multiple"},
      [ 
        h(
          "path",
          {"d":"M2 12C2 9.2 3.6 6.8 6 5.7V3.5C2.5 4.8 0 8.1 0 12S2.5 19.2 6 20.5V18.3C3.6 17.2 2 14.8 2 12M15 3C10 3 6 7 6 12S10 21 15 21 24 17 24 12 20 3 15 3M20 13H16V17H14V13H10V11H14V7H16V11H20V13Z"}
        ) 
      ]
    )
  }
}