

  //hamburger menu toggle
  function menu() {
    const hamburger = document.getElementById("menu");
    hamburger.classList.toggle("is-active");
    let change=hamburger.classList.contains("is-active");
    headerResize(change);

  }
//changes header/sidebar size, moves image and clears links
  function headerResize(change) {
    const header=document.getElementsByTagName("header")[0];
    console.log(header);
    if (!change) {
      headerWidth(header,"60","20");
      imgResize();
    } else {
      headerWidth(header,"20","60");
      
    }
    
  }
  //change header width
  function headerWidth(ele,size,size1) {
    ele.classList.remove(`w-${size}`);
    ele.classList.add(`w-${size1}`);
    
  }
  //resize img in header. still needs to be worked on. transition not working and overflow hidden removing most of image. 
  //need to remove style from img element.
  function imgResize() {
   const img=document.getElementById("headerImage");
   console.log(img);
   img.classList.add("w-20", "h-20", "overflow-hidden");
   img.classList.remove("-right-[50%]");
  }