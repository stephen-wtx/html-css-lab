// Wait until the whole HTML document is fully loaded and parsed
document.addEventListener("DOMContentLoaded", function () {
  
  // Create a new instance of the Typed.js library,
  // targeting the element with the class ".auto-typing"
  new Typed(".auto-typing", {
    
    // Array of strings to type out
    strings: ["your world of cinema!"],
    
    // Speed at which each character is typed (in milliseconds)
    typeSpeed: 80,
    
    // Speed at which text is deleted (backspaced)
    backSpeed: 280,
    
    // Should the typing effect loop forever?
    // false = type once and stop
    loop: false
  });

});
