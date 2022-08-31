import { h } from 'vue'
export default {
  $_icon: {
    name: "ArchiveBox",
    vendor: "H",
    type: ["20","Solid"],
    tags: ["archive","box"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-archive-box"},
      [ 
        h(
          "path",
          {"d":"M2 3C1.44772 3 1 3.44772 1 4V5C1 5.55228 1.44772 6 2 6H18C18.5523 6 19 5.55228 19 5V4C19 3.44772 18.5523 3 18 3H2Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 7.5H18L17.1885 15.2094C17.0813 16.2273 16.223 17 15.1995 17H4.80052C3.77701 17 2.91866 16.2273 2.81151 15.2094L2 7.5ZM7 11C7 10.4477 7.44772 10 8 10H12C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12H8C7.44772 12 7 11.5523 7 11Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}