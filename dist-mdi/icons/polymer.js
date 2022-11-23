import { h } from 'vue'
export default {
  $_icon: {
    name: "Polymer",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["polymer"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M19,4H15L7.1,16.63L4.5,12L9,4H5L0.5,12L5,20H9L16.89,7.37L19.5,12L15,20H19L23.5,12L19,4Z"}
        ) 
      ]
    )
  }
}