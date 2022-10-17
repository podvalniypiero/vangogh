gsap .from("nav",{y:-100, delay:1, duration:3, ease: "sin", opacity: 0})
gsap .to (".name",{
    text: "VINCENT VAN GOGH AS THE FATHER OF MODERN ART",
    duration: 2,
    repeat: -1,
    repeatDelay: .8,
    ease: "sin",
    delay:3,
    yoyo: true
})

gsap .from (".contactMe",{x:-2000, delay: 6, duration: 4, ease: "power1"})
gsap .from(".toLeft",{x:2000, delay: 3, duration:5, opacity:0, ease: "power1"})
gsap .from(".toRight",{x:-2000, delay: 3, duration:5, opacity:0, ease: "power1"})

gsap .to(".fame",{
    text: ' "I put my heart and soul into my work, and I have lost my mind in the process." - Vincent Van Gogh ',
    duration: 2,
    repeat: -1,
    repeatDelay: 2,
    ease:"power1.in",
    delay: 5,
    yoyo: true

})

gsap .to(".hell",{
    text: "Between heaven and hell",
    duration: 2,
    repeat: -1,
    repeatDelay: .8,
    ease: "sin",
    delay:5,
    yoyo: true
})
gsap .from(".moveUp",{y:1000, delay:3, duration:3, ease: "sin", opacity: 0})