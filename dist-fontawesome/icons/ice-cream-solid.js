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
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M367.1 160c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16l-.9 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l53.5 0 181 0 53.5 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-.9 0zM96 288L200.8 497.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L352 288 96 288z"}
        ) 
      ]
    )
  }
}