import { h } from 'vue'
export default {
  $_icon: {
    name: "Oci",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["oci"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M2 2V22H22V2M19.12 19.03H4.87V5H19.13V19.03M14.83 10.71H17.69V17.59H14.83M14.83 6.41H17.69V9.27H14.83M6.3 6.41V17.59H13.4V14.72H9.17V9.28H13.4V6.41Z"}
        ) 
      ]
    )
  }
}