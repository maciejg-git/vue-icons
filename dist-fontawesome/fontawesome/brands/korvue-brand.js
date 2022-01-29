import { h } from 'vue'
export default {
  $_icon: {
    name: "Korvue",
    vendor: "Fa",
    type: "Brand",
    tags: ["korvue"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 446 512","class":"v-icon","fill":"currentColor","data-name":"fa-korvue","innerHTML":"<path d='M386.5 34h-327C26.8 34 0 60.8 0 93.5v327.1C0 453.2 26.8 480 59.5 480h327.1c33 0 59.5-26.8 59.5-59.5v-327C446 60.8 419.2 34 386.5 34zM87.1 120.8h96v116l61.8-116h110.9l-81.2 132H87.1v-132zm161.8 272.1l-65.7-113.6v113.6h-96V262.1h191.5l88.6 130.8H248.9z'/>"},
    )
  }
}