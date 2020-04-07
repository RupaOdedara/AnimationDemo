const hero =document.querySelectorAll(".hero");
const logo =document.querySelectorAll("#logo");
const headline =document.querySelectorAll(".headline");
const slider =document.querySelectorAll(".slider");
const hamburger =document.querySelectorAll(".hamburger");
const menu =document.querySelectorAll(".item");

const t1 = new TimelineMax();
t1.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
.fromTo(hero, 1.5, { width: "100%" },{ width:"80%",ease: Power2.easeInOut })
.fromTo(slider, 1.5, {x: "-100%"}, {x:"0%",ease: Power2.easeInOut }, "-=1.2")
.fromTo(logo, 1.5,{ opacity: 0,x: "30%"},{opacity:1,x:"0%",ease: Power2.easeInOut},"-=1.2")
.fromTo(hamburger, 1.5,{ opacity: 0,x: "30%"},{opacity:1,x:"0%",ease: Power2.easeInOut})
.fromTo( headline, 1.5,{ opacity: 0,x: "30%"},{opacity:1,x:"0%",ease: Power2.easeInOut},"-=2.3")
.fromTo(menu, 1.5, {opacity: 0,x: "30%" },{opacity: 1,x: "0%", ease: Power2.easeInOut },"-=1.2");




$(document).ready(function(){

  Barba.Pjax.start();
});

