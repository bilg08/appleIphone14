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
      transform: `translateX(-400px)`,
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
      transform: `perspective(10px) translate3d(42px, -62px, -235px)`,
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
let bigContainer = document.getElementById('bigContainer');
let textChangingColor = document.getElementById("textChangingColor");
let text_changing = document.getElementById("text_changing");
TextcolorChangingEffect_TimelineLite.from(
  textChangingColor,
  5,
  {
    backgroundPosition:`0% 0%`,
    backgroundImage:`url(./asset/gradientBackground.png)`,

  },
  0
).to(
  textChangingColor,
  3,
  {
    backgroundImage:`url(./asset/gradientBackgroundReversed.png)`,
    backgroundPosition:`0% 80%`
  },
  0
).to(
  textChangingColor,
  0.1,
  {
    backgroundImage:`url(./asset/blackImage.jpeg)`,
    backgroundPosition:`0% 100%`
  }
)

new ScrollMagic.Scene({
  triggerHook: 0,
  duration:5000,
  triggerElement: textChangingColorContainer,
})
  .addIndicators()
  .setTween(TextcolorChangingEffect_TimelineLite)
  .setPin(textChangingColorContainer)
  .addTo(textChangingColorController);
  
  
  
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    
    #header {
      width: 100%;
      height: 50px;
      background-color: black;
    }
    #mainContainer {
      max-width: 1350px;
      margin: auto;
      overflow: hidden;
    }
    #iphone_14_text_container {
      width: 100%;
      height: 60vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #twoIphoneContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: red;
      position: relative;
    }
  </style>
  <body>
    <div id="bigContainer">
      <div id="mainContainer">
        <div id="header"></div>
        <div id="iphone_14_text_container">
          <img src="./asset/iphone14text.png" />
        </div>
        <div id="twoIphoneContainer">
          <div id="battery">
            <div style="width: 150px; height: 50px">
              <div
                style="background: #5bc236; width: 100%; height: 100%;"
                id="batteryColorFiller"></div>
            </div>
            <!-- <img style="width: 100%;" src="./asset/batteryLow.png"/> -->
            <h1>Our longest battery life ever.</h1>
          </div>
          <div
            style="
              position: absolute;
              top: 0;
              left: -100;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            "
            id="left_Hand_Iphone">
            <!-- <h1 id="Big_Text_Left_Hand_Iphone" style="font-weight: bold;color: red">Big</h1> -->
            <img src="./asset/rightHandIphone14.jpg" />
          </div>
          <div
            style="position: absolute; top: 0; right: 0"
            id="right_Hand_Iphone">
            <!-- <h1 style="font-weight: bold;color: red ;transform: skew(-10deg, -15deg);position: absolute;top:30;left:40;opacity: 0;">and bigger</h1> -->
            <img src="./asset/leftHandIphone14.jpg" />
          </div>
        </div>
        <div id="textChangingColorContainer" style="width:100%;height:100vh;background: black;display: flex;justify-content: center;align-items: center;">
            <div id="textChangingColor" style="display: flex;justify-content: center;align-items: center;-webkit-background-clip: text;
            -webkit-text-fill-color: transparent;font-size: 100px;font-weight: bold;">
            <!-- <div style="display: flex;justify-content: center;align-items: center;background: url(./asset/gradientBackgroundReversed.png);width: 100%;height: 100%;
           font-size: 100px;font-weight: bold;"></div> -->
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, quia. Eligendi perspiciatis maxime nobis distinctio? At beatae eveniet, fugiat soluta cupiditate perferendis reiciendis, quis non repellat aut, voluptates iure omnis!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>

  <script type="module" src="./app.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"></script>
  <script
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"></script>
  <script
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
  <script
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>
  <script
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></script>
  <script
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenLite.min.js"></script>
  <script
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineLite.min.js"></script>
  <script
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/plugins/CSSPlugin.min.js"></script>
  <script
    type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/plugins/BezierPlugin.min.js"></script>
</html>

  
