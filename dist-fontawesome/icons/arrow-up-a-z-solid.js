import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowUpAZ",
    vendor: "Fa",
    type: ["solid"],
    tags: ["arrow","up","a","z"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-arrow-up-a-z"},
      [ 
        h(
          "path",
          {"d":"M151.6 41.95c-12.12-13.26-35.06-13.26-47.19 0l-87.1 96.09C4.473 151.1 5.348 171.4 18.38 183.3c13.02 11.95 33.27 11.04 45.22-1.973L96 145.9v302C96 465.7 110.3 480 128 480S160 465.7 160 447.1V145.9L192.4 181.3c11.46 12.49 31.67 14.39 45.22 1.973c13.03-11.95 13.9-32.22 1.969-45.27L151.6 41.95zM448 416h-50.75l73.38-73.38c9.156-9.156 11.89-22.91 6.938-34.88s-16.63-19.86-29.56-19.86H319.1C302.3 287.9 288 302.3 288 320s14.33 32 32 32h50.75l-73.38 73.38c-9.156 9.156-11.89 22.91-6.938 34.88S307.1 480 319.1 480h127.1C465.7 480 480 465.7 480 448S465.7 416 448 416zM492.6 209.3l-79.99-160.1c-10.84-21.81-46.4-21.81-57.24 0L275.4 209.3c-7.906 15.91-1.5 35.24 14.31 43.19c15.87 7.922 35.04 1.477 42.93-14.4l7.154-14.39h88.43l7.154 14.39c6.174 12.43 23.97 23.87 42.93 14.4C494.1 244.6 500.5 225.2 492.6 209.3zM367.8 167.4L384 134.7l16.22 32.63H367.8z"}
        ) 
      ]
    )
  }
}