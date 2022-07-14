import { h } from 'vue'
export default {
  $_icon: {
    name: "AccountAlertOutline",
    vendor: "Mdi",
    type: "",
    tags: ["account","alert","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-account-alert-outline"},
      [ 
        h(
          "path",
          {"d":"M20 12V7H22V13H20M20 17H22V15H20M10 13C12.67 13 18 14.34 18 17V20H2V17C2 14.34 7.33 13 10 13M10 4A4 4 0 0 1 14 8A4 4 0 0 1 10 12A4 4 0 0 1 6 8A4 4 0 0 1 10 4M10 14.9C7.03 14.9 3.9 16.36 3.9 17V18.1H16.1V17C16.1 16.36 12.97 14.9 10 14.9M10 5.9A2.1 2.1 0 0 0 7.9 8A2.1 2.1 0 0 0 10 10.1A2.1 2.1 0 0 0 12.1 8A2.1 2.1 0 0 0 10 5.9Z"}
        ) 
      ]
    )
  }
}