import { h } from 'vue'
export default {
  $_icon: {
    name: "ImageSyncOutline",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["image","sync","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M13.18 19C13.35 19.72 13.64 20.39 14.03 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.11 3 21 3.9 21 5V11.18C20.5 11.07 20 11 19.5 11C19.33 11 19.17 11 19 11.03V5H5V19H13.18M11.21 15.83L9.25 13.47L6.5 17H13.03C13.14 15.54 13.73 14.22 14.64 13.19L13.96 12.29L11.21 15.83M19 13.5V12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5M19 20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20Z"}
        ) 
      ]
    )
  }
}