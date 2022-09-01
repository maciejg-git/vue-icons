import { h } from 'vue'
export default {
  $_icon: {
    name: "TruckArrowRight",
    vendor: "Fa",
    type: ["solid"],
    tags: ["truck","arrow","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-truck-arrow-right"},
      [ 
        h(
          "path",
          {"d":"M0 48C0 21.49 21.49 0 48 0H368C394.5 0 416 21.49 416 48V96H466.7C483.7 96 499.1 102.7 512 114.7L589.3 192C601.3 204 608 220.3 608 237.3V352C625.7 352 640 366.3 640 384C640 401.7 625.7 416 608 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H256C256 469 213 512 160 512C106.1 512 64 469 64 416H48C21.49 416 0 394.5 0 368V48zM544 256V237.3L466.7 160H416V256H544zM160 464C186.5 464 208 442.5 208 416C208 389.5 186.5 368 160 368C133.5 368 112 389.5 112 416C112 442.5 133.5 464 160 464zM480 368C453.5 368 432 389.5 432 416C432 442.5 453.5 464 480 464C506.5 464 528 442.5 528 416C528 389.5 506.5 368 480 368zM256.1 95.03C247.6 85.66 232.4 85.66 223 95.03C213.7 104.4 213.7 119.6 223 128.1L262.1 168H96C82.75 168 72 178.7 72 192C72 205.3 82.75 216 96 216H262.1L223 255C213.7 264.4 213.7 279.6 223 288.1C232.4 298.3 247.6 298.3 256.1 288.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175L256.1 95.03z"}
        ) 
      ]
    )
  }
}