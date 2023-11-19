// JavaScript source code
let homeCount = document.getElementById("home-count")

let hCount = 0

function homeadd1() {
    hCount += 1
    homeCount.textContent = hCount
}
function homeadd2() {
    hCount += 2
    homeCount.textContent = hCount
}
function homeadd3() {
    hCount += 3
    homeCount.textContent = hCount
}

function homesub1() {
    hCount -= 1
    homeCount.textContent = hCount
}
function homesub2() {
    hCount -= 2
    homeCount.textContent = hCount
}
function homesub3() {
    hCount -= 3
    homeCount.textContent = hCount
}

let guestCount = document.getElementById("guest-count")

let gCount = 0

function guestadd1() {
    gCount += 1
    guestCount.textContent = gCount
}
function guestadd2() {
    gCount += 2
    guestCount.textContent = gCount
}
function guestadd3() {
    gCount += 3
    guestCount.textContent = gCount
}
function guestsub1() {
    gCount -= 1
    guestCount.textContent = gCount
}
function guestsub2() {
    gCount -= 2
    guestCount.textContent = gCount
}
function guestsub3() {
    gCount -= 3
    guestCount.textContent = gCount
}
/* reset buttons */
function resetBTN() {
    hCount = 0
    homeCount.textContent = hCount
    gCount = 0
    guestCount.textContent = gCount
    htimeCount.textContent = hfruits[0]
    htCount = 0
    gtimeCount.textContent = gfruits[0]
    gtCount = 0
    hfCount = 0
    hfoulCount.textContent = hfCount
    gfCount = 0
    gfoulCount.textContent = gfCount
}

function hrtimeOut() {
    htCount = 0
    htimeCount.textContent = hfruits[0]
}
function grtimeOut() {
    gtCount = 0
    gtimeCount.textContent = gfruits[0]
}

function hrfoul() {
    hfCount = 0
    hfoulCount.textContent = hfCount
}
function grfoul() {
    gfCount = 0
    gfoulCount.textContent = gfCount
}

/* Home Timeouts */
let htimeCount = document.getElementById("htimeout-count")
const hfruits = ["****", "***", "**", "*"]
let htCount = 0

function htimeOut() {
        htCount += 1
    htimeCount.textContent = hfruits[htCount]
    if (htCount > 3) {
        htimeCount.textContent = "No TimeOuts!"
    }
}
/* Guest Timeouts */
let gtimeCount = document.getElementById("gtimeout-count")
const gfruits = ["****", "***", "**", "*"]
let gtCount = 0

function gtimeOut() {
    gtCount += 1
    gtimeCount.textContent = gfruits[gtCount]
    if (gtCount > 3) {
        gtimeCount.textContent = "No TimeOuts!"
    }
}

/* Home Foul*/
let hfoulCount = document.getElementById("hfoul-count")
let hfCount = 0

function hfoul() {
    hfCount += 1
    hfoulCount.textContent = hfCount
    if (hfCount > 5) {
        hfoulCount.textContent = "BONUS!"
    }

}

/* Guest Foul*/
let gfoulCount = document.getElementById("gfoul-count")
let gfCount = 0

function gfoul() {
    gfCount += 1
    gfoulCount.textContent = gfCount
    if (gfCount > 5) {
        gfoulCount.textContent = "BONUS!"
    }

}