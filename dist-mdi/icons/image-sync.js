import { h } from 'vue'
export default {
  $_icon: {
    name: "ImageSync",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["image","sync"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M8.5 13.5L5 18H13.03C13.11 19.1 13.47 20.12 14.03 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.89 21 5V11.18C20.5 11.07 20 11 19.5 11C17.78 11 16.23 11.67 15.07 12.76L14.5 12L11 16.5L8.5 13.5M19 20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20M19 13.5V12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5Z"}
        ) 
      ]
    )
  }
}