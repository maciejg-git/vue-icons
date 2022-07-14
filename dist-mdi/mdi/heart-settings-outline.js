import { h } from 'vue'
export default {
  $_icon: {
    name: "HeartSettingsOutline",
    vendor: "Mdi",
    type: "",
    tags: ["heart","settings","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-heart-settings-outline"},
      [ 
        h(
          "path",
          {"d":"M7 22H9V24H7V22M11 24H13V22H11V24M15 24H17V22H15V24M22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5M20 8.5C20 6.5 18.5 5 16.5 5C14.96 5 13.46 6 12.93 7.36H11.07C10.54 6 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5C4 11.39 7.14 14.24 11.89 18.55L12 18.65L12.1 18.55C16.86 14.24 20 11.39 20 8.5Z"}
        ) 
      ]
    )
  }
}