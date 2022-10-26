import batteryLow from './asset/batteryLow.png'
import gradientBackground from "./asset/gradientBackground.png";
import gradientBackgroundReversed from "./asset/gradientBackgroundReversed.png";

let timelineLite_Iphone14_Text = new TimelineLite();
let iphone_14_text_container = document.getElementById(
  "iphone_14_text_container"
);
let controller_Iphone14_Text = new ScrollMagic.Controller();

timelineLite_Iphone14_Text.fromTo(
  iphone_14_text_container,
  5,
  {
    opacity: 1,
  },
  {
    opacity: 0,
  }
);

 new ScrollMagic.Scene({
  triggerElement: iphone_14_text_container,
  duration: 100,
  triggerHook: 0,
})
  .setTween(timelineLite_Iphone14_Text)
  .setPin(iphone_14_text_container)
  .addTo(controller_Iphone14_Text);










let timelineLite_LeftHand_Iphone = new TimelineLite();
let controller_Two_Iphone = new ScrollMagic.Controller();
let twoIphoneContainer = document.getElementById("twoIphoneContainer");
let left_Hand_Iphone = document.getElementById(`left_Hand_Iphone`);
let right_Hand_Iphone = document.getElementById(`right_Hand_Iphone`);
let battery = document.getElementById(`battery`);
let batteryColorFiller = document.getElementById(`batteryColorFiller`);
let Big_Text_Left_Hand_Iphone = document.getElementById(
  "Big_Text_Left_Hand_Iphone"
);
timelineLite_LeftHand_Iphone
  .fromTo(
    left_Hand_Iphone,
    6,
    {
      transform: `translateX(0px)`,
    },
    {
      transform: `translateX(-2000px)`,
    }
)
  .fromTo(
    battery ,
    1,
    {
      position: "absolute",
      left: `40%`,
      top: `150px`,
      width: `50px`,
      opacity: 0,
      transformStyle: `preserve-3d`,
      transform: `perspective(1px)`,
      transformOrigin: `bottom`,
      transform: `perspective(10px) translate3d(42px, -62px, -835px)`,
    },
    {
      width: `400px`,
      opacity: 1,
      top: `300px`,
      transform: `perspective(500px) matrix3d(0.785035, -0.226682, 0.436033, 0, 0, 0.821756, 0.427208, 0, -0.530612, -0.390974, 0.752058, 0, 0, 0, 0, 1) translate3d(100px, 100px, 180px)`,
    },
    0
  )
  .fromTo(
    batteryColorFiller,
    3,
    {
      width: `0%`,
    },
    {
      width: `100%`,
    },
    0
  )
  .fromTo(
    right_Hand_Iphone,
    6,
    {
      transform: `translateX(0px)`,
    },
    {
      transform: `translateX(2000px)`,
    },
    //Assuming the wheel tween is the first tween in the timeline and has a start time of 0, you can
    //tell the second tween to start at a time of 0 as well:
    0
  );
  
 new ScrollMagic.Scene({
   triggerElement: twoIphoneContainer,
   duration: 1000,
   triggerHook: 0,
 })
   .setTween(timelineLite_LeftHand_Iphone)
   .setPin(twoIphoneContainer)
   .addTo(controller_Two_Iphone);



let TextcolorChangingEffect_TimelineLite = new TimelineLite();
let textChangingColorController = new ScrollMagic.Controller()
let textChangingColorContainer = document.getElementById(
  "textChangingColorContainer"
);
let textChangingColor = document.getElementById("textChangingColor");
let text_changing = document.getElementById("text_changing");
TextcolorChangingEffect_TimelineLite.fromTo(
  textChangingColor,
  1000,
  {
    // webkitTextFillColor: "transparent",
    // webkitBackgroundClip: "text",
    top:`50%`,
  },
  {
    // webkitTextFillColor: "transparent",
    // webkitBackgroundClip: "text",
    top:`-100%`
  }
);

new ScrollMagic.Scene({
  triggerHook: 0,
  duration:1000,
  triggerElement: textChangingColorContainer,
})
  .addIndicators()
  .setTween(TextcolorChangingEffect_TimelineLite)
  .setPin(textChangingColorContainer)
  .addTo(textChangingColorController);