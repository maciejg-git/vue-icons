import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowDownUpAcrossLine",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["arrow","down","up","across","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-arrow-down-up-across-line"},
      [ 
        h(
          "path",
          {"d":"M41.37 406.6C28.88 394.1 28.88 373.9 41.37 361.4C53.87 348.9 74.13 348.9 86.63 361.4L128 402.7V287.1H32C14.33 287.1 0 273.7 0 255.1C0 238.3 14.33 223.1 32 223.1H384V109.3L342.6 150.6C330.1 163.1 309.9 163.1 297.4 150.6C284.9 138.1 284.9 117.9 297.4 105.4L393.4 9.372C405.9-3.124 426.1-3.124 438.6 9.372L534.6 105.4C547.1 117.9 547.1 138.1 534.6 150.6C522.1 163.1 501.9 163.1 489.4 150.6L448 109.3V223.1H544C561.7 223.1 576 238.3 576 255.1C576 273.7 561.7 287.1 544 287.1H192V402.7L233.4 361.4C245.9 348.9 266.1 348.9 278.6 361.4C291.1 373.9 291.1 394.1 278.6 406.6L182.6 502.6C170.1 515.1 149.9 515.1 137.4 502.6L41.37 406.6zM128 63.1C128 46.33 142.3 31.1 160 31.1C177.7 31.1 192 46.33 192 63.1V191.1H128V63.1zM448 319.1V448C448 465.7 433.7 480 416 480C398.3 480 384 465.7 384 448V319.1H448z"}
        ) 
      ]
    )
  }
}