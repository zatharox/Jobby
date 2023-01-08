var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });



  let SocialLists = [
    { name: "Blockchain", value:""},
    { name: "Cyber Security", value:"" },
    { name: "Data Science", value:"" },
    { name: "Cloud Computing", value: "" },
    { name: "Front End", value: "" },
    { name: "Back End", value: "" },
    { name: "Data Analytics", value:"" },
    { name: "Full Stack Development", value: "" },
    { name: "Software Engineering", value: "" }
  ];
  
  const searchWrapper = document.querySelector(".search");
  const inputBox = searchWrapper.querySelector("input");
  const suggBox = searchWrapper.querySelector(".autocomp-box");
  
  inputBox.onkeyup = (event) => {
    let userData = event.target.value;
    let emptyArray = [];
    if (userData) {
      emptyArray = SocialLists.filter((data, { name, value }) => {
        return data.name
          .toLocaleLowerCase()
          .startsWith(userData.toLocaleLowerCase());
      });
      emptyArray = emptyArray.map((data, { name, value }) => {
        return (data = `<li>${data.name}: ${data.value}</li>`);
      });
      searchWrapper.classList.add("active");
      showSuggestions(emptyArray);
    } else {
      searchWrapper.classList.remove("active");
    }
  };
  
  function showSuggestions(list) {
    let listData;
    if (list.length) {
      listData = list.join("");
    } else {
      listData = `<li>Not Found</li>`;
    }
    suggBox.innerHTML = listData;
  }
  
  /**Profile section */


  // Ghraps

const sales = document.getElementById("sales");
const earning = document.getElementById("earning");
const products = document.getElementById("products");

Chart.defaults.color = "#927685";
Chart.defaults.borderColor = "#33202c";

new Chart(sales, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
    datasets: [
      {
        label: "My Revenue",
        data: [380, 200, 500, 300, 200, 400, 100],
        backgroundColor: ["rgba(155,128,151,1"],
        hoverBackgroundColor: "#ff90b8",
      },
    ],
  },

  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

new Chart(earning, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "My Revenue",
        data: [380, 200, 500, 300, 200],
        backgroundColor: ["rgba(155,128,151,1"],
        hoverBackgroundColor: "#ff90b8",
      },
    ],
  },

  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

new Chart(products, {
  type: "doughnut",
  data: {
    labels: ["Fashion", "Gadjet", "Other"],
    datasets: [
      {
        label: "My Revenue",
        data: [380, 200, 500],
        backgroundColor: [
          "rgba(155,128,151,1",
          "rgba(254,111,162,1",
          "rgba(244,164,111,1)",
        ],
        hoverBackgroundColor: "#ff90b8",
      },
    ],
  },

  options: {
    responsive: true,
  },
});
