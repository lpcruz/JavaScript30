window.addEventListener('keydown', function(e) {
    
        function initNeptunesKit(e) {
          const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
          const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
          if(!audio) return; // stops function 
          audio.currentTime = 0; // rewind to the start
          audio.play();
          
          console.log(e)
          // Adds the class of '.playing' to the DOM
          key.classList.add('playing')
        }
    
        function removeTransition(e) {
          if (e.propertyName !== 'transform') return; // skip it if it's not a transform
    
          // this == key
          this.classList.remove('playing');
        }
        
       /**
         * The addEventListener() method attaches an event handler to the specified element
         * You can add event listeners to any DOM object not only HTML elements (i.e. the window object)
         * 
         * @example: element.addEventListener(event, function, useCapture);
         *
         * The first parameter is the type of event (like 'click' or 'mousedown').
         * The second parameter is the function we want to call when the event occurs.
         * The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.
        *
       */
    
        // Listen to transition event 
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transitionend', removeTransition))
    
        window.addEventListener('keydown', initNeptunesKit);
    
    });