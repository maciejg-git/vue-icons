import { h } from 'vue'
export default {
  $_icon: {
    name: "PlaneSlash",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["solid"],
    tags: ["plane","slash"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L440.6 320h73.8c34.2 0 93.7-28 93.7-64c0-35-59.5-64-93.7-64l-116.6 0L297.2 16.1C291.5 6.2 280.9 0 269.4 0H213.2c-10.6 0-18.3 10.2-15.4 20.4l40.3 140.9L38.8 5.1zm2.7 123.6C36 130.6 32 135.9 32 142c0 1.3 .2 2.6 .5 3.9L64 256 32.5 366.1c-.4 1.3-.5 2.6-.5 3.9c0 7.8 6.3 14 14 14H88c5 0 9.8-2.4 12.8-6.4L144 320H246.9l-49 171.6c-2.9 10.2 4.8 20.4 15.4 20.4l56.2 0c11.5 0 22.1-6.2 27.8-16.1l65.3-114.3L41.5 128.7z"}
        ) 
      ]
    )
  }
}