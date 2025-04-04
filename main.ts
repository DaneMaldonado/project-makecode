function HINTS () {
    river = sprites.create(img`
        7 7 7 7 7 7 7 7 7 7 7 
        8 8 8 8 8 8 8 8 8 8 8 
        8 6 8 8 6 6 8 6 8 8 8 
        6 6 6 6 6 6 6 6 6 6 6 
        6 1 1 6 6 6 6 6 6 1 1 
        6 6 6 6 6 1 1 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 
        8 6 8 8 6 8 8 8 6 8 8 
        8 8 8 8 8 8 8 8 8 8 8 
        7 7 7 7 7 7 7 7 7 7 7 
        `, SpriteKind.Player)
    camp = sprites.create(img`
        e e e . . 2 2 . . e 5 
        . e 5 e . 2 4 . e e e 
        2 . e e . 4 4 . e 5 e 
        2 4 4 5 e 5 4 e 5 e . 
        . 2 4 e e 2 e e e . . 
        . 2 5 5 e 2 5 e 4 4 . 
        e e 5 5 e e 5 e 4 4 . 
        e 5 5 5 4 e e e e . . 
        e e 4 4 5 5 e e 5 e . 
        . 4 4 . e 5 . . e e e 
        . . . . e e . . . e . 
        . . . . . e . . . . . 
        `, SpriteKind.Player)
    rain = sprites.create(img`
        . . 1 1 1 . . 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 
        . 8 1 8 . 1 1 8 . 8 1 1 
        . 8 8 8 . 8 8 8 . 8 8 8 
        . 8 8 8 . 8 8 8 . 8 8 8 
        . 8 8 8 . 8 8 8 . 8 8 8 
        . 8 8 8 . 8 8 8 . 8 8 8 
        . 8 8 8 . 8 8 8 . 8 8 8 
        . 8 8 8 . 8 8 8 . 8 8 8 
        `, SpriteKind.Player)
    rock = sprites.create(img`
        . . . . . . . . b b b b b . . . 
        . . . . . . b b d d d d b b . . 
        . . . . . b d d d d d d d c . . 
        . . . . c d d d d d d d d c . . 
        . . . c b d d d d d d d b c c . 
        . . . c b b d d d d b c c c c . 
        . . c c d b b b c c c c c c c . 
        . . c c c d d d d c c d d d c c 
        . c d b c c b b c c d d d d d c 
        . c b d d b b b c c d d d d d c 
        . c c b b b b c b c b d d d b c 
        c b b c c c c c b b b b b c c c 
        c c b b c c c c c d d d d d b c 
        c c c c c c b b b b b c c c c c 
        c c c c c c c b b b b b c c c c 
        c c c c c c c c b b b b b c c c 
        `, SpriteKind.Player)
    valley = sprites.create(img`
        . . . . . . . . b b b b b . . . 
        . . . . . . b b d d d d b b . . 
        . . . . . b d d d d d d d c . . 
        . . . . c d d d d d d d d c . . 
        . . . c b d d d d d d d b c c . 
        . . . c b b d d d d b c c c c . 
        . . c c d b b b c c c c c c c . 
        . . c c c d d d d c c d d d c c 
        . c d b c c b b c c d d d d d c 
        . c b d d b b b c c d d d d d c 
        . c c b b b b c b c b d d d b c 
        c b b c c c c c b b b b b c c c 
        c c b b c c c c c d d d d d b c 
        c c c c c c b b b b b c c c c c 
        c c c c c c c b b b b b c c c c 
        c c c c c c c c b b b b b c c c 
        `, SpriteKind.Player)
}
let valley: Sprite = null
let rock: Sprite = null
let rain: Sprite = null
let camp: Sprite = null
let river: Sprite = null
scene.setBackgroundImage(img`
    dddddddddddddddd111111d1dddddddddddddddd111111111111111111111ddddddddddddddddddddddd1111111ddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb111111111111
    11dddddddddddddddddddddddddddddddddb11111111111111111111111111111ddddddddddddddddddddddd11111ddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb11111111111111
    11111dddddddddddddddddddddddddddb11111111111111111111111111111b1111ddddddddddddddddddddddddd1dddddddddddddddddddddddbbbbbbbbbbbbbbbbbb11b11111111111111111
    11111111ddddddddddddddddddddddb1111111111111111111bbb11111111111111111ddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbb11111111111111111111111
    111bb111111dddddddddddddddddbb11111111111111bbbbb111bb111111111111111111bbbdddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbb1111111111111111111111111111
    111bbbbb1111dddddddddddddbb1111111b111bb11bbbbbbbb1bbbbbbbb111bb111111111111bbddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb111111111111111111111111111111
    bbbbbbbbbbb111bdddddbbbbbbb1111bb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111b111111bbbbbbbdddddddddddddddddddddbbbbbbbbbbbbbbbbbb11111111111111111111111111111111
    bbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbbbbbbbbbbbc1111111111111111111111111111111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc1111111111111111c1111111111111111111
    bbbbb11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccc1111111111111111111111111111111111111111
    11111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc1111111111c1111c11111cc11c11111ccc111cc111cc111.
    111111111111111111bbbbbbbbbbbbbbbbbbbbbb11111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111ccccccccc1111c11c1111111c1111ccc11cc1111cccc111cc11cc1111c
    111111111111111111111bb1bbbbbbbbbbbbbcc1111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111111111cccccccccccc1111111c11c1111ccc11cc11111ccc111cc111cc111cc
    11c1111111111111111111c111111bbb1111111111111111111cc11111cbbbbbbbbbbbbbbbbbbbbbb1111111111111111c1cccccccc1111cccccc11111cccc11ccc1111ccc1111c1111c1111c1
    1ccc1111111111111111111cc11111cccccccc1111111111111cccccc1111cbbbbbbbbbbbbbbbbbbc11111cc1111111ccccccccccccc1ccccccc11c11ccccc11cc1111cccc111ccc111c111ccc
    dccc111111111111111111111ccc11ccccccccc1111cccccccccccccccc11111ccccbbbbbbcccccccccccc11111cccccccccccccccccccccccc11111cccccc1ccc1111cccc111ccc1c1ccccccc
    c1111111111111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111ccccccccccccccccccc11cccccccccccccc
    1111111111111111111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccccccccccccccccc
    1111111111111111111111111c111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    111111111c11111cc111111c11c11111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    111cc111cc1c111cc1111111111cc11111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccc11cc11c11ccccc111cccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccc1cc11cccccc11ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccc1ccc1ccccccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccc66cccccccccccccc6cccccccccccccccccccccccccccccccccccccc66c6ccccccccccc6cccccccccccccccccc6cccccc6ccc6ccccc6cccccccccc66cccccccccccccccc
    c666c6c6666666cc6666666666666666666666ccc6666c66666666666666666666cc666666666666666666666666666666666666666666666cc666666666666666666c66666666666666666666
    e66ee6ee666666666666666666ee666666eee666666eeee6eee66ee66666ee66eee66666ee6ee66eeee76eeee66666666666666666e6666666666666666eeee6666ee666666666666666666666
    6666666666666e66666666666688888888888888888888888888888888888888888888888888888888886ee666666666eeee666666e66666666666e6666ee6666ee6666666666666e6666e6666
    666e6666eee66666668888888888888888888888888888888888888888888888888888888888888888888886888866666666666666666666666666666666666666666666666666666666666666
    666666666e666666e88888888888888888888888888888888888888888888888888888888888888888888888888866666666666666666666666666666666666e66666666666666666666666666
    66666666666ee6688888888888888888888888888888888888888888888888888888888888888888888888888888886666666666666666666666666666666666e6666e6666e66666666e666666
    666666e6666666888811111111111111111111111111111111111111111111111111188888888888888888888888888866666e6666e66666e6666e6666ee6666666e666e666666666666666666
    e66e666666e6e888881111111111111111111111111111111111111111111111111118888888888888888888888888888666666666666e6666666e66666e666666666e6666666666666e666666
    6666666ee8888888881111111111111111111111111111111111111111111111111118888888888888888888888888888666666e666666666666666666666666666666666666e6666e66666666
    66666e88888888888811188888881118888888118888888111888888811188888881188888888888888888888888888888866666666666666666666666666666666666666666e66666e666666e
    66e68888888888888811188888881118888888118888888111888888811188888881188888888888888888888888888888886666666666666666666666666e666666666666666666666666666e
    6e88888888888888881118888888111888888811888888811188888881118888888118888888888888888888888888888888886666e66666666666ee66666e6666666666666666666666666666
    6888888888888888881118888888111888888811888888811188888881118888888118888888888888888888888888888888886666e666666666666e66666666666666666666666e6666666666
    68888888888888888811188888881118888888118888888111888888811188888881188888888888888888888888888888888886666666666666666666666666666666666666666e6666e66666
    8888888888888888881118888888111888888811888888811188888881118888888118888888888888888888888888888888888866666666666666666666666e66666666666666666666666666
    8888888888888888881118888888111888888811888888811188888881118888888118888888888888888888888888888888888866666666e66666666666666666666666666666666666666666
    88888888888888888811111111111111111111111111111111111111111111111111188888888888888888888888888888888888866666666666666666666666666e6666666666666666666666
    688888888888888888111111111111111111111111111111111111111111111111111888888888888888888888888888888888888666666666666666666666666666666ee66666666666666666
    88888888888888888811111111111111111111111111111111111111111111111111188888888888888888888888888888888888866666666666666666666666666666e6666666666666666666
    688888888888888888111888888811188888881188888881118888888111888888811888888888888888888888888888888888888866e666666666666666666666666e66666666666666666666
    8668888888888888881118888888111888888811888888811188888881118888888118888888888888888888888888888888888888666666666666666e6666666666666666666666e666ee6666
    6668888888888888881118888888111888888811888888811188888881118888888118888888888888888888888888888888888888666666e66666666666666666666e666666666666666e6666
    66e6688688888888881118888888111888888811888888811188888881118888888118888888888888888888888888888888888888866666666666666666ee66e6666666666666666666666666
    6666686688888888881118888888111888888811888888811188888881118888888118888888888888888888888888888888888888866666666666666666666666666666666666666666666666
    66666e6668888888881118888888111888888811888888811188888881118888888118888888888888888888888888888888888888866666666666666666e666666666666666ee666666666666
    66e6666668888888881118888888111888888811888888811188888881118888888118888888888888888888888888888888888888866666666e6666666e66e6666666666666e6666666666666
    66666666688888888811111111111118888888111111111111888888811111111111111111111111111111111111111111888888888866e66666666e666e66e666666666666666666666666666
    66666666666888888811111111111118888888111111111111888888811111111111111111111111111111111111111111888888888866666666666e6666e66e6666ee66e666666666666e6666
    66666e66666888888811111111111118888888111111111111888888811111111111111111111111111111111111111111888888888866666666666eee666666e6e6666666666666e666666666
    66666e66668888888811188888881118888888118888888111888888811188888881188888881118888888111888888811888888888886666666666e66ee666666e66666666666666666666666
    6666e66688888888881118888888111888888811888888811188888881118888888118888888111888888811188888881188888888888866666666666666666666666666666666666666666666
    66e666668888888888111888888811188888881188888881118888888111888888811888888811188888881118888888118888888888886666666666666666666666666666666666666666666e
    6668888888888888881118888888111888888811888888811188888881118888888118888888111888888811188888881188888888888886666666e666666666666666e6666666666666666666
    668888888888888888111888888811188888881188888881118888888111888888811888888811188888881118888888118888888888888666e666666666e66666e66666666666666666666666
    6888888888888888881118888888111888888811888888811188888881118888888118888888111888888811188888881188888888888886666666666666666666e66666666666666666666666
    8888888888888888881118888888111888888811888888811188888881118888888118888888111888888811188888881188888888888886666666666666666666e66666666666666666666666
    888888888888888888111111111111188888881111111111118888888111111111111111111111111111111111111111118888888888888866666666ee666666666666666666e6666e6666e666
    8888888888888888881111111111111888888811111111111188888881111111111111111111111111111111111111111188888888888888866666666ee6666666666666666666666666666666
    8888888888888888881111111111111888888811111111111188888881111111111111111111111111111111111111111188888888888888888666666666666666666666666666666666666666
    888888888888888888111888888811188888881188888881118888888111888888811888888888888888881118888888118888888888888888888666666666666666ee66666666666666666666
    8888888888888888881118888888111888888811888888811188888881118888888118888888888888888811188888881188888888888888888888866666666666666666666666666666666666
    8888888888888888881118888888111888888811888888811188888881118888888118888888888888888811188888881188888888888888888888886666666666666666666666666666666666
    88888888888888888811188888881118888888118888888111888888811188888881188888888888888888111888888811888888888888888888888888888866666666666666e6666666e66666
    8888888888888888881118888888111888888811888888811188888881118888888118888888888888888811188888881188888888888888888888888888888888866666666666666666e6666e
    8888888888888888881118888888111888888811888888811188888881118888888118888888888888888811188888881188888888888888888888888888888888886666666666666666666666
    8888888888888888881118888888111888888811888888811188888881118888888118888888888888888811188888881188888888888888888888888888888888888666666666666666666666
    888888888888888888111111111111188888881111111111118888888111111111111888888888888888881111111111111111111111111111111111111111188888888866666666e666666666
    8888888888888888881111111111111888888811111111111188888881111111111118888888888888888811111111111111111111111111111111111111111888888888888888666666666666
    8888888888888888881111111111111888888811111111111188888881111111111118888888888888888811111111111111111111111111111111111111111888888888888888886666666666
    8888888888888888888888888888888888888811888888811188888888888888888888888888888888888811188888881188888881118888888111888888811888888888888888888886666666
    8888888888888888888888888888888888888811888888811188888888888888888888888888888888888811188888881188888881118888888111888888811888888888888888888888886666
    8888888888888888888888888888888888888811888888811188888888888888888888888888888888888811188888881188888881118888888111888888811888888888888888888888888888
    8888888888888888888888888888888888888811888888811188888888888888888888888888888888888811188888881188888881118888888111888888811888888888888888888888888888
    8888888888888888888888888888888888888811888888811188888888888888888888888888888888888811188888881188888881118888888111888888811888888888888888888888888888
    8888888888888888888888888888888888888811888888811188888888888888888888888888888888888811188888881188888881118888888111888888811888888888888888888888888888
    8888888888888888888888888888888888888811888888811188888888888888888888888888888888888811188888881188888881118888888111888888811888888888888888888888888888
    8888888888888888888888888888888888888811111111111188888888888888888888888888888888888811111111111111111111111111111111111111111888888888888888888888888888
    8888888888888888888888888888888888888811111111111188888888888888888888888888888888888811111111111111111111111111111111111111111888888888888888888888888888
    8888888888888888888888888888888888888811111111111188888888888888888888888888888888888811111111111111111111111111111111111111111888888888888888888888888888
    8888888888888888888888888888888888888811888888811188888888888888888888888888888888888811188888881188888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888811888888811188888888888888888888888888888888888811188888881188888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888811888888811188888888888888888888888888888888888811188888881188888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888811888888811188888888888888888888888888888888888811188888881188888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888811888888811188888888888888888888888888888888888811188888881188888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888811888888811188888888888888888888888888888888888811188888881188888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888811888888811188888888888888888888888888888888888811188888881188888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888811111111111188888888888888888888888888888888888811111111111188888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888811111111111188888888888888888888888888888888888811111111111188888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888811111111111188888888888888888888888888888888888811111111111188888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6616616616611661661111166111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6616616666611161666616666166666116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6616616616616111666616666166666116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6611116616616611666616666111166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6616616616616661666616666666166666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6616616616616661666616666666166116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6616616616616661666616666111166116666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    ..........................................................................................................................................................
    ..........................................................................................................................................................
    ..........................................................................................................................................................
    ..........................................................................................................................................................
    ..........................................................................................................................................................
    ..........................................................................................................................................................
    ..........................................................................................................................................................
    ..........................................................................................................................................................
    ..........................................................................................................................................................
    ..........................................................................................................................................................
    ..........................................................................................................................................................
    ..........................................................................................................................................................
    `)
info.setScore(0)
let nameslist = [
"river",
"rain",
"valley",
"rock",
"camp",
"pond",
"nest"
]
let enemySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
let Hero = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
enemySprite.setPosition(120, 44)
Hero.setPosition(140, 64)
enemySprite.scale = 0.95
Hero.scale = 0.95
if (info.score() == 40) {
    game.gameOver(true)
}
if (info.score() == 40) {
    game.gameOver(true)
}
