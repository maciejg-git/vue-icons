import { h } from 'vue'
export default {
  $_icon: {
    name: "AccountSwitchOutline",
    vendor: "Mdi",
    type: "",
    tags: ["account","switch","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-account-switch-outline"},
      [ 
        h(
          "path",
          {"d":"M16 9C22 9 22 13 22 13V15H16V13C16 13 16 11.31 14.85 9.8C14.68 9.57 14.47 9.35 14.25 9.14C14.77 9.06 15.34 9 16 9M8 11C11.5 11 11.94 12.56 12 13H4C4.06 12.56 4.5 11 8 11M8 9C2 9 2 13 2 13V15H14V13C14 13 14 9 8 9M9 17V19H15V17L18 20L15 23V21H9V23L6 20L9 17M8 3C8.55 3 9 3.45 9 4S8.55 5 8 5 7 4.55 7 4 7.45 3 8 3M8 1C6.34 1 5 2.34 5 4S6.34 7 8 7 11 5.66 11 4 9.66 1 8 1M16 1C14.34 1 13 2.34 13 4S14.34 7 16 7 19 5.66 19 4 17.66 1 16 1Z"}
        ) 
      ]
    )
  }
}