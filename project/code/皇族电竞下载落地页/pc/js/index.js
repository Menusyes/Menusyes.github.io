function charts() {  
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');

    requestAnimationFrame = requestAnimationFrame || webkitRequestAnimationFrame;

    var OPTIONS = {
        AMOUNT: 50,
        UPPER_LIMIT: 8,
        LOWER_LIMIT: 1
    };

    var UPPER_SIZE = 8;
    var LOWER_SIZE = 4;

    var doIt = function doIt() {
        return Math.random() > 0.5;
    };
    var update = function update(p) {
        return doIt() ? Math.max(OPTIONS.LOWER_LIMIT, p - 1) : Math.min(p + 1, OPTIONS.UPPER_LIMIT);
    };
    var reset = function reset(p) {
        p.x = p.startX;
        p.y = p.startY;
    };
    var floored = function floored(r) {
        return Math.floor(Math.random() * r);
    };
    var genParticles = function genParticles() {
        return new Array(OPTIONS.AMOUNT).fill().map(function (p) {
            var size = floored(UPPER_SIZE) + LOWER_SIZE;
            var c = document.createElement('canvas');
            var ctx = c.getContext('2d');
            var r = Math.PI / 180 * floored(360);
            var color = 'rgba(0,' +  '23' + Math.random() + ', 109, ' + Math.random() *
                0.9 + ')';
            // var color = 'rgba(217,25,25,1)';
            var xDelayed = doIt();
            var startX = xDelayed ? -(size + floored(canvas.width)) : floored(canvas.width * 0.25);
            var startY = xDelayed ? size + floored(canvas.height * 0.25) + Math.floor(canvas.height *
                    0.75) : canvas
                .height + size + floored(canvas.height);
            c.height = size;
            c.width = size;
            context.globalCompositeOperation = 'multiply';
            ctx.filter = `blur(${Math.random() * size}px)`
            ctx.translate(size / 2, size / 2);
            ctx.rotate(r);
            ctx.translate(-(size / 2), -(size / 2));
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, size, size);
            return {
                x: startX,
                y: startY,
                startY: startY,
                startX: startX,
                c: c,
                r: r,
                vx: floored(OPTIONS.UPPER_LIMIT / 4),
                vy: floored(OPTIONS.UPPER_LIMIT / 4),
                size: size
            };
        });
    };

    var particles = genParticles();
    var FRAME_COUNT = 0;

    var draw = function draw() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = particles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step =
                    _iterator
                    .next()).done); _iteratorNormalCompletion = true) {
                var particle = _step.value;

                context.clearRect(particle.x, particle.y, particle.size, particle.size);
                FRAME_COUNT++;
                if (particle.y < canvas.height || particle.startX < 0) particle.x += particle.vx;
                if (particle.x > 0 || particle.startY > canvas.height) particle.y -= particle.vy;
                if (FRAME_COUNT % 11 === 0 && doIt()) particle.vx = update(particle.vx);
                if (FRAME_COUNT % 13 === 0 && doIt()) particle.vy = update(particle.vy);
                context.drawImage(particle.c, particle.x, particle.y);
                if (particle.x > canvas.width || particle.y < -particle.size) reset(particle);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
}
$(function () {
    $(".box").mousemove(function (e) {
        var x = e.originalEvent.x || e.originalEvent.layerX || 0;
        var y = e.originalEvent.y || e.originalEvent.layerY || 0;
        var ww = window.innerWidth / 2;
        var wh = window.innerHeight / 2;
        x -= ww, y -= wh;
        $(".bear").css({
            "transform": 'translate(' + x * 0.05 + 'px,' + y * 0.05 + 'px)',
        });
        $(".frame").css({
            "transform": 'translate(' + x * 0.02 + 'px,' + y * 0.02 + 'px)',
        });
        $(".phone").css({
            "transform": 'translate(' + x * 0.03 + 'px,' + y * 0.03 + 'px)',
        });
        $(".debris1").css({
            "transform": 'translate(' + x * 0.03 + 'px,' + y * 0.03 + 'px)',
        });
        $(".debris2").css({
            "transform": 'translate(' + x * 0.03 + 'px,' + y * 0.03 + 'px)',
        });
        $(".debris3").css({
            "transform": 'translate(' + x * 0.03 + 'px,' + y * 0.03 + 'px)',
        });
    })
    charts();
})