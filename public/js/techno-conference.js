let highlightSwiper = new Swiper(".highlightSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 200,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let speakerSwiper = new Swiper(".speakerSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Navbar
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  let navbarWeb = $("#web-nav");
  let navbarWebHeight = navbarWeb.outerHeight(true);
  let navbarMobile = $("#mob-nav");
  let navbarMobileHeight = navbarMobile.outerHeight(true);

  if (prevScrollpos > currentScrollPos) {
    // Scroll UP
    navbarWeb.css("top", 0 + "px");
    navbarMobile.css("top", 0 + "px");
  } else {
    // Scroll DOWN
    navbarWeb.css("top", "-" + navbarWebHeight + "px");
    navbarMobile.css("top", "-" + navbarMobileHeight + "px");
  }
  prevScrollpos = currentScrollPos;
};

$(document).ready(function () {
  // Navbar Mobile
  $("#navToggler").click(() => {
    $("#navMobile").slideToggle("slow");
  });
  $("#xButtonNav").click(() => {
    $("#navMobile").slideToggle("slow");
  });
});

// Speakers
let currentSpeaker = 1;
let speakerProfile = $(".tc-speaker-profile");
let carouselIndicator = $(".tc-carousel-indicator");

function changeSpeakerAnimation(currentSpeaker) {
  setTimeout(() => {
    speakerProfile.addClass("hidden");
    $("#speaker-profile-" + currentSpeaker).removeClass("hidden");
    setTimeout(() => {
      $("#speaker-profile-" + currentSpeaker).removeClass("opacity-0");
      $("#carousel-indicator-" + currentSpeaker).css("opacity", 1);
      setTimeout(() => {
        $(".speaker-btn").removeClass("pointer-events-none");
        carouselIndicator.removeClass("pointer-events-none");
      }, 400);
    }, 50);
  }, 400);
}

function changeSpeaker() {
  speakerProfile.addClass("opacity-0");
  carouselIndicator.css("opacity", 0.5);
  console.log(carouselIndicator);
  $(".speaker-btn").addClass("pointer-events-none");
  carouselIndicator.addClass("pointer-events-none");
  switch (currentSpeaker) {
    case 1:
      changeSpeakerAnimation(currentSpeaker);
      break;
    case 2:
      changeSpeakerAnimation(currentSpeaker);
      break;
    case 3:
      changeSpeakerAnimation(currentSpeaker);
      break;
    case 4:
      changeSpeakerAnimation(currentSpeaker);
      break;
    case 5:
      changeSpeakerAnimation(currentSpeaker);
      break;
    case 6:
      changeSpeakerAnimation(currentSpeaker);
      break;
    case 7:
      changeSpeakerAnimation(currentSpeaker);
      break;
    case 8:
      changeSpeakerAnimation(currentSpeaker);
      break;
  }
}

function changeSpeakerIndicator(indicator) {
  currentSpeaker = indicator;
  changeSpeaker();
}

function nextSpeaker() {
  if (currentSpeaker < 8) {
    currentSpeaker++;
  } else {
    currentSpeaker = 1;
  }
  changeSpeaker();
}

function prevSpeaker() {
  if (currentSpeaker > 1) {
    currentSpeaker--;
  } else {
    currentSpeaker = 8;
  }
  changeSpeaker();
}

// Timeline
let currentTimelineDay = 1;
$(".tc-timeline-tab").click(function () {
  $(".tc-timeline-tab").removeClass("tc-timeline-tab-active");
  $(this).addClass("tc-timeline-tab-active");

  if ($(this).attr("id") === "timeline-tab-day-1") {
    if (currentTimelineDay != 1) {
      currentTimelineDay = 1;
      $(".tc-timeline-tab").addClass("pointer-events-none");
      $(".tc-timeline-content").fadeOut();
      setTimeout(() => {
        $("#timeline-content-day-1").fadeIn();
        $(".tc-timeline-tab").removeClass("pointer-events-none");
      }, 350);
    }
  } else if ($(this).attr("id") === "timeline-tab-day-2") {
    if (currentTimelineDay != 2) {
      currentTimelineDay = 2;
      $(".tc-timeline-tab").addClass("pointer-events-none");
      $(".tc-timeline-content").fadeOut();
      setTimeout(() => {
        $("#timeline-content-day-2").fadeIn();
        $(".tc-timeline-tab").removeClass("pointer-events-none");
      }, 350);
    }
  } else {
    if (currentTimelineDay != 3) {
      currentTimelineDay = 3;
      $(".tc-timeline-tab").addClass("pointer-events-none");
      $(".tc-timeline-content").fadeOut();
      setTimeout(() => {
        $("#timeline-content-day-3").fadeIn();
        $(".tc-timeline-tab").removeClass("pointer-events-none");
      }, 350);
    }
  }
});

// FAQ
function openFaq(faqNumber) {
  // let faqQuestion = $('[data-faq-question="' + faqNumber + '"]');
  let faqAnswer = $('[data-faq-answer="' + faqNumber + '"]');
  let faqArrow = $('[data-faq-arrow="' + faqNumber + '"]');

  if (faqAnswer.is(':visible')) {
    faqAnswer.slideUp();
    // faqQuestion.removeClass("bg-[100%_0]");
    $('.tc-faq-arrow').removeClass("rotate-180");
  } else {
    $('.tc-faq-question').removeClass('bg-[100%_0]');
    $('.tc-faq-answer').slideUp();
    $('.tc-faq-arrow').removeClass("rotate-180");

    faqAnswer.slideDown();
    // faqQuestion.addClass("bg-[100%_0]");
    faqArrow.addClass('rotate-180');
  }
}
openFaq(1);

// Share to Your Friends
$("#share-x-btn").click(function () {
  $("#share-popup").css("top", -8 + "rem");
});

let shareTimeout;
$("#share-btn").click(function () {
  navigator.clipboard.writeText($(this).data("value"));
  $("#share-popup").css("top", 0 + "px");

  // clear existing timeout
  if (shareTimeout) {
    clearTimeout(shareTimeout);
  }

  // set new timeout
  shareTimeout = setTimeout(() => {
    $("#share-x-btn").click();
  }, 3000);
});

let shareLinkTimeout;
function shareLink(socialMedia, element){
  navigator.clipboard.writeText(element.dataset.link);
  $('.tc-share-tooltip').fadeOut();

   if (shareLinkTimeout) {
    clearTimeout(shareLinkTimeout);
  }

  $('#'+ socialMedia + '-tooltip').fadeIn();
  shareLinkTimeout = setTimeout(() => {
    $('#'+ socialMedia + '-tooltip').fadeOut();
  }, 2000);
}

// contact Us
let contactPopup = $("#contact-popup");
function openContactPopup() {
  contactPopup.fadeIn();
}

function closeContactPopup() {
  contactPopup.fadeOut();
}

function submitContactForm(e) {
  e.preventDefault();
  // Validasi nama
  let inputNama = $("#contact-nama");
  let inputNamaValue = inputNama.val();
  let inputNamaValidasi = $("#contact-nama-validasi");
  let isInputNamaValidated = false;
  if (inputNamaValue == "") {
    inputNamaValidasi.show();
    inputNamaValidasi.text("Nama Anda tidak boleh kosong");
    inputNama.removeClass("border-none");
    isInputNamaValidated = false;
  } else {
    inputNamaValidasi.hide();
    inputNamaValidasi.text("");
    inputNama.addClass("border-none");
    isInputNamaValidated = true;
  }

  // Validasi email
  let inputEmail = $("#contact-email");
  let inputEmailValue = inputEmail.val();
  let inputEmailValidasi = $("#contact-email-validasi");
  let isInputEmailValidated = false;
  if (inputEmailValue == "") {
    inputEmailValidasi.show();
    inputEmailValidasi.text("Email Anda tidak boleh kosong");
    inputEmail.removeClass("border-none");
    isInputEmailValidated = false;
  } else if (
    !inputEmailValue.match(
      /^(?=.{1,254})(?=.{1,64}@)(?:(?!@)[\w&'*/=?^`{|}~+-]+(?:\.(?!@)[\w&'*/=?^`{|}~+-]+)*)@((?:(?!-)[a-z0-9-]{1,63}(?<!-)\.)+[a-z]{2,63})$/i
    )
  ) {
    inputEmailValidasi.show();
    inputEmailValidasi.text("Email Anda tidak valid");
    inputEmail.removeClass("border-none");
    isInputEmailValidated = false;
  } else {
    inputEmailValidasi.hide();
    inputEmailValidasi.text("");
    inputEmail.addClass("border-none");
    isInputEmailValidated = true;
  }

  // Validasi pesan
  let inputPesan = $("#contact-pesan");
  let inputPesanValue = inputPesan.val();
  let inputPesanValidasi = $("#contact-pesan-validasi");
  let isInputPesanValidated = false;
  if (inputPesanValue == "") {
    inputPesanValidasi.show();
    inputPesanValidasi.text("Pesan Anda tidak boleh kosong");
    inputPesan.removeClass("border-none");
    isInputPesanValidated = false;
  } else if (!inputPesanValue.match(/^(\S+\s+){2}\S+.*$/)) {
    inputPesanValidasi.show();
    inputPesanValidasi.text("Pesan Anda harus mengandung minimal 3 kata");
    inputPesan.removeClass("border-none");
    isInputPesanValidated = false;
  } else {
    inputPesanValidasi.hide();
    inputPesanValidasi.text("");
    inputPesan.addClass("border-none");
    isInputPesanValidated = true;
  }

  if (isInputNamaValidated && isInputEmailValidated && isInputPesanValidated) {
    $("#contact-form").submit();
  }
}

// media partner
$(document).ready(function () {
  new Splide(".top", {
    type: "loop",
    drag: false,
    perPage: 5,
    arrows: false,
    pagination: false,
    direction: "rtl",
    gap: "1rem",
    autoScroll: {
      speed: 1,
      pauseOnHover: false,
      pauseOnFocus: false,
    },
  }).mount(window.splide.Extensions);

  new Splide(".bot", {
    type: "loop",
    drag: false,
    perPage: 5,
    arrows: false,
    pagination: false,
    direction: "ltr",
    gap: "1rem",
    autoScroll: {
      speed: 1,
      pauseOnHover: false,
      pauseOnFocus: false,
    },
  }).mount(window.splide.Extensions);
});

// Footer
function submitFooterForm(e) {
  e.preventDefault();
  // validasi email
  let inputSubscribeEmail = $("#subscribe-email");
  let inputSubscribeEmailValue = inputSubscribeEmail.val();
  let inputSubscribeEmailValidasi = $("#subscribe-email-validasi");
  let isInputSubscribeEmailValidated = false;
  if (inputSubscribeEmailValue == "") {
    inputSubscribeEmailValidasi.show();
    inputSubscribeEmailValidasi.text("Email Anda tidak boleh kosong");
    isInputSubscribeEmailValidated = false;
  } else if (
    !inputSubscribeEmailValue.match(
      /^(?=.{1,254})(?=.{1,64}@)(?:(?!@)[\w&'*/=?^`{|}~+-]+(?:\.(?!@)[\w&'*/=?^`{|}~+-]+)*)@((?:(?!-)[a-z0-9-]{1,63}(?<!-)\.)+[a-z]{2,63})$/i
    )
  ) {
    inputSubscribeEmailValidasi.show();
    inputSubscribeEmailValidasi.text("Email Anda tidak valid");
    isInputSubscribeEmailValidated = false;
  } else {
    inputSubscribeEmailValidasi.hide();
    inputSubscribeEmailValidasi.text("");
    isInputSubscribeEmailValidated = true;
  }

  if (isInputSubscribeEmailValidated) {
    $("#footer-form").submit();
  }
}
