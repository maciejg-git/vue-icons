import { h } from 'vue'
export default {
  $_icon: {
    name: "PersonBooth",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Solid"],
    tags: ["person","booth"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V192h64V32zm320 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM224 512c17.7 0 32-14.3 32-32V320H192V480c0 17.7 14.3 32 32 32zM320 0c-9.3 0-18.1 4-24.2 11s-8.8 16.3-7.5 25.5l31.2 218.6L288.6 409.7c-3.5 17.3 7.8 34.2 25.1 37.7s34.2-7.8 37.7-25.1l.7-3.6c1.3 16.4 15.1 29.4 31.9 29.4c17.7 0 32-14.3 32-32c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM112 80c0-26.5-21.5-48-48-48S16 53.5 16 80s21.5 48 48 48s48-21.5 48-48zm0 261.3V269.3l4.7 4.7c9 9 21.2 14.1 33.9 14.1H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H157.3l-41.6-41.6c-14.3-14.3-33.8-22.4-54-22.4C27.6 160 0 187.6 0 221.6v55.7l0 .9V480c0 17.7 14.3 32 32 32s32-14.3 32-32V384l32 42.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V421.3c0-10.4-3.4-20.5-9.6-28.8L112 341.3z"}
        ) 
      ]
    )
  }
}