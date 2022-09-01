import { h } from 'vue'
export default {
  $_icon: {
    name: "Play",
    vendor: "H",
    type: ["24","solid"],
    tags: ["play"],
  },
  render() {
    return h(
      "svg",
      {"width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-play"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.5 5.65306C4.5 4.22693 6.029 3.32288 7.2786 4.01016L18.8192 10.3575C20.1144 11.0698 20.1144 12.9309 18.8192 13.6433L7.2786 19.9906C6.029 20.6779 4.5 19.7738 4.5 18.3477V5.65306Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}