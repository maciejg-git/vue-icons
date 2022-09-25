import { h } from 'vue'
export default {
  $_icon: {
    name: "BellSnooze",
    vendor: "H",
    license: "MIT",
    type: ["20","solid"],
    tags: ["bell","snooze"],
  },
  render() {
    return h(
      "svg",
      {"width":"20","height":"20","viewBox":"0 0 20 20","fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","data-name":"h-bell-snooze"},
      [ 
        h(
          "path",
          {"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.99997 8C3.99997 4.68629 6.68626 2 9.99997 2C13.3137 2 16 4.68629 16 8C16 9.88663 16.4537 11.6651 17.2573 13.2343C17.364 13.4426 17.3673 13.6888 17.2663 13.9C17.1652 14.1111 16.9714 14.2629 16.7422 14.3105C15.6746 14.5322 14.5882 14.7023 13.4857 14.818C13.3251 16.602 11.8258 18 10 18C8.17421 18 6.67494 16.602 6.51426 14.818C5.41181 14.7023 4.32537 14.5322 3.25769 14.3105C3.02851 14.2629 2.83469 14.1111 2.73365 13.9C2.6326 13.6888 2.63591 13.4426 2.7426 13.2343C3.54624 11.6651 3.99997 9.88663 3.99997 8ZM9.99997 15C9.34517 15 8.69477 14.9809 8.0493 14.9433C8.25097 15.8345 9.04777 16.5 10 16.5C10.9522 16.5 11.749 15.8345 11.9507 14.9433C11.3052 14.9809 10.6548 15 9.99997 15ZM8.75 6C8.33579 6 8 6.33579 8 6.75C8 7.16421 8.33579 7.5 8.75 7.5H9.79261L8.1397 9.81407C7.97641 10.0427 7.95457 10.3434 8.08312 10.5932C8.21168 10.843 8.46906 11 8.75 11H11.25C11.6642 11 12 10.6642 12 10.25C12 9.83579 11.6642 9.5 11.25 9.5H10.2074L11.8603 7.18593C12.0236 6.95732 12.0454 6.65662 11.9169 6.40681C11.7883 6.15701 11.5309 6 11.25 6H8.75Z","fill":"#0F172A"}
        ) 
      ]
    )
  }
}