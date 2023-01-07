
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
    });
  }
})

