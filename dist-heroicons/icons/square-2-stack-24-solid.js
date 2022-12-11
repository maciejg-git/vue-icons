import { h } from 'vue'
export default {
  $_icon: {
    name: "Square2Stack",
    vendor: "H",
    license: "MIT",
    type: ["24","Solid"],
    tags: ["square","2","stack"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","fill":"currentColor","aria-hidden":"true"},
      [ 
        h(
          "path",
          {"d":"M16.5 6a3 3 0 00-3-3H6a3 3 0 00-3 3v7.5a3 3 0 003 3v-6A4.5 4.5 0 0110.5 6h6z"}
        ),
        h(
          "path",
          {"d":"M18 7.5a3 3 0 013 3V18a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3H18z"}
        ) 
      ]
    )
  }
}