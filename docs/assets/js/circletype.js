// textCircle
const textCircleElements = document.querySelectorAll('.textCircle');

textCircleElements.forEach(function(element) {
    const circleType = new CircleType(element)
    .dir(parseInt(element.getAttribute('data-dir')))
    .radius(parseInt(element.getAttribute('data-radius')));

    // data-responsive="true"
    let isResponsive = element.getAttribute('data-responsive') === 'true';
    let isSmallWindow = window.innerWidth < 768;
    if (isResponsive) {
        function updateRadius() {
            const isNowSmallWindow = window.innerWidth < 768;
            if (isNowSmallWindow) {
                circleType.radius(element.offsetWidth / 2);
            } else if (isSmallWindow) {
                circleType.radius(parseInt(element.getAttribute('data-radius')));
            }
            isSmallWindow = isNowSmallWindow;
        }
        window.addEventListener('resize', updateRadius);
        updateRadius(); // 初回実行
    }

});