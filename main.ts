basic.forever(function () {
    for (let I = 0; I <= 4; I++) {
        for (let j = 0; j <= I; j++) {
            led.plot(4 - I, j)
            led.plot(4 - j, I)
        }
        basic.pause(200)
    }
    basic.clearScreen()
})
