namespace SpriteKind {
    export const crewmate2 = SpriteKind.create()
    export const crewmateUser = SpriteKind.create()
    export const follow = SpriteKind.create()
    export const impostorfollow = SpriteKind.create()
    export const reddinaFollow = SpriteKind.create()
    export const crewmate_enemy3 = SpriteKind.create()
    export const three_title = SpriteKind.create()
    export const two_title = SpriteKind.create()
    export const crewmate_enemyyyy3 = SpriteKind.create()
    export const bullet = SpriteKind.create()
    export const impostorfollow2 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    impostor,
    [img`
        . . . f f f f f f f f f f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . f f 2 2 f f f f f f 2 2 f f . 
        . f 2 2 f f 1 1 1 1 f f 2 2 f . 
        . f 2 2 f 1 1 1 1 1 1 f 2 2 f . 
        . f 2 2 f f 1 1 1 1 f f 2 2 f . 
        . f 2 2 2 f f f f f f 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 f f 2 2 2 2 2 f . 
        . f 2 2 2 2 f f f f 2 2 2 2 f . 
        . f f 2 2 f f . . f f 2 2 f f . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . f f f f f f f f f 
        f 1 1 5 f 5 5 5 5 f 
        f 2 2 2 f 2 2 3 2 f 
        . f f f f f f f f f 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, impostor, 300, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    impostor,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f f 2 2 2 2 2 f f . . . 
        . . . f f f 2 2 2 2 2 2 f f f . 
        . . f f 1 f 2 2 2 2 2 2 2 2 f . 
        . . f 1 1 f 2 2 2 2 2 2 2 2 f . 
        . . f 1 1 f 2 2 2 2 2 2 2 2 f . 
        . . f f f f 2 2 2 2 2 2 2 2 f . 
        . . . f 2 2 2 2 2 2 2 2 2 2 f . 
        . . . f 2 2 2 2 2 2 2 2 2 2 f . 
        . . . f 2 2 2 2 2 2 2 2 2 2 f . 
        . . . f 2 2 2 2 2 2 2 2 f f f . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . f f 2 2 2 2 2 2 f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.crewmate_enemyyyy3, SpriteKind.Player, function (sprite, otherSprite) {
    game.showLongText("yellow hugs you and starts to cry.", DialogLayout.Bottom)
    game.showLongText("he apologizes and and you feel sorry too.", DialogLayout.Bottom)
    game.showLongText("you both walk out of the house in tears, with the rest of the crew at the other side of the door.", DialogLayout.Bottom)
    game.showLongText("you see everyone holding up a gun to you.", DialogLayout.Bottom)
    game.showLongText("\"goodbye.\"", DialogLayout.Bottom)
    music.bigCrash.playUntilDone()
    game.over(false, effects.smiles)
})
scene.onOverlapTile(SpriteKind.reddinaFollow, sprites.dungeon.chestOpen, function (sprite, location) {
    bullet = sprites.create(img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        f f f f f f f f f . 
        f 5 5 5 5 f 5 1 1 f 
        f 2 3 2 2 f 2 2 2 f 
        f f f f f f f f f . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, SpriteKind.bullet)
    bullet = sprites.create(img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . f f f f f f f f f 
        f 1 1 5 f 5 5 5 5 f 
        f 2 2 2 f 2 2 2 2 f 
        . f f f f f f f f f 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `, SpriteKind.bullet)
    crewmate333333333333333 = sprites.create(img`
        . . . f f f f f f f f f f . . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . f f 5 5 f f f f f f 5 5 f f . 
        . f 5 5 f f 1 1 1 1 f f 5 5 f . 
        . f 5 5 f 1 1 1 1 1 1 f 5 5 f . 
        . f 5 5 f f 1 1 1 1 f f 5 5 f . 
        . f 5 5 5 f f f f f f 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
        . f 5 5 5 5 f f f f 5 5 5 5 f . 
        . f f 5 5 f f . . f f 5 5 f f . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.crewmate_enemyyyy3)
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnTile(crewmate333333333333333, tiles.getTileLocation(1, 9))
    game.showLongText("you now find yourself in the basement.", DialogLayout.Bottom)
    game.showLongText("reddina and yellow are standing from across the room.", DialogLayout.Bottom)
    game.showLongText("\"reddina, listen i totally understand everything thats been going on...\"", DialogLayout.Bottom)
    game.showLongText("\"i just wanna tell you that i love you and i forgive you for what youve done\"", DialogLayout.Bottom)
    game.showLongText("reddina starts to tear up and runs towards you, falling into your arms.", DialogLayout.Bottom)
    game.showLongText("you open your eyes and smirk at yellow.", DialogLayout.Bottom)
    game.showLongText("\"REDDINA NO-\"", DialogLayout.Bottom)
    game.showLongText("its too late,", DialogLayout.Bottom)
    game.showLongText("youve pulled out your knife and stabbed her in the back.", DialogLayout.Bottom)
    game.showLongText("ripping it out of the body, her heart comes along with it.", DialogLayout.Bottom)
    game.showLongText("you throw the knife to the floor, and leave reddina to die in the basement.", DialogLayout.Bottom)
    game.showLongText("\"why... why would you do this\",", DialogLayout.Bottom)
    game.showLongText("yellow starts to cry and quickly looks up at you, removing his eyes off of reddina.", DialogLayout.Bottom)
    game.showLongText("\"IM GONNA KILL YOU!\"", DialogLayout.Bottom)
    game.showLongText("yellow quickly pulls out his gun and aims for your head.", DialogLayout.Bottom)
    tiles.placeOnRandomTile(reddina_lmao, sprites.dungeon.purpleSwitchUp)
    tiles.placeOnRandomTile(userCrewmate, sprites.dungeon.purpleOuterEast2)
    tiles.placeOnRandomTile(impostor, sprites.dungeon.doorClosedNorth)
    tiles.placeOnRandomTile(impostorfollow2, sprites.dungeon.purpleSwitchUp)
    crewmate333333333333333 = sprites.create(img`
        . . . f f f f f f f f f f . . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . f f 5 5 f f f f f f 5 5 f f . 
        . f 5 5 f f 1 1 1 1 f f 5 5 f . 
        . f 5 5 f 1 1 1 1 1 1 f 5 5 f . 
        . f 5 5 f f 1 1 1 1 f f 5 5 f . 
        . f 5 5 5 f f f f f f 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
        . f 5 5 5 5 f f f f 5 5 5 5 f . 
        . f f 5 5 f f . . f f 5 5 f f . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.crewmate_enemyyyy3)
    crewmate333333333333333.setKind(SpriteKind.crewmate_enemyyyy3)
    impostor.setStayInScreen(true)
    scene.cameraFollowSprite(impostor)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.setDialogTextColor(15)
    game.showLongText("you outrun the crewmate and jump off of a cliff", DialogLayout.Bottom)
    game.showLongText("at the bottom you find your loving wife waiting for you...", DialogLayout.Bottom)
    game.showLongText("the wife was so worried and didnt notice you dropping down and you overhear her converstaion with the other impostor.", DialogLayout.Bottom)
    game.showLongText("\"i feel so sorry for red, he doesnt know im having a secret affair with the yellow crewmate.\"", DialogLayout.Bottom)
    game.showLongText("you immediately get angry and tap her shoulder. ", DialogLayout.Bottom)
    game.showLongText("You slowly raise your knife above her head...", DialogLayout.Bottom)
    tiles.setTilemap(tilemap`level4`)
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(crewmate2, sprites.swamp.swampTile9)
    tiles.placeOnRandomTile(impostor, sprites.swamp.swampTile19)
    game.showLongText("you chase your wife into your own house as yellow follows behind.", DialogLayout.Bottom)
    game.showLongText("\"HONEY IM SORRY, HE JUST KISSES BETTER\"", DialogLayout.Bottom)
    game.showLongText("", DialogLayout.Bottom)
    game.showLongText("...", DialogLayout.Bottom)
    userCrewmate = sprites.create(img`
        . . . f f f f f f f f f f . . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . f f 5 5 f f f f f f 5 5 f f . 
        . f 5 5 f f 1 1 1 1 f f 5 5 f . 
        . f 5 5 f 1 1 1 1 1 1 f 5 5 f . 
        . f 5 5 f f 1 1 1 1 f f 5 5 f . 
        . f 5 5 5 f f f f f f 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
        . f 5 5 5 5 f f f f 5 5 5 5 f . 
        . f f 5 5 f f . . f f 5 5 f f . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.crewmateUser)
    reddina_lmao = sprites.create(img`
        . . . f f f f f f f f f f . . . 
        . . f f 3 3 3 3 3 3 3 3 f f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f f 3 3 f f f f f f 3 3 f f . 
        . f 3 3 f f 1 1 1 1 f f 3 3 f . 
        . f 3 3 f 1 1 1 1 1 1 f 3 3 f . 
        . f 3 3 f f 1 1 1 1 f f 3 3 f . 
        . f 3 3 3 f f f f f f 3 3 3 f . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
        . f 3 3 3 3 3 f f 3 3 3 3 3 f . 
        . f 3 3 3 3 f f f f 3 3 3 3 f . 
        . f f 3 3 f f . . f f 3 3 f f . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.reddinaFollow)
    impostorfollow2 = sprites.create(img`
        . . . f f f f f f f f f f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . f f 2 2 f f f f f f 2 2 f f . 
        . f 2 2 f f 1 1 1 1 f f 2 2 f . 
        . f 2 2 f 1 1 1 1 1 1 f 2 2 f . 
        . f 2 2 f f 1 1 1 1 f f 2 2 f . 
        . f 2 2 2 f f f f f f 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 f f 2 2 2 2 2 f . 
        . f 2 2 2 2 f f f f 2 2 2 2 f . 
        . f f 2 2 f f . . f f 2 2 f f . 
        . . f f f f . . . . f f f f . . 
        `, SpriteKind.impostorfollow2)
    tiles.placeOnRandomTile(userCrewmate, sprites.builtin.oceanDepths0)
    tiles.placeOnRandomTile(reddina_lmao, sprites.builtin.oceanDepths0)
    tiles.placeOnRandomTile(impostorfollow, sprites.dungeon.greenSwitchDown)
    impostorfollow.follow(userCrewmate, 60)
    scene.cameraFollowSprite(userCrewmate)
    controller.moveSprite(userCrewmate, 100, 100)
    reddina_lmao.follow(userCrewmate, 90)
    tiles.placeOnRandomTile(impostorfollow2, sprites.dungeon.darkGroundCenter)
    impostorfollow2.follow(userCrewmate, 65)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    impostor,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f f 2 2 2 2 2 f f . . . . 
        . . . f 2 2 2 2 2 2 f f f . . . 
        . f f f 2 2 2 2 2 2 f 1 f f . . 
        . f 2 2 2 2 2 2 2 2 f 1 1 f . . 
        . f 2 2 2 2 2 2 2 2 f 1 1 f . . 
        . f 2 2 2 2 2 2 2 2 f f f f . . 
        . f 2 2 2 2 2 2 2 2 2 2 f . . . 
        . f 2 2 2 2 2 2 2 2 2 2 f . . . 
        . f 2 2 2 2 2 2 2 2 2 2 f . . . 
        . f f f 2 2 2 2 2 2 2 2 f . . . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . f f 2 2 2 2 2 2 f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.crewmate2, function (sprite, otherSprite) {
    game.setDialogTextColor(15)
    game.showLongText("the yellow crewmate catches up to you and starts to talk,", DialogLayout.Bottom)
    game.showLongText("\"look man, I just wanted to tell you your wife is waiting and very worried about you.\"", DialogLayout.Bottom)
    game.showLongText("he starts to reason with you and walks you back to your worried wife.", DialogLayout.Bottom)
    game.showLongText("SIKE YOU THOUGHT HE TAKES YOUR KNIFE AND STABS YOU IN THE BACK HAHAHAHAHA", DialogLayout.Bottom)
    game.over(false, effects.melt)
    music.wawawawaa.playUntilDone()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    impostor,
    [img`
        . . . f f f f f f f f f f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f 2 2 2 2 2 2 2 2 2 2 f . . 
        . f f 2 2 2 2 2 2 2 2 2 2 f f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 f f f f f f f f 2 2 f . 
        . f 2 2 f 1 1 1 1 1 1 f 2 2 f . 
        . f 2 2 f f 1 1 1 1 f f 2 2 f . 
        . f 2 2 2 f f f f f f 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
        . f 2 2 2 2 2 f f 2 2 2 2 2 f . 
        . f 2 2 2 2 f f f f 2 2 2 2 f . 
        . f f 2 2 f f . . f f 2 2 f f . 
        . . f f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.crewmateUser, SpriteKind.impostorfollow, function (sprite, otherSprite) {
    game.showLongText("red catches up with you and pulls out his knife.", DialogLayout.Bottom)
    game.showLongText("\"this is what you get for cheating on me...\"", DialogLayout.Bottom)
    game.showLongText("red drives the knife into reddina's head and drags it down her body,", DialogLayout.Bottom)
    game.showLongText("splitting her into two.", DialogLayout.Bottom)
    reddina_lmao.destroy(effects.disintegrate, 500)
    game.showLongText("...", DialogLayout.Bottom)
    game.showLongText("\"and you...\"", DialogLayout.Bottom)
    game.over(false, effects.melt)
    music.wawawawaa.playUntilDone()
})
sprites.onOverlap(SpriteKind.crewmate_enemyyyy3, SpriteKind.bullet, function (sprite, otherSprite) {
    crewmate333333333333333.destroy(effects.disintegrate, 500)
    music.bigCrash.playUntilDone()
    game.showLongText("you finally did it...", DialogLayout.Bottom)
    game.showLongText("but at what cost?", DialogLayout.Bottom)
    game.showLongText("youve lost everything now.", DialogLayout.Bottom)
    game.showLongText("if you go back to the crew, theyll know somethings up.", DialogLayout.Bottom)
    game.showLongText("you start crying rapidly and run out of the basement, to the inside of the house, and out the door.", DialogLayout.Bottom)
    game.showLongText("you quickly decide to tie a noose and hang yourself on the nearest tree,", DialogLayout.Bottom)
    game.showLongText("not believing what youve just done.", DialogLayout.Bottom)
    game.over(false, effects.hearts)
    music.wawawawaa.playUntilDone()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.setDialogTextColor(15)
    game.showLongText("the yellow crewmate catches up to you and starts to talk,", DialogLayout.Bottom)
    game.showLongText("\"look man, I just wanted to tell you your wife is waiting and very worried about you.\"", DialogLayout.Bottom)
    game.showLongText("he starts to reason with you and walks you back to your worried wife.", DialogLayout.Bottom)
    game.showLongText("SIKE YOU THOUGHT HE TAKES YOUR KNIFE AND STABS YOU IN THE BACK HAHAHAHAHA", DialogLayout.Bottom)
    game.over(false, effects.melt)
    music.wawawawaa.playUntilDone()
})
let impostorfollow2: Sprite = null
let userCrewmate: Sprite = null
let reddina_lmao: Sprite = null
let crewmate333333333333333: Sprite = null
let bullet: Sprite = null
let crewmate2: Sprite = null
let impostorfollow: Sprite = null
let impostor: Sprite = null
game.splash("its smelly", "like funky")
music.powerUp.playUntilDone()
impostor = sprites.create(img`
    . . . f f f f f f f f f f . . . 
    . . f f 2 2 2 2 2 2 2 2 f f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . f f 2 2 f f f f f f 2 2 f f . 
    . f 2 2 f f 1 1 1 1 f f 2 2 f . 
    . f 2 2 f 1 1 1 1 1 1 f 2 2 f . 
    . f 2 2 f f 1 1 1 1 f f 2 2 f . 
    . f 2 2 2 f f f f f f 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 f f 2 2 2 2 2 f . 
    . f 2 2 2 2 f f f f 2 2 2 2 f . 
    . f f 2 2 f f . . f f 2 2 f f . 
    . . f f f f . . . . f f f f . . 
    `, SpriteKind.Player)
impostorfollow = sprites.create(img`
    . . . f f f f f f f f f f . . . 
    . . f f 2 2 2 2 2 2 2 2 f f . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . f f 2 2 f f f f f f 2 2 f f . 
    . f 2 2 f f 1 1 1 1 f f 2 2 f . 
    . f 2 2 f 1 1 1 1 1 1 f 2 2 f . 
    . f 2 2 f f 1 1 1 1 f f 2 2 f . 
    . f 2 2 2 f f f f f f 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 f f 2 2 2 2 2 f . 
    . f 2 2 2 2 f f f f 2 2 2 2 f . 
    . f f 2 2 f f . . f f 2 2 f f . 
    . . f f f f . . . . f f f f . . 
    `, SpriteKind.impostorfollow)
let crewmate = sprites.create(img`
    . . . f f f f f f f f f f . . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f 5 5 5 5 5 5 5 5 5 5 f . . 
    . f f 5 5 f f f f f f 5 5 f f . 
    . f 5 5 f f 1 1 1 1 f f 5 5 f . 
    . f 5 5 f 1 1 1 1 1 1 f 5 5 f . 
    . f 5 5 f f 1 1 1 1 f f 5 5 f . 
    . f 5 5 5 f f f f f f 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
    . f 5 5 5 5 f f f f 5 5 5 5 f . 
    . f f 5 5 f f . . f f 5 5 f f . 
    . . f f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
crewmate2 = sprites.create(img`
    . . . f f f f f f f f f f . . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f 5 5 5 5 5 5 5 5 5 5 f . . 
    . f f 5 5 f f f f f f 5 5 f f . 
    . f 5 5 f f 1 1 1 1 f f 5 5 f . 
    . f 5 5 f 1 1 1 1 1 1 f 5 5 f . 
    . f 5 5 f f 1 1 1 1 f f 5 5 f . 
    . f 5 5 5 f f f f f f 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 f f 5 5 5 5 5 f . 
    . f 5 5 5 5 f f f f 5 5 5 5 f . 
    . f f 5 5 f f . . f f 5 5 f f . 
    . . f f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.crewmate2)
controller.player1.moveSprite(impostor, 100, 100)
impostor.say("filler", 2000)
impostor.say("ngl red is pretty sus", 2000)
scene.setBackgroundColor(15)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(impostor, sprites.dungeon.collectibleInsignia)
tiles.placeOnRandomTile(crewmate, sprites.dungeon.collectibleRedCrystal)
tiles.placeOnRandomTile(crewmate2, sprites.castle.tileGrass2)
crewmate.follow(impostor, 55)
crewmate2.follow(impostor, 60)
scene.cameraFollowSprite(impostor)
