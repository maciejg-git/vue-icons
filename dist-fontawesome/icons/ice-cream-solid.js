import { h } from 'vue'
export default {
  $_icon: {
    name: "IceCream",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["ice","cream"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M335.1 160c.6-5.3 .9-10.6 .9-16C336 64.5 271.5 0 192 0S48 64.5 48 144c0 5.4 .3 10.7 .9 16H48c-26.5 0-48 21.5-48 48s21.5 48 48 48h53.5 181H336c26.5 0 48-21.5 48-48s-21.5-48-48-48h-.9zM64 288L168.8 497.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L320 288H64z"}
        ) 
      ]
    )
  }
}