let chevronFlag = false;

//Header Menu
$(document).ready(function(){
  let iftoggle = false;
  $("#hamburger").click(function(){
      $("#top").toggleClass("topRotate");
      $("#bottom").toggleClass("bottomRotate");
      $("#background").toggleClass("expand");
      $("#dropDown").toggleClass("active");
      if(!iftoggle) {
        $("#toggle-mobile").hide();
        $("#close-mobile").show();
        iftoggle = true;
      } else {
        $("#toggle-mobile").show();
        $("#close-mobile").hide();
        iftoggle = false;
      }

      $("li").show();
      $("li").toggleClass("anim");

  });

  //Tabs logic
  let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      let panel2 = this.nextElementSibling.classList[1];
      if (panel2 == 'panel') {
        if (panel.classList[3] == "active") {
            panel.classList.remove("active");
          } else {
            panel.classList.toggle("active");
          } 
      } else if (panel.style.maxHeight & panel.classList[1] !== "active") {
        panel.classList.remove("active");
      } else {
        panel.classList.toggle("active");
        
      } 
    });
  }


  //Page-choose service to pay
  let serviceItem = document.getElementsByClassName("service-item");

  for (i = 0; i < serviceItem.length; i++) {
    serviceItem[i].addEventListener("click", function() {
      if (document.querySelector('.service-item.active') !== null) {
        document.querySelector('.service-item.active').classList.remove('active');
      }
      this.classList.toggle("active");
      $(".page-before-school .choose-service-type.body").show();
      $(".page-before-school .footer").show();
    });
  }

  //Page-before school logics

  $('.page-before-school #search').on('input',function(e){
    if ($(".page-before-school #search").val().length > 5) {
      $('.page-before-school .choose-service-type.body .btn').prop('disabled', false);
      $('.search-indicator').show();
      $('.page-before-school #search').css({'border': '1px solid #FF8C00'});
      $('.search-result').show();
      if ($(window).width()<768) {
        $('.page-before-school .choose-service-type.body .btn').css({'margin-top': '20px'});
      }
      
    }
   });

  let searchItem = document.getElementsByClassName("search-result-item");

  for (i = 0; i < searchItem.length; i++) {
    searchItem[i].addEventListener("click", function() {
      if (document.querySelector('.search-result-item.active') !== null) {
        document.querySelector('.search-result-item.active').classList.remove('active');
      }
      this.classList.toggle("active");
      $('.page-before-school .footer .btn').prop('disabled', false);
      $('.page-before-school .footer .btn').css({'background-color': '#4AAE26'});
    })
  }


  //Payment.html
  let chooseDocument = document.getElementById("choose-document");

  chooseDocument.addEventListener("click", function() {
    if (!chevronFlag) {
      $('#choose-document img').css('transform', 'rotate(180deg)');
      $('.document-select').show();
      chevronFlag = true;
    } else {
      $('#choose-document img').css('transform', 'rotate(0deg)');
      chevronFlag = false;
      $('.document-select').hide();
    }
  })

  let element = document.getElementById('inn');
  let maskOptions = {
    mask: '000-000-0000000'
  };
  let mask = IMask(element, maskOptions);
  

})

//Payment.html
function documentSelect(select, e) {
  $('#choose-document p').text($(e).text());
  $('.document-select').hide();
  $('#choose-document img').css('transform', 'rotate(0deg)');
  $('.document-info').show();
  chevronFlag = false;
  switch (select) {
    case 1:
      $('.document-info input').show();
      break;
    case 2:

    

    default: break;
  }
}

function closeInfo(){
  $('.notice').hide();
}

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let openCredentailsFlag = 0;
function openCredentails() {
  if (openCredentailsFlag) {
    $('.caret-down').css('transform', 'rotate(0deg)');
    $('.requisites').hide();
    openCredentailsFlag = 0;
  } else {
    $('.caret-down').css('transform', 'rotate(-180deg)');
    $('.requisites').show();
    openCredentailsFlag = 1;
  }
  
}