import { h } from 'vue'
export default {
  $_icon: {
    name: "Cube",
    vendor: "H",
    license: "MIT",
    type: ["24","Solid"],
    tags: ["cube"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M12.3779 1.60217C12.1444 1.46594 11.8556 1.46594 11.6221 1.60217L3 6.63172L12 11.8817L21 6.63172L12.3779 1.60217Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M21.75 7.93078L12.75 13.1808V22.1808L21.3779 17.1478C21.6083 17.0134 21.75 16.7668 21.75 16.5V7.93078Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M11.25 22.1808V13.1808L2.25 7.93078V16.5C2.25 16.7668 2.39168 17.0134 2.6221 17.1478L11.25 22.1808Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}