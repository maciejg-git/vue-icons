import { h } from 'vue'
export default {
  $_icon: {
    name: "WandMagic",
    vendor: "Fa",
    type: ["solid"],
    tags: ["wand","magic"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-wand-magic"},
      [ 
        h(
          "path",
          {"d":"M14.06 463.3C-4.686 444.6-4.686 414.2 14.06 395.4L395.4 14.06C414.2-4.686 444.6-4.686 463.3 14.06L497.9 48.64C516.6 67.38 516.6 97.78 497.9 116.5L116.5 497.9C97.78 516.6 67.38 516.6 48.64 497.9L14.06 463.3zM347.6 187.6L452.6 82.58L429.4 59.31L324.3 164.3L347.6 187.6z"}
        ) 
      ]
    )
  }
}