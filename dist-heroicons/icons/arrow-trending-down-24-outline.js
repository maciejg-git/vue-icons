import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTrendingDown",
    vendor: "H",
    license: "MIT",
    type: ["24","outline"],
    tags: ["arrow","trending","down"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-arrow-trending-down"},
      [ 
        h(
          "path",
          {"d":"M2.25 6L9 12.75L13.2862 8.46383C15.3217 10.0166 16.8781 12.23 17.5919 14.8941L18.3684 17.7919M18.3684 17.7919L21.5504 12.2806M18.3684 17.7919L12.857 14.6099","stroke":"#0F172A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}
        ) 
      ]
    )
  }
}