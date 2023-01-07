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
  