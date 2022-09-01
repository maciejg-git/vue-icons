import { h } from 'vue'
export default {
  $_icon: {
    name: "GreaterThanEqual",
    vendor: "Fa",
    type: ["solid"],
    tags: ["greater","than","equal"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-greater-than-equal"},
      [ 
        h(
          "path",
          {"d":"M34.28 331.9c5.016 12.53 17.03 20.12 29.73 20.12c3.953 0 7.969-.7187 11.88-2.281l320-127.1C408 216.9 416 205.1 416 192s-7.969-24.85-20.11-29.72l-320-128c-16.47-6.594-35.05 1.406-41.61 17.84C27.72 68.55 35.7 87.17 52.11 93.73l245.7 98.28L52.11 290.3C35.7 296.9 27.72 315.5 34.28 331.9zM416 416H32c-17.67 0-32 14.31-32 31.99s14.33 32.01 32 32.01h384c17.67 0 32-14.32 32-32.01S433.7 416 416 416z"}
        ) 
      ]
    )
  }
}