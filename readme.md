These demos follow Wes Bos's [JavaScript30](http://www.javascript30.com) challenges that use Javascript (with ES6 features) without any libraries, frameworks, or external scripts of any kind. Below I'll log what I found interesting as well the modifications I made to the final result.

1. **DRUM KIT**  
    **Uses**: HTML5 Audio, CSS transition event listeners  
    **Modifications**: Instead of connecting the key to audio by keycode, I bind the two by sound type. So if the key were to ever change, it would be at one spot.
