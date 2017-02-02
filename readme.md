These demos follow Wes Bos's [JavaScript30](http://www.javascript30.com) challenges that use Javascript (with ES6 features) without any libraries, frameworks, or external scripts of any kind. Below are what I found interesting as well any modifications I made to the final result.

1. **Drum Kit**  
    _Highlights_: HTML5 Audio, CSS transition event listeners  
    _Tweaks_: Instead of connecting the key to audio by keycode, bind the two by sound type. If the key were to ever change, it would be at one spot.  

2. **JS+CSS Clock**  
    _Highlights_: CSS transitions  
    _Tweaks_: Clock styling, abstracting degree functions, detect/disable transition during 59->0 

3. **CSS Variables**  
    _Highlights_: Getting/setting CSS variables with values, HTML5 inputs (range, color), element.dataset, scoping variables to elements

4. **ARRAY Cardio**  
    _Highlights_: Array filter(), map(), sort(), reduce(), console.table(), querySelector works on any DOM element (not just document), destructed array assignments
    
5. **FLEX Panels**  
    _Highlights_: Nested Flexbox items, transition effects

6. **AJAX Typeahead**  
    _Highlights_: fetch API, promises

7. **Array Cardio Day 2**  
    **Highlights**: Array methods: .some(), .find(), .findIndex()

8. **HTML5 Canvas**  
    _Highlights_: destructuring arrays, global composite operation (like Photoshop blend modes)

9. **Dev Tools Tricks**  
    _Highlights_: break on node modifications, styling console output, console.assert, console.group()/groupEnd()/groupCollapsed(), console.count(), console.time()/timeEnd()

10. **Multiple Checkbox Selection**  
    _Highlights_: selecting range of elements using shift key

11. **HTML5 Video Player**  
    _Highlights_: video event listeners  
    _Tweaks_: Added fullscreen capability

12. **Key Code Detection**  
    _Highlights_: Detecting a key sequence  
    _Tweaks_: Added more rainbows and detect Konami code (with arrow keys) instead of just single characters
