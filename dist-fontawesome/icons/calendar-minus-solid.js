import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarMinus",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["calendar","minus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M160 0c17.7 0 32 14.3 32 32V64H320V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H32V112c0-26.5 21.5-48 48-48h48V32c0-17.7 14.3-32 32-32zM32 192H480V464c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V192zM344 376c13.3 0 24-10.7 24-24s-10.7-24-24-24H168c-13.3 0-24 10.7-24 24s10.7 24 24 24H344z"}
        ) 
      ]
    )
  }
}