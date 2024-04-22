import { h } from 'vue'
export default {
  $_icon: {
    name: "MouseScrollWheel",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["mouse","scroll","wheel"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M11 1.07C7.05 1.56 4 4.92 4 9H11V7.73C10.4 7.39 10 6.74 10 6V4C10 3.26 10.4 2.61 11 2.27V1.07M13 9V7.73C13.6 7.39 14 6.74 14 6V4C14 3.26 13.6 2.61 13 2.27V1.07C16.94 1.56 20 4.92 20 9H13M4 15C4 17.12 4.84 19.16 6.34 20.66C7.84 22.16 9.88 23 12 23C14.12 23 16.16 22.16 17.66 20.66C19.16 19.16 20 17.12 20 15V11H4V15M13 6V4C13 3.45 12.55 3 12 3C11.45 3 11 3.45 11 4V6C11 6.55 11.45 7 12 7C12.55 7 13 6.55 13 6Z"}
        ) 
      ]
    )
  }
}