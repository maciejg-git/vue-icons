import { h } from 'vue'
export default {
  $_icon: {
    name: "Cassette",
    vendor: "Mdi",
    type: "",
    tags: ["cassette"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cassette"},
      [ 
        h(
          "path",
          {"d":"M4,5A2,2 0 0,0 2,7V17A2,2 0 0,0 4,19H6L7,17H17L18,19H20A2,2 0 0,0 22,17V7A2,2 0 0,0 20,5H4M6.5,10A1.5,1.5 0 0,1 8,11.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 5,11.5A1.5,1.5 0 0,1 6.5,10M9,10H15V13H9V10M17.5,10A1.5,1.5 0 0,1 19,11.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 16,11.5A1.5,1.5 0 0,1 17.5,10Z"}
        ) 
      ]
    )
  }
}