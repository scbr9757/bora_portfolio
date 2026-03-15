const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close')

const images = document.querySelectorAll('.swiper-slide img, .ballet-image img, .imweb_area .imweb ul li div > img');

images.forEach(image => {
  image.addEventListener('click', e => {
    e.preventDefault(); //만약 링크가 있다면 기본 동작 막기

    //모달 띄우기
    modal.style.display = 'block';
    modalImg.src = image.src;
    modalImg.alt = image.alt;
  });
});

//닫기 버튼 클릭 시 모달 닫기
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});




// 블로그 섹션
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 1700,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".pagination",
    clickable: true,
  },
});






// 전체 효과
const sections = document.querySelectorAll(
  "#about, .imweb_area, .clone_area, .blog_area, .ballet_area"
);

let lastScrollY = window.scrollY;

const observer = new IntersectionObserver((entries) => {
  const currentScrollY = window.scrollY;
  const isScrollingDown = currentScrollY > lastScrollY;

  entries.forEach((entry) => {
    const section = entry.target;

    if (entry.isIntersecting && isScrollingDown) {
      if (section.id === "about") {
        const aboutTit = section.querySelector(".about_tit");
        const aboutMe = section.querySelector(".me");
        const aboutIcon = section.querySelector(".icon");

        aboutTit?.classList.add("active");

        setTimeout(() => {
          aboutMe?.classList.add("active");
        }, 300);

        setTimeout(() => {
          aboutIcon?.classList.add("active");
        }, 700);
      }

      if (section.classList.contains("imweb_area")) {
        const imwebTit = section.querySelector(".tit");
        const imwebItems = section.querySelectorAll(".imweb");

        imwebTit?.classList.add("active");

        imwebItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("active");
          }, 300 + index * 250);
        });
      }

      if (section.classList.contains("clone_area")) {
        const cloneTit = section.querySelector(".tit");
        const cloneItems = section.querySelectorAll(".clone li");

        cloneTit?.classList.add("active");

        cloneItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("active");
          }, 300 + index * 250);
        });
      }

      if (section.classList.contains("blog_area")) {
        const blogTit = section.querySelector(".tit");
        const blog = section.querySelector(".blog");

        blogTit?.classList.add("active");

        setTimeout(() => {
          blog?.classList.add("active");
        }, 300);
      }

      if (section.classList.contains("ballet_area")) {
        const balletTit = section.querySelector(".tit");
        const ballet = document.querySelector(".ballet-section");

        balletTit?.classList.add("active");

        setTimeout(() => {
          ballet?.classList.add("active");
        }, 300);
      }
    }

    if (!entry.isIntersecting && !isScrollingDown) {
      if (section.id === "about") {
        section.querySelector(".about_tit")?.classList.remove("active");
        section.querySelector(".icon")?.classList.remove("active");
        section.querySelector(".me")?.classList.remove("active");
      }

      if (section.classList.contains("imweb_area")) {
        section.querySelector(".tit")?.classList.remove("active");
        section.querySelectorAll(".imweb").forEach((item) => {
          item.classList.remove("active");
        });
      }

      if (section.classList.contains("clone_area")) {
        section.querySelector(".tit")?.classList.remove("active");
        section.querySelectorAll(".clone li").forEach((item) => {
          item.classList.remove("active");
        });
      }

      if (section.classList.contains("blog_area")) {
        section.querySelector(".tit")?.classList.remove("active");
        section.querySelector(".blog")?.classList.remove("active");
      }

      if (section.classList.contains("ballet_area")) {
        section.querySelector(".tit")?.classList.remove("active");
        document.querySelector(".ballet-section")?.classList.remove("active");
      }
    }
  });

  lastScrollY = currentScrollY;
}, {
  threshold: 0.3
});

sections.forEach((section) => observer.observe(section));