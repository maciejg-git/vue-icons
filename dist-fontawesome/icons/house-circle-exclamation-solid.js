import { h } from 'vue'
export default {
  $_icon: {
    name: "HouseCircleExclamation",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["house","circle","exclamation"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M320.7 351.7C329 262.1 404.3 192 496 192c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V480c0 17.7 14.3 32 32 32H192c17.7 0 32-14.3 32-32V383.7c0-17.7 14.3-32 32-32h64l.7 0zM496 512c79.5 0 144-64.5 144-144s-64.5-144-144-144s-144 64.5-144 144s64.5 144 144 144zm0-48c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm0-192c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V288c0-8.8 7.2-16 16-16z"}
        ) 
      ]
    )
  }
}