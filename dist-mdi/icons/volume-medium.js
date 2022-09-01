import { h } from 'vue'
export default {
  $_icon: {
    name: "VolumeMedium",
    vendor: "Mdi",
    type: [],
    tags: ["volume","medium"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-volume-medium"},
      [ 
        h(
          "path",
          {"d":"M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"}
        ) 
      ]
    )
  }
}