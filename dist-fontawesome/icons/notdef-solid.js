import { h } from 'vue'
export default {
  $_icon: {
    name: "Notdef",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["notdef"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M64 390.3L153.5 256 64 121.7l0 268.6zM102.5 448l179.1 0L192 313.7 102.5 448zm128-192L320 390.3l0-268.6L230.5 256zM281.5 64L102.5 64 192 198.3 281.5 64zM0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 48z"}
        ) 
      ]
    )
  }
}