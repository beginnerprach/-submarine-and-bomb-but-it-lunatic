input.onButtonPressed(Button.A, function () {
    sub.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Bomb.delete()
})
input.onButtonPressed(Button.B, function () {
    sub.change(LedSpriteProperty.X, 1)
})
let sub: game.LedSprite = null
let Bomb: game.LedSprite = []
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showString("start")
basic.pause(200)
Bomb = []
for (let index = 0; index <= 4; index++) {
    Bomb.push(game.createSprite(index, 0))
}
sub = game.createSprite(2, 4)
let speed = 400
let real = 0
game.setScore(3)
basic.pause(1000)
basic.forever(function () {
	
})
