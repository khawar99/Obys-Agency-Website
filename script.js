function loader_animation() {
    gsap.from(".line h1",{
        y:100,
        duration:0.6,
        stagger:0.5,
        delay:0.5
    })
    
    let part1 = document.querySelector('.line-1-part-1 h5');
    let i = 0;
    setInterval(() => {
        if (i < 100+1){
            part1.innerHTML = i++;
        }else{
            clearInterval();
        }
    }, 30);
    
    let tl = gsap.timeline();
    tl.to('#loader',{
        opacity:0,
        duration:0.5,
        delay:3.7,
        display:'none'
    })
    tl.from('#page1',{
        delay:0.2,
        y:1200,
        opacity:1,
        duration:1.5,
        ease:'power4',
    })
    tl.from('.hero h1',{
        y:100,
        duration:0.6,
        stagger:0.5,
        delay:0.2,
        
})
}
function cursor() {
    document.addEventListener('mousemove', (e) => {
        gsap.to('#crsr', {
            left: e.clientX,  // Use left for positioning the cursor
            top: e.clientY,   // Use top for positioning the cursor
            duration: 0.1,     // Adjust the duration for the speed of the cursor
            ease: 'power2.out' // Adds smooth easing to the movement
        });
        
    });
    
    Shery.makeMagnet(".nav-part-2 h4" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
}
loader_animation();
cursor();



