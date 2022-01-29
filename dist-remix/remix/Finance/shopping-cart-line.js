import { h } from 'vue'
export default {
  $_icon: {
    name: "ShoppingCartLine",
    vendor: "Rx",
    type: "",
    tags: ["shopping","cart","line"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"v-icon","fill":"currentColor","data-name":"rx-shopping-cart-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'/>    </g>"},
    )
  }
}