import { h } from 'vue'
export default {
  $_icon: {
    name: "E",
    vendor: "Fa",
    type: ["solid"],
    tags: ["e"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor","data-name":"fa-e"},
      [ 
        h(
          "path",
          {"d":"M320 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32v-384C0 46.34 14.33 32.01 32 32.01h256c17.67 0 32 14.33 32 32s-14.33 32-32 32H64v128h160c17.67 0 32 14.32 32 31.99s-14.33 32.01-32 32.01H64v128h224C305.7 416 320 430.3 320 448z"}
        ) 
      ]
    )
  }
}