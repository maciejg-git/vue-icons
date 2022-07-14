import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowsSpin",
    vendor: "Fa",
    type: "Solid",
    tags: ["arrows","spin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-arrows-spin"},
      [ 
        h(
          "path",
          {"d":"M257.1 95.53C245.8 95.53 234.7 96.72 223.1 98.97V33.97C234.8 32.36 245.9 31.53 257.1 31.53C315.3 31.53 368.3 53.72 408.2 90.11L437.6 60.69C447.7 50.61 464.9 57.75 464.9 72V177.4C464.9 186.2 457.7 193.4 448.9 193.4H343.5C329.3 193.4 322.1 176.1 332.2 166.1L362.9 135.4C334.7 110.6 297.7 95.53 257.1 95.53L257.1 95.53zM97.14 255.5C97.14 266.7 98.27 277.5 100.4 288H35.47C33.93 277.4 33.14 266.6 33.14 255.5C33.14 198.2 54.71 145.8 90.18 106.2L60.69 76.69C50.61 66.61 57.74 49.38 71.1 49.38H177.4C186.2 49.38 193.4 56.54 193.4 65.38V170.7C193.4 185 176.1 192.1 166.1 182.1L135.5 151.5C111.6 179.5 97.14 215.8 97.14 255.5V255.5zM182.1 348.2L153.1 377.1C181.1 401.1 217.4 415.5 257.1 415.5C267.7 415.5 278 414.5 288 412.6V477.4C277.9 478.8 267.6 479.5 257.1 479.5C199.8 479.5 147.4 457.1 107.8 422.5L76.69 453.6C66.61 463.7 49.37 456.5 49.37 442.3V336.9C49.37 328.1 56.54 320.9 65.37 320.9H170.7C184.1 320.9 192.1 338.1 182.1 348.2H182.1zM348.2 332.2L377.2 361.2C402.1 333.1 417.1 296.1 417.1 255.5C417.1 244.7 416.1 234.2 414 224H478.9C480.4 234.3 481.1 244.8 481.1 255.5C481.1 313.7 458.9 366.7 422.6 406.6L453.6 437.6C463.7 447.7 456.5 464.9 442.3 464.9H336.9C328.1 464.9 320.9 457.7 320.9 448.9V343.5C320.9 329.3 338.1 322.1 348.2 332.2L348.2 332.2z"}
        ) 
      ]
    )
  }
}