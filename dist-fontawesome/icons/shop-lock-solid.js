import { h } from 'vue'
export default {
  $_icon: {
    name: "ShopLock",
    vendor: "Fa",
    type: ["solid"],
    tags: ["shop","lock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-shop-lock"},
      [ 
        h(
          "path",
          {"d":"M0 155.2C0 147.9 2.153 140.8 6.188 134.7L81.75 21.37C90.65 8.021 105.6 0 121.7 0H518.3C534.4 0 549.3 8.021 558.2 21.37L633.8 134.7C637.8 140.8 640 147.9 640 155.2C640 174.5 625.2 190.3 606.3 191.9C586.1 172.2 558.5 160 528 160C497.5 160 469.8 172.2 449.6 192H36.84C16.5 192 .0003 175.5 .0003 155.2H0zM384 224V464C384 490.5 362.5 512 336 512H112C85.49 512 64 490.5 64 464V224H128V384H320V224H384zM528 192C572.2 192 608 227.8 608 272V320C625.7 320 640 334.3 640 352V480C640 497.7 625.7 512 608 512H448C430.3 512 416 497.7 416 480V352C416 334.3 430.3 320 448 320V272C448 227.8 483.8 192 528 192zM528 240C510.3 240 496 254.3 496 272V320H560V272C560 254.3 545.7 240 528 240z"}
        ) 
      ]
    )
  }
}