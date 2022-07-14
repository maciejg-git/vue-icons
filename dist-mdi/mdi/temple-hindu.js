import { h } from 'vue'
export default {
  $_icon: {
    name: "TempleHindu",
    vendor: "Mdi",
    type: "",
    tags: ["temple","hindu"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-temple-hindu"},
      [ 
        h(
          "path",
          {"d":"M6.6 11H17.4L16.5 8H7.5L6.6 11M20 11V13H4V11H2V22H10V17H14V22H22V11H20M15.9 6L15 3V1H13V3H11V1H9V3.1L8.1 6H15.9Z"}
        ) 
      ]
    )
  }
}