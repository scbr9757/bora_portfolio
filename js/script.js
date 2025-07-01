const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close')

const images = document.querySelectorAll('.swiper-slide img, .ballet-image img');

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