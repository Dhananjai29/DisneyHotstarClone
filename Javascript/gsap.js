gsap.to(".main-division", {
    backgroundColor: '#0F1014',
    scrollTrigger : {
        trigger: '.main-division',
        scroller: 'body',
        // markers: true,
        start: 'top 0%',
        end: 'top -50%',
        scrub: 3
    }
})

