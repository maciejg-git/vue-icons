import { h } from 'vue'
export default {
  $_icon: {
    name: "Latitude",
    vendor: "Mdi",
    type: "",
    tags: ["latitude"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-latitude"},
      [ 
        h(
          "path",
          {"d":"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 4C15 4 17.5 5.6 18.9 8H5.1C6.5 5.6 9 4 12 4M12 20C9 20 6.5 18.4 5.1 16H18.9C17.5 18.4 15 20 12 20M4.3 14C4.1 13.4 4 12.7 4 12S4.1 10.6 4.3 10H19.8C20 10.6 20.1 11.3 20.1 12S20 13.4 19.8 14H4.3Z"}
        ) 
      ]
    )
  }
}