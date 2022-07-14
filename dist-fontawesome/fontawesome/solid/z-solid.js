import { h } from 'vue'
export default {
  $_icon: {
    name: "Z",
    vendor: "Fa",
    type: "Solid",
    tags: ["z"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-z"},
      [ 
        h(
          "path",
          {"d":"M384 448c0 17.67-14.31 32-32 32H32c-12.41 0-23.72-7.188-28.97-18.42c-5.281-11.25-3.562-24.53 4.375-34.06l276.3-331.5H32c-17.69 0-32-14.33-32-32s14.31-32 32-32h320c12.41 0 23.72 7.188 28.97 18.42c5.281 11.25 3.562 24.53-4.375 34.06L100.3 416H352C369.7 416 384 430.3 384 448z"}
        ) 
      ]
    )
  }
}