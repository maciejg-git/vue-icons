import { h } from 'vue'
export default {
  $_icon: {
    name: "StarBox",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["star","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-star-box"},
      [ 
        h(
          "path",
          {"d":"M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M15.58,17L14.63,12.92L17.79,10.19L13.62,9.83L12,6L10.38,9.84L6.21,10.2L9.37,12.93L8.42,17L12,14.84L15.58,17Z"}
        ) 
      ]
    )
  }
}