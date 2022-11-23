import { h } from 'vue'
export default {
  $_icon: {
    name: "MicrosoftAzure",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["microsoft","azure"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13.05,4.24L6.56,18.05L2,18L7.09,9.24L13.05,4.24M13.75,5.33L22,19.76H6.74L16.04,18.1L11.17,12.31L13.75,5.33Z"}
        ) 
      ]
    )
  }
}