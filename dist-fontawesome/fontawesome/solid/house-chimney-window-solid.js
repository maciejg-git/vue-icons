import { h } from 'vue'
export default {
  $_icon: {
    name: "HouseChimneyWindow",
    vendor: "Fa",
    type: "Solid",
    tags: ["house","chimney","window"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-house-chimney-window"},
      [ 
        h(
          "path",
          {"d":"M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5zM248 192C234.7 192 224 202.7 224 216V296C224 309.3 234.7 320 248 320H328C341.3 320 352 309.3 352 296V216C352 202.7 341.3 192 328 192H248z"}
        ) 
      ]
    )
  }
}