CustomEase.create("Toyota", "M0,0,C0.4,0,0.2,1,1,1");

var tl = new TimelineMax({defaults: {ease: "Toyota"}});

window.addEventListener("load", function () {
  init();show();
});

///and then preloading yer images, this code 
//being in the JS file being referenced above ....

container = document.getElementById("main-container");

function init() {
  container.style.visibility = "visible";
 // show();
}

function disclaimerActive(){

}

//Adjust values below for each size
//Background image adjustments
var F2txt1Left =0;
var tyre3left = -19;
var tyreleft = -17;
var offerImageLeft= -2;
//End of adjustments

// Shows the ad.
function show() {
  if (tl == null)
    return;

    tl.set("#logocta", {autoAlpha:1,height:0} , 0 )

  tl.addLabel('frame1', '+=0')



  .to([logocta],0.5,{height:60},"frame1+=0.5")

  .to([mainlogo],0.5,{y:25,rotationX:0},"frame1+=0.5")


  .to([img1],0.5,{scale:1},"frame1+=0.5")

  .to([img1],2.5,{scale:1.1},"frame1+=1")


 .to([logo,icon],0.75,{x:0},"frame1+=1")

 .to(icon,0.25,{x:-10,skewX:-20,skewY:20},"frame1+=1.75")
 .to(icon,0.25,{x:0,skewX:0,skewY:0},"frame1+=2")

 .to(cta,0.25,{autoAlpha:1,scale:1.1},"frame1+=2")
 //.to(cta,0.25,{scale:1.1},"frame1+=2.25")
 .to(cta,0.25,{scale:1},"frame1+=2.25")

 .to([img1],0.5,{filter: 'grayscale(50%)'},"frame1+=3")

 .to(".txt",0.5,{autoAlpha:1,stagger:0.2},"frame1+=3")




}


// Exit Hnadlers


