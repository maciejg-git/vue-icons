import { h } from 'vue'
export default {
  $_icon: {
    name: "HouseCircleCheck",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["house","circle","check"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M320.7 351.7C329 262.1 404.3 192 496 192c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V480c0 17.7 14.3 32 32 32H192c17.7 0 32-14.3 32-32V383.7c0-17.7 14.3-32 32-32h64l.7 0zM640 368c0-79.5-64.5-144-144-144s-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"}
        ) 
      ]
    )
  }
}