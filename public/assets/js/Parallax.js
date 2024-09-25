document.addEventListener('DOMContentLoaded', function() {

    // ParallaxUp
    var ParallaxUp = {
        orientation: 'up', // スクロールの向き ('up', 'down', 'up right', 'up left', 'down right', 'down left', 'right', 'left')
        scale: 1.5, // スケール
        overflow: false, // 要素が親要素からはみ出すかどうか
        delay: 0.6, // アニメーションの遅延時間
        transition: 'cubic-bezier(0,0,0,1)', // アニメーションのイージング
    };

    // ParallaxDown
    var ParallaxDown = {
        orientation: 'down',
        scale: 1.5,
        overflow: false,
        delay: 0.6,
        transition: 'cubic-bezier(0,0,0,1)',
    };

    // ParallaxUpRight
    var ParallaxUpRight = {
        orientation: 'up right',
        scale: 1.5,
        overflow: false,
        delay: 0.6,
        transition: 'cubic-bezier(0,0,0,1)',
    };

    // ParallaxUpLeft
    var ParallaxUpLeft = {
        orientation: 'up left',
        scale: 1.5,
        overflow: false,
        delay: 0.6,
        transition: 'cubic-bezier(0,0,0,1)',
    };

    // ParallaxDownRight
    var ParallaxDownRight = {
        orientation: 'down right',
        scale: 1.5,
        overflow: false,
        delay: 0.6,
        transition: 'cubic-bezier(0,0,0,1)',
    };

    // ParallaxDownLeft
    var ParallaxDownLeft = {
        orientation: 'down left',
        scale: 1.5,
        overflow: false,
        delay: 0.6,
        transition: 'cubic-bezier(0,0,0,1)',
    };
    
    // ParallaxRight
    var ParallaxRight = {
        orientation: 'right',
        scale: 1.5,
        overflow: false,
        delay: 0.6,
        transition: 'cubic-bezier(0,0,0,1)',
    };

    // ParallaxLeft
    var ParallaxLeft = {
        orientation: 'left',
        scale: 1.5,
        overflow: false,
        delay: 0.6,
        transition: 'cubic-bezier(0,0,0,1)',
    };

    // simpleParallaxを初期化
    new simpleParallax(document.querySelectorAll('.ParallaxUp'), ParallaxUp);
    new simpleParallax(document.querySelectorAll('.ParallaxDown'), ParallaxDown);
    new simpleParallax(document.querySelectorAll('.ParallaxUpRight'), ParallaxUpRight);
    new simpleParallax(document.querySelectorAll('.ParallaxUpLeft'), ParallaxUpLeft);
    new simpleParallax(document.querySelectorAll('.ParallaxDownRight'), ParallaxDownRight);
    new simpleParallax(document.querySelectorAll('.ParallaxDownLeft'), ParallaxDownLeft);
    new simpleParallax(document.querySelectorAll('.ParallaxRight'), ParallaxRight);
    new simpleParallax(document.querySelectorAll('.ParallaxLeft'), ParallaxLeft);
});