import { h } from 'vue'
export default {
  $_icon: {
    name: "ImageLock",
    vendor: "Mdi",
    type: "",
    tags: ["image","lock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-image-lock"},
      [ 
        h(
          "path",
          {"d":"M21.8 16V14.5C21.8 13.1 20.4 12 19 12S16.2 13.1 16.2 14.5V16C15.6 16 15 16.6 15 17.2V20.7C15 21.4 15.6 22 16.2 22H21.7C22.4 22 23 21.4 23 20.8V17.3C23 16.6 22.4 16 21.8 16M20.5 16H17.5V14.5C17.5 13.7 18.2 13.2 19 13.2S20.5 13.7 20.5 14.5V16M5 3C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H13.03C13 20.9 13 20.8 13 20.7V18H5L8.5 13.5L11 16.5L14.5 12L14.77 12.37C15.61 10.89 17.27 10 19 10C19.69 10 20.37 10.16 21 10.42V5C21 3.89 20.1 3 19 3H5Z"}
        ) 
      ]
    )
  }
}