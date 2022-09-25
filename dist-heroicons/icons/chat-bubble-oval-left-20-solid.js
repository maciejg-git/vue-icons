import { h } from 'vue'
export default {
  $_icon: {
    name: "ChatBubbleOvalLeft",
    vendor: "H",
    license: "MIT",
    type: ["20","solid"],
    tags: ["chat","bubble","oval","left"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-chat-bubble-oval-left"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 10C2 6.0334 5.69006 3 10 3C14.3099 3 18 6.0334 18 10C18 13.9666 14.3099 17 10 17C9.48658 17 8.98381 16.9577 8.49617 16.8766C7.51177 17.5834 6.3037 18 5 18C4.85237 18 4.70585 17.9947 4.56065 17.9841C4.29888 17.9651 4.06608 17.8107 3.9468 17.5769C3.82753 17.3431 3.83914 17.064 3.97742 16.8409C4.29476 16.329 4.48371 15.7294 4.49899 15.0848C2.97849 13.8253 2 12.0244 2 10Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}