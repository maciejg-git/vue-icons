import { h } from 'vue'
export default {
  $_icon: {
    name: "T",
    vendor: "Fa",
    type: ["solid"],
    tags: ["t"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-t"},
      [ 
        h(
          "path",
          {"d":"M384 64.01c0 17.67-14.33 32-32 32h-128v352c0 17.67-14.33 31.99-32 31.99s-32-14.32-32-31.99v-352H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h320C369.7 32.01 384 46.34 384 64.01z"}
        ) 
      ]
    )
  }
}