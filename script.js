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
tl.from('#page'),{
    delay:0.2,
    y:1200,
    opacity:0,
    ease:'power4',
}