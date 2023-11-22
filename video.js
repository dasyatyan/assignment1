    // Get the video element:
    const video = document.getElementById("myVideo");
    
    // Initialize a variable to track the current playback speed
    let currentSpeed = 1;
    
    // Function to toggle between normal and slow motion
    function togglePlaySpeed() { 
      if (currentSpeed === 1) {
        // Change to slow motion (0.3x speed)
        video.playbackRate = 0.3;
        currentSpeed = 0.3;
      } else {
        // Change to normal speed (1x speed)
        video.playbackRate = 1;
        currentSpeed = 1;
      }
    } 
    
    // Alert some text when the playing speed of the video is changed
    function myFunction() { 
      document.getElementById("demo").innerHTML = "The playing speed of the video was changed.";
    }

    
