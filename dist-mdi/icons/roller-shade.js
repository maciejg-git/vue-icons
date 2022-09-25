import { h } from 'vue'
export default {
  $_icon: {
    name: "RollerShade",
    vendor: "Mdi",
    license: "Apache 2.0",
    type: [],
    tags: ["roller","shade"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-roller-shade"},
      [ 
        h(
          "path",
          {"d":"M20 19V3H4V19H2V21H22V19H20M6 19V13H11V14.8C10.6 15.1 10.2 15.6 10.2 16.2C10.2 17.2 11 18 12 18S13.8 17.2 13.8 16.2C13.8 15.6 13.5 15.1 13 14.8V13H18V19H6Z"}
        ) 
      ]
    )
  }
}