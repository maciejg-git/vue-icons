import { h } from 'vue'
export default {
  $_icon: {
    name: "UserPlus",
    vendor: "H",
    license: "MIT",
    type: ["20","Solid"],
    tags: ["user","plus"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg"},
      [ 
        h(
          "path",
          {"d":"M11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M2.61528 16.428C2.21798 16.1736 1.98785 15.721 2.04605 15.2529C2.41416 12.292 4.93944 10 7.9999 10C11.0604 10 13.5856 12.2914 13.9537 15.2522C14.012 15.7203 13.7818 16.1729 13.3845 16.4273C11.8302 17.4225 9.98243 18 7.9999 18C6.01737 18 4.16959 17.4231 2.61528 16.428Z","fill":"#0F172A"}
        ),
        h(
          "path",
          {"d":"M16.25 5.75C16.25 5.33579 15.9142 5 15.5 5C15.0858 5 14.75 5.33579 14.75 5.75V7.75H12.75C12.3358 7.75 12 8.08579 12 8.5C12 8.91421 12.3358 9.25 12.75 9.25H14.75V11.25C14.75 11.6642 15.0858 12 15.5 12C15.9142 12 16.25 11.6642 16.25 11.25V9.25H18.25C18.6642 9.25 19 8.91421 19 8.5C19 8.08579 18.6642 7.75 18.25 7.75H16.25V5.75Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}