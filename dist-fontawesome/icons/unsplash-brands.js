import { h } from 'vue'
export default {
  $_icon: {
    name: "Unsplash",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Brands"],
    tags: ["unsplash"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z"}
        ) 
      ]
    )
  }
}