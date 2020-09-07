  // function scrollToTargetAdjusted() {
  //   	var element = document.getElementById('subscribe-container');
  //     var headerOffset = 45;
  //   	var elementPosition = element.getBoundingClientRect().top;
  //     var offsetPosition = elementPosition - headerOffset;
      
  //     window.scrollTo({
  //         top: offsetPosition,
  //         behavior: "smooth"
  //     });  
  // }

  // function scrollToTarget() {

  //   var element = document.getElementById('subscribe-container');
  //   element.scrollIntoView({
  //     block: "start",
  //     behavior: "smooth",
  //   });
  // }

  //use window.scrollY
  var scrollpos = window.scrollY;
  var header = document.getElementById("navbar");

  function add_class_on_scroll() {
      header.classList.add("fade-in");
  }

  function remove_class_on_scroll() {
      header.classList.remove("fade-in");
  }

  window.addEventListener('scroll', function(){ 
      //Here you forgot to update the value
      scrollpos = window.scrollY;

      if(scrollpos > 150){
          add_class_on_scroll();
      }
      else {
          remove_class_on_scroll();
      }
      console.log(scrollpos);
  });
