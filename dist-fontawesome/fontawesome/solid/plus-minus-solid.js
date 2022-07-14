import { h } from 'vue'
export default {
  $_icon: {
    name: "PlusMinus",
    vendor: "Fa",
    type: "Solid",
    tags: ["plus","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-plus-minus"},
      [ 
        h(
          "path",
          {"d":"M352 448H32c-17.69 0-32 14.31-32 32s14.31 31.1 32 31.1h320c17.69 0 32-14.31 32-31.1S369.7 448 352 448zM48 208H160v111.1c0 17.69 14.31 31.1 32 31.1s32-14.31 32-31.1V208h112c17.69 0 32-14.32 32-32.01s-14.31-31.99-32-31.99H224v-112c0-17.69-14.31-32.01-32-32.01S160 14.33 160 32.01v112H48c-17.69 0-32 14.31-32 31.99S30.31 208 48 208z"}
        ) 
      ]
    )
  }
}