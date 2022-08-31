import { h } from 'vue'
export default {
  $_icon: {
    name: "ViewColumns",
    vendor: "H",
    type: ["24","Solid"],
    tags: ["view","columns"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-view-columns"},
      [ 
        h(
          "path",
          {"d":"M15 3.75H9V20.25H15V3.75Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M16.5 20.25H19.875C20.9105 20.25 21.75 19.4105 21.75 18.375V5.625C21.75 4.58947 20.9105 3.75 19.875 3.75H16.5V20.25Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M4.125 3.75H7.5V20.25H4.125C3.08947 20.25 2.25 19.4105 2.25 18.375V5.625C2.25 4.58947 3.08947 3.75 4.125 3.75Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}