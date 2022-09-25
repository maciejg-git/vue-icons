import { h } from 'vue'
export default {
  $_icon: {
    name: "MaskVentilator",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["mask","ventilator"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-mask-ventilator"},
      [ 
        h(
          "path",
          {"d":"M320 32C372.1 32 419.7 73.8 454.5 128H584C614.9 128 640 153.1 640 184V269C640 324.1 602.5 372.1 549.1 385.5L477.5 403.4C454.6 433.8 421.1 457.2 384 469.8V393.2C403.6 376.8 416 353.1 416 326.4C416 276.9 372.5 191.1 320 191.1C267 191.1 224 276.9 224 326.4C224 353 236.3 376.9 256 393.3V469.9C217.6 457.4 184.9 433.8 162.2 403.3L90.9 385.5C37.48 372.1 0 324.1 0 269V184C0 153.1 25.07 128 56 128H185.1C219.8 73.8 267.4 32 320 32V32zM56 176C51.58 176 48 179.6 48 184V269C48 302.1 70.49 330.9 102.5 338.9L134.3 346.8C130.2 332.2 127.1 316.7 127.1 300.8C127.1 264.7 139.4 219.2 159.1 176H56zM480.7 176C500.4 219.2 512 264.7 512 300.8C512 316.8 509.8 332.2 505.6 346.9L537.5 338.9C569.5 330.9 592 302.1 592 269V184C592 179.6 588.4 176 584 176H480.7zM288 320C288 302.3 302.3 288 320 288C337.7 288 352 302.3 352 320V512H288V320z"}
        ) 
      ]
    )
  }
}