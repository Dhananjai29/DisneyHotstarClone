gsap.to(".main-division", {
    backgroundColor: '#0F1014',
    scrollTrigger : {
        trigger: '.main-division',
        scroller: 'body',
        // markers: true,
        start: 'top 40%',
        end: 'top -20%',
        scrub: 3
    }
})