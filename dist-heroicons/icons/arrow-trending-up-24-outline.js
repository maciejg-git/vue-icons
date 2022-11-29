import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTrendingUp",
    vendor: "H",
    license: "MIT",
    type: ["24","Outline"],
    tags: ["arrow","trending","up"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M2.25 18.0004L9 11.2504L13.3064 15.5568C14.5101 13.1885 16.5042 11.2027 19.1203 10.038L21.8609 8.81775M21.8609 8.81775L15.9196 6.53711M21.8609 8.81775L19.5802 14.759","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}