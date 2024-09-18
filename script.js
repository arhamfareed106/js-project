var rect = document.querySelector('#center');

// Click event listener
rect.addEventListener('click', function(details) {
    var rectangalLocation = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectangalLocation.left;

    // If click is on the left half
    if (insiderectval < rectangalLocation.width / 2) {
        var redcolor = gsap.utils.mapRange(0, rectangalLocation.width / 2, 255, 0, insiderectval);

        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4.easeOut,  // Correct easing function
        });
    } 
    // If click is on the right half
    else {
        var greencolor = gsap.utils.mapRange(
            rectangalLocation.width / 2,
            rectangalLocation.width, 
            0,
            255,
            insiderectval
        );

        gsap.to(rect, {
            backgroundColor: `rgb(0, ${greencolor}, 0)`,
            ease: Power4.easeOut,  // Correct easing function
        });
    }
});

// Mousemove event listener to dynamically change background color
rect.addEventListener('mousemove', function(details) {
    var rectangalLocation = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectangalLocation.left;
    var centerWidth = rectangalLocation.width * 0.2; // 20% of the width

    // Check if mouse is within the central region
    if (insiderectval >= (rectangalLocation.width / 2 - centerWidth / 2) &&
        insiderectval <= (rectangalLocation.width / 2 + centerWidth / 2)) {
        // Mouse is in the center region
        gsap.to(rect, {
            backgroundColor: "white",
            ease: Power4.easeOut,
            overwrite: true
        });
    } else if (insiderectval < rectangalLocation.width / 2) {
        // Mouse is in the left half
        var redcolor = gsap.utils.mapRange(0, rectangalLocation.width / 2, 255, 0, insiderectval);
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4.easeOut,
            overwrite: true
        });
    } else {
        // Mouse is in the right half
        var greencolor = gsap.utils.mapRange(rectangalLocation.width / 2, rectangalLocation.width, 0, 255, insiderectval);
        gsap.to(rect, {
            backgroundColor: `rgb(0, ${greencolor}, 0)`,
            ease: Power4.easeOut,
            overwrite: true
        });
    }
});

// Mouseleave event listener to reset background color
rect.addEventListener("mouseleave", function() {
    gsap.to(rect, {
        backgroundColor: "white",
        ease: Power4.easeOut
    });
});
