export const setAnimation = {
    "fade-down": {
        initialY : -100,
        initialX : 0,
        duration: 1
    },
    "fade-Up":{
        initialY : 100,
        initialX : 0,
        duration: 1
    },
    "fade-Left":{
        initialY: 0,
        initialX: -100, 
        duration: 1,
    },
    "fade-Right":{
        initialY: 0,
        initialX: 100, // Change this to 100 for right
        duration: 5,
    }
  }


  class AnimationTheme {
    FadeStartVertical = { opacity: 1, y: 0 }
     FadeDown= { opacity: setAnimation["fade-down"].initialX, y: setAnimation["fade-down"].initialY }
     FadeUp= { opacity: setAnimation["fade-Up"].initialX, y: setAnimation["fade-Up"].initialY }
     FadeHorizon = { x: 0, opacity: 1 }
     FadeLeft= { x: 100, opacity: 0 }
     FadeRight= { x: -100, opacity: 0 }
    
  }

  const AnimationThemeInstance = new AnimationTheme();

  export default AnimationThemeInstance;

  