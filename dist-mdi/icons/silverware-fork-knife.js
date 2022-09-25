import { h } from 'vue'
export default {
  $_icon: {
    name: "SilverwareForkKnife",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["silverware","fork","knife"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-silverware-fork-knife"},
      [ 
        h(
          "path",
          {"d":"M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z"}
        ) 
      ]
    )
  }
}