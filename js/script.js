const sr = ScrollReveal({
})

// MAIN 1
sr.reveal('.deco_main1', {
    duration: 1000,
    origin: 'left',
    distance: '200px'
})
sr.reveal('.main1 .txt h1', {
    delay: 500,
    duration: 1500,
    scale: 1,
    opcacity: 1,
    origin: 'bottom',
    distance: '100px',
});
sr.reveal('.main1 img', {
    duration: 2200,
    delay: 1500
})
sr.reveal('.main1 .txt p', {
    delay: 1200,
})
sr.reveal('.left_deco_main2', {
    delay: 1000,
    duration: 2000,
    origin: 'left',
    distance: '200px'
})
sr.reveal('.right_deco_main2', {
    delay: 1000,
    duration: 2000,
    origin: 'right',
    distance: '300px'
})

// MAIN 2
sr.reveal('.main2 img', {
    duration: 2000,
    origin: 'right',
    distance: '200px'
})
sr.reveal('.main2 .txt', {
    duration: 2200,
    origin: 'left',
    distance: '100px'
})

// MAIN 4
sr.reveal('.main4 .card1', {
    duration: 1000,
    origin: 'right',
    distance: '100px'
})
sr.reveal('.main4 .card2', {
    delay: 200,
    duration: 1000,
    origin: 'right',
    distance: '100px'
})
sr.reveal('.main4 .card3', {
    delay: 400,
    duration: 1000,
    origin: 'right',
    distance: '100px'
})
sr.reveal('.main4 .card4', {
    delay: 600,
    duration: 1000,
    origin: 'right',
    distance: '100px'
})
sr.reveal('.main4 .card5', {
    delay: 800,
    duration: 1000,
    origin: 'right',
    distance: '100px'
})
sr.reveal('.main4 .card6', {
    delay: 1000,
    duration: 1000,
    origin: 'right',
    distance: '100px'
})

// MAIN 5
sr.reveal('.main5 img', {
    scale: .2,
    duration: 3000
})
sr.reveal('.main5 .right_part', {
    scale: 1,
    duration: 3000,
    origin: 'right',
    distance: '800px'
})