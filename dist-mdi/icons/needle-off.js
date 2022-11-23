import { h } from 'vue'
export default {
  $_icon: {
    name: "NeedleOff",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["needle","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M22.1 21.5L2.4 1.7L1.1 3L8 9.9L4.1 13.8L6.2 15.9L3.1 19V21.8L7.6 17.3L9.7 19.4L13.6 15.5L20.8 22.7L22.1 21.5M11.2 15.2L9.8 16.6L7 13.8L9.5 11.3L10.9 12.7L9.8 13.8L11.2 15.2M11.9 8.7L10.5 7.3L14 3.9L16.1 6L17.5 4.6L16.1 3.2L17.5 1.8L21.8 6L20.4 7.4L18.9 6L17.5 7.4L19.6 9.5L16.2 13L13.4 10.2L14 9.5L15.4 10.9L16.8 9.5L14 6.7L11.9 8.7Z"}
        ) 
      ]
    )
  }
}