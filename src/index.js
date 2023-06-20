
const handleSubmit = e => {
  
  e.preventDefault();
  const form = document.getElementById("form");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  /* SmtpJS.com - v3.0.0 */
  const Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
  Email.send({
    SecureToken: "5ba60687-ede8-4faa-911c-08085ea8168c",
    To: 'denicad@msn.com',
    From: "denicad@msn.com",
    Subject: "Email from Portfolio Site",
    Body: `<h1>${name} sent you a message</h1><h2>their email is ${email}</h2><p>${message}</p>`
  }).catch(console.log())
  form.reset();
}

const handlePDF = () => window.open("../resources/resume/A.Denicolo_Resume.pdf", '_blank');

const scrollToSection = ele => {
  ele.scrollIntoView({ behavior: "smooth" })
}
const scrollProjects = () => {
  const projects = document.getElementById("projects");
  scrollToSection(projects);
}
const scrollContact = () => {
  const contact = document.getElementById("form");
  scrollToSection(contact);
}

const animate = () => {
  class ele {
    constructor(id, style,distance) {
      this.id = id;
      this.style = style;
      this.distance=distance;
    }
  }

  window.addEventListener('scroll', (e) => {
    const eles = [new ele('form', 'animate__fadeInUp',700)
    ,new ele('projectsTitle', 'animate__slideInLeft',600)];

    eles.forEach((ele)=>{
      //get section of page
      const section = document.getElementById(ele.id);
      //get px distance from top
      const topDistance = section.getBoundingClientRect().top;
      console.log(ele.id ,topDistance);
      //if the distance to the top is between 0-ele.distance
      if (topDistance < ele.distance) {
        section.classList.remove('invisible');
        section.classList.add('animate__animated', ele.style);
  
      };
    });
    
    
    
    
  });
};




// eles.forEach((ele) => {
//   animate(ele.id, ele.style);
// })
animate('form', 'animate__fadeInUp');
animate('projectsTitle', 'animate__slideInLeft');
