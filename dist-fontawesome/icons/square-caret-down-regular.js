import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareCaretDown",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["regular"],
    tags: ["square","caret","down"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-square-caret-down"},
      [ 
        h(
          "path",
          {"d":"M320 192H128C118.5 192 109.8 197.7 105.1 206.4C102.2 215.1 103.9 225.3 110.4 232.3l96 104C210.9 341.2 217.3 344 224 344s13.09-2.812 17.62-7.719l96-104c6.469-7 8.188-17.19 4.375-25.91C338.2 197.7 329.5 192 320 192zM384 32H64C28.65 32 0 60.66 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.66 419.3 32 384 32zM400 416c0 8.82-7.178 16-16 16H64c-8.822 0-16-7.18-16-16V96c0-8.82 7.178-16 16-16h320c8.822 0 16 7.18 16 16V416z"}
        ) 
      ]
    )
  }
}