import { h } from 'vue'
export default {
  $_icon: {
    name: "FleurDeLis",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["fleur","de","lis"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-fleur-de-lis"},
      [ 
        h(
          "path",
          {"d":"M12 2S9 4 9 7 11 12 11 16H10S10 14 9 12C7 8 3 10 3 13S5 16 5 16C5 13 8.5 13 8.5 16H7V18H10.5L9 20S10 21 11 20L12 22L13 20C14 21 15 20 15 20L13.5 18H17V16H15.5C15.5 13 19 13 19 16C19 16 21 16 21 13S17 8 15 12C14 14 14 16 14 16H13C13 12 15 10 15 7S12 2 12 2Z"}
        ) 
      ]
    )
  }
}