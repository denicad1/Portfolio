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
        sizeChange(header,"60","20")
    } else {
        sizeChange(header,"20","60")
    }
    
  }
  function sizeChange(ele,size,size1) {
    ele.classList.remove(`translate-x-${size}`);
    ele.classList.add(`translate-x-${size1}`);
    
  }