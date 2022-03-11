// User Profile Info
var app = new Vue({
  el: "#profile",
  data: {
    userInfo: {
      name: "First",
      surName: "Lastname",
      email: "firstlastname@bonline.com",
      proPic: "profile.jpg",
    },
  },
});

// All view of Billing Information
var app = new Vue({
  el: "#billingView",
  data: {
    userData: null,
    userInfo: null,
    billingHistory: [
      {
        id: 1,
        date: "10 Feb 2022",
        type: "Invoice",
        amount: "8.00",
        balance: "45.00",
        reference: "8993UDEJ",
        download: "www.exampple.com/download",
      },
      {
        id: 1,
        date: "10 Feb 2022",
        type: "Invoice",
        amount: "8.00",
        balance: "45.00",
        reference: "8993UDEJ",
        download: "www.exampple.com/download",
      },
      {
        id: 1,
        date: "10 Feb 2022",
        type: "Invoice",
        amount: "8.00",
        balance: "45.00",
        reference: "8993UDEJ",
        download: "www.exampple.com/download",
      },
      {
        id: 1,
        date: "10 Feb 2022",
        type: "Invoice",
        amount: "8.00",
        balance: "45.00",
        reference: "8993UDEJ",
        download: "www.exampple.com/download",
      },
    ],
  },
  mounted() {
    // 
    axios
      .get("../assets/js/data.json")
      .then(
        (response) => (
          (this.userData = response.data), (this.userInfo = response.data[0])
        )
      )
      .catch(function (error) {
        console.log("something went wrong");
      });
  },
  methods: {
    getUser: function (data) {
      this.userInfo = data;
    },
    next: function () {
      // 
    },
    prev: function () {
      // 
    },
  },
});
