import { h } from 'vue'
export default {
  $_icon: {
    name: "ChatBubbleLeft",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["chat","bubble","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","d":"M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.202 41.202 0 01-5.183.501.78.78 0 00-.528.224l-3.579 3.58A.75.75 0 016 17.25v-3.443a41.033 41.033 0 01-2.57-.33C1.993 13.244 1 11.986 1 10.573V5.426c0-1.413.993-2.67 2.43-2.902z","clip-rule":"evenodd"}
        ) 
      ]
    )
  }
}