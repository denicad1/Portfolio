

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
   console.log(headerImg);
  //  headerImg.classList.toggle("-right-[50%]");
  //  img.classList.toggle("border-emerald-300","border-4");

  }