input.onGesture(Gesture.SixG, function () {
    számláló += 1
    if (számláló >= 4) {
        számláló = 0
        forma = randint(1, 3)
        if (forma == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                # # # # #
                . # # # .
                `)
        } else if (forma == 2) {
            basic.showLeds(`
                # # # . .
                # . . # .
                # . . # .
                # . . # .
                # # # # .
                `)
        } else {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    } else {
        basic.showNumber(számláló)
    }
})
let forma = 0
let számláló = 0
számláló = 0
