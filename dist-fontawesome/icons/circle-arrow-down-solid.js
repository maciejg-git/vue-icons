import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleArrowDown",
    vendor: "Fa",
    type: ["solid"],
    tags: ["circle","arrow","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-circle-arrow-down"},
      [ 
        h(
          "path",
          {"d":"M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM382.6 302.6l-103.1 103.1C270.7 414.6 260.9 416 256 416c-4.881 0-14.65-1.391-22.65-9.398L129.4 302.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 306.8V128c0-17.69 14.33-32 32-32s32 14.31 32 32v178.8l49.38-49.38c12.5-12.5 32.75-12.5 45.25 0S395.1 290.1 382.6 302.6z"}
        ) 
      ]
    )
  }
}