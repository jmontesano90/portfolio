function mobileNav() {
  event.preventDefault();  
  let x = document.getElementById('navContent');
    console.log("i have been clicked lad");
    console.log(x);
    if (x.style.display === "inline"){
      x.style.display = "none";
    }
    else{
      console.log("we have changed the display to inline");
      x.style.display = "inline";
    }
  
    if (matchMedia) {
      const mq = window.matchMedia("(min-width: 1080px)");
      mq.addListener(WidthChange);
    }  
  } 


  function WidthChange(mq){
    let x = document.getElementById('navContent');
        if (mq.matches) {
            x.style.display = "inline";
            console.log("i should be working");
        }
}
 