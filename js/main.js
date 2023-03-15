let chevronFlag = false;

//Header Menu
$(document).ready(function(){



  //ajax search main

  const data = [
    {
      "name": 'МБОУ "СОШ № 3 ИМ. А.А. ИВАСЕНКО""',
      "logo": "/img/icons/Картинка.svg",
      "inn": "213122312",
     "category_name": "Комунальные услуги",
      "url": "/rir",
    },
    {
      "name": "Квадра ООО",
      "logo": "/img/icons/Картинка.svg",
      "inn": "454543",
      "category_name": "Комунальные услуги",
      "url": "/kvadra"
    },
    {
      "name": "Квадра ООО",
      "logo": "/img/icons/Картинка.svg",
      "inn": "454543",
      "category_name": "Комунальные услуги",
      "url": "/kvadra"
    },
    {
      "name": "Квадра ООО",
      "logo": "/img/icons/Картинка.svg",
      "inn": "454543",
      "category_name": "Комунальные услуги",
      "url": "/kvadra"
    },
    {
      "name": "Квадра ООО",
      "logo": "/img/icons/Картинка.svg",
      "inn": "454543",
      "category_name": "Комунальные услуги",
      "url": "/kvadra"
    },
    {
      "name": "Квадра ООО",
      "logo": "/img/icons/Картинка.svg",
      "inn": "454543",
      "category_name": "Комунальные услуги",
      "url": "/kvadra"
    },
    {
      "name": "Квадра ООО",
      "logo": "/img/icons/Картинка.svg",
      "inn": "454543",
      "category_name": "Комунальные услуги",
      "url": "/kvadra"
    },
    {
      "name": "Квадра ООО",
      "logo": "/img/icons/Картинка.svg",
      "inn": "454543",
      "category_name": "Комунальные услуги",
      "url": "/kvadra"
    },
    {
      "name": "Квадра ООО",
      "logo": "/img/icons/Картинка.svg",
      "inn": "454543",
      "category_name": "Комунальные услуги",
      "url": "/kvadra"
    },
    {
      "name": "Квадра ООО",
      "logo": "/img/icons/Картинка.svg",
      "inn": "454543",
      "category_name": "Комунальные услуги",
      "url": "/kvadra"
    },
    {
      "name": "Квадра ООО",
      "logo": "/img/icons/Картинка.svg",
      "inn": "454543",
      "category_name": "Комунальные услуги",
      "url": "/kvadra"
    }
    ];
  console.log(data)

  let result = $('.search-results');

  $('#search-ajax').on('input',function(e){
    console.log('123123123');
    var search = $(this).val();
		if ((search != '') && (search.length > 1)){
			$.ajax({
				type: "POST",
				url: "/ajax_search.php",
				data: {'search': search},
				success: function(msg){
					result.html(msg);
					if(msg != ''){	
						result.fadeIn();
					} else {
						result.fadeOut(100);
					}
				}
			});
		 } else {
			result.html('<span class="search-msg" style="padding-left:16px;">Ничего не найдено</span>');
			// result.fadeOut(100);
		 }
   });

  let dataRes = '';

  data.forEach(function(e) {
    console.log(e);
    let myres = '<a class="result-item" href="'+e.url+'"> \
    <div class="row"> \
      <div class="col"> \
        <img src="'+e.logo+'" alt="'+e.name+'"> \
      </div> \
      <div class="col"> \
        <p>'+e.name+'</p> \
        <span>ИНН '+e.inn+'</span> \
      </div> \
    </div> \
  </a>';
    dataRes = dataRes + myres;
  });
  result.html(dataRes);

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
  if ($('.page-before-school #search').val()) {
    if ($('.page-before-school #search').val().length > 5) {
      $('.page-before-school .choose-service-type.body .btn').prop('disabled', false);
    }
  }
  

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

  //Page-category
  console.log('1233');
  if ($('.page-category-search #search').val()) {
    if ($('.page-category-search #search').val().length > 5) {
      $('.page-category-search .btn').prop('disabled', false);
    }
  }

  $('.page-category-search #search').on('input',function(e){
    console.log('123');
    console.log($(".page-category-search #search").val());
    if ($(".page-category-search #search").val().length > 5) {
      $('.page-category-search .search .btn').prop('disabled', false);
      if ($(window).width()<768) {
        $('.page-category-search .choose-service-type.body .btn').css({'margin-top': '20px'});
      }
      
    }
   });


  //Payment.html
  let chooseDocument = document.getElementById("choose-document");

  if (chooseDocument) {
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
  }

  let element = document.getElementById('inn');
  let element2 = document.querySelector('.category-search-input');
  let maskOptions = {
    mask: '000-000-0000000'
  };
  if (element) {
    let mask = IMask(element, maskOptions);
  } else if (element2){
    let mask2 = IMask(element2, maskOptions);
  }
  
  

  
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
function openModal(modal) {
  if (modal == 1) {
    document.getElementById("myModal").style.display = "block";
  } else if (modal == 2) {
    document.getElementById("myModalPayment").style.display = "block";
  } else if (modal == 3) {
    document.getElementById("myModalPayment").style.display = "none";
    document.getElementById("myModal").style.display = "block";
  } else {
    document.getElementById("myModal").style.display = "block";
  }
  
}

// Close the Modal
function closeModal(modal) {
  if (modal == 1) {
    document.getElementById("myModal").style.display = "none";
  } else if (modal == 2) {
    document.getElementById("myModalPayment").style.display = "none";
  } else if (modal == 3) {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("myModalPayment").style.display = "block";
  } else {
    document.getElementById("myModal").style.display = "none";
  }
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





//Category search

$(document).on("submit", "#search-form", function (e) {
  $('.btn').toggleClass("btn-loading");
});