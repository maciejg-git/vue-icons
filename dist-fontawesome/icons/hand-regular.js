import { h } from 'vue'
export default {
  $_icon: {
    name: "Hand",
    vendor: "Fa",
    license: "CC BY 4.0",
    type: ["Regular"],
    tags: ["hand"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor"},
      [ 
        h(
          "path",
          {"d":"M256 0c-25.3 0-47.2 14.7-57.6 36c-7-2.6-14.5-4-22.4-4c-35.3 0-64 28.7-64 64l0 165.5-2.7-2.7c-25-25-65.5-25-90.5 0s-25 65.5 0 90.5L106.5 437c48 48 113.1 75 181 75l8.5 0 8 0c1.5 0 3-.1 4.5-.4c91.7-6.2 165-79.4 171.1-171.1c.3-1.5 .4-3 .4-4.5l0-176c0-35.3-28.7-64-64-64c-5.5 0-10.9 .7-16 2l0-2c0-35.3-28.7-64-64-64c-7.9 0-15.4 1.4-22.4 4C303.2 14.7 281.3 0 256 0zM240 96.1l0-.1 0-32c0-8.8 7.2-16 16-16s16 7.2 16 16l0 31.9 0 .1 0 136c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136c0 0 0 0 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16l0 55.9c0 0 0 .1 0 .1l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-71.9c0 0 0-.1 0-.1c0-8.8 7.2-16 16-16s16 7.2 16 16l0 172.9c-.1 .6-.1 1.3-.2 1.9c-3.4 69.7-59.3 125.6-129 129c-.6 0-1.3 .1-1.9 .2l-4.9 0-8.5 0c-55.2 0-108.1-21.9-147.1-60.9L52.7 315.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L119 336.4c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2L160 96c0-8.8 7.2-16 16-16c8.8 0 16 7.1 16 15.9L192 232c0 13.3 10.7 24 24 24s24-10.7 24-24l0-135.9z"}
        ) 
      ]
    )
  }
}