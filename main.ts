input.onPinPressed(TouchPin.P0, function () {
    game.pause()
})
function spellcard_attack () {
    Spell_card += 1
}
input.onButtonPressed(Button.A, function () {
    sub.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sub.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.resume()
})
let bobที่ = 0
let speed = 0
let bombเสค = 0
let Spell_card = 0
let sub: game.LedSprite = null
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showString("start")
basic.pause(200)
let Bomb: game.LedSprite[] = []
for (let index = 0; index <= 4; index++) {
    Bomb.push(game.createSprite(index, 0))
}
sub = game.createSprite(2, 4)
let real = 0
game.setScore(3)
basic.pause(1000)
basic.forever(function () {
    while (game.score() > 0) {
        bombเสค = randint(0, 4)
        speed = randint(100, 300)
        bobที่ = 0
        for (let Currentbomby of Bomb) {
            if (Currentbomby.get(LedSpriteProperty.Y) == 0) {
                if (bombเสค == bobที่) {
                    Currentbomby.change(LedSpriteProperty.Y, 1)
                }
            } else {
                Currentbomby.change(LedSpriteProperty.Y, 1)
            }
            bobที่ += 1
            if (Currentbomby.get(LedSpriteProperty.Y) == 4) {
                if (sub.isTouching(Currentbomby)) {
                    game.addScore(-1)
                    for (let value of Bomb) {
                        value.set(LedSpriteProperty.Y, 0)
                    }
                    basic.pause(500)
                } else {
                    Currentbomby.set(LedSpriteProperty.Y, 0)
                    real += 1
                }
            }
        }
        basic.pause(speed)
    }
    game.setScore(real)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    game.gameOver()
})
