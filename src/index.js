const mail= ("./modules/mail");

  //hamburger menu toggle
  function menu() {
    const hamburger = document.getElementById("menu");
    hamburger.classList.toggle("is-active");
    let change=hamburger.classList.contains("is-active");
    headerResize(change);
    navListToggle();

  }
//changes header/sidebar size, moves image and clears links
  function headerResize(change) {
    const header=document.getElementsByTagName("header")[0];
    if (!change) {
      headerWidth(header,"60","20");
      console.log("changed");

      
    } else {
      headerWidth(header,"20","60");
      imgResize();
      
    }
    
  }
  //change header width
  function headerWidth(ele,size,size1) {
    ele.classList.remove(`w-${size}`);
    ele.classList.add(`w-${size1}`); 
    
  }
  //resize headerImg in header. still needs to be worked on. transition not working and overflow hidden removing most of image. 
  //need to remove style from headerImg element.
  function imgResize() {
   const headerImg=document.getElementById("headerImage");
    const img=document.getElementById("image");

  }
  function navListToggle(){
    const navList=document.getElementById("nav_list");
    navList.classList.toggle("flex");

  }
  function handleSubmit(e){
    e.preventDefault();
    mail.mail();
  }

  //this function might be useful later
  // function showText() {
  //   const texts=document.getElementsByClassName("added-text");
  //   const arrayTexts=[...texts];
    
  //   arrayTexts.forEach(ele => {
  //     ele.classList.toggle("hideText"); 
  //     ele.classList.toggle("showText");
  //   });
  // }