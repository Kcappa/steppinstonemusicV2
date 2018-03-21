function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('muteYouTubeVideoPlayer', {
    videoId: 'yW_1BsijIyU', // YouTube Video ID
    width: '60%',               // Player width (in px)
    height: '90%',              // Player height (in px)
    playerVars: {
      autoplay: '1',        // Auto-play the video on load
      controls: '0',        // Show pause/play buttons in player
      showinfo: '1',        // Hide the video title
      modestbranding: '1',  // Hide the Youtube Logo
      loop: '1',            // Run the video in a loop
      playlist: 'yW_1BsijIyU',
      fs: '1',              // Hide the full screen button
      cc_load_policy: '0', // Hide closed captions
      iv_load_policy: '3',  // Hide the Video Annotations
      autohide: '0'         // Hide video controls when playing
    },
    events: {
      onReady: function(e) {
        e.target.mute();
      }
    }
  });
 }
