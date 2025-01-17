$(function() {
    var count = 0
    var random = 0
    for (var i = 1; i <= 5; i++) {
        random = Math.random()
        $(`.slide:nth-child(${i})`).css("background-image", `url("https://picsum.photos/1600/900?t=${random}")`)
    }

    $('.point').click(function() {
        count = $(this).index() * -1
        random = Math.random()
        console.log(random);
        $(`.slide:nth-child(${count})`).css("background-image", `url("https://picsum.photos/1600/900?t=${random}")`)
        $(".slider").animate({
            left: `-${$(this).index()*100}%`
        })
    })
    $('.right-arrow').click(function() {
        count = count - 1
        if (count === -5) {
            count = 0
        }
        $(".slider").animate({
            left: `${count*100}%`
        })
    })
    $('.left-arrow').click(function() {
        count = count + 1
        if (count === 1) {
            count = -4
        }
        $(".slider").animate({
            left: `${count*100}%`
        })
    })

    setInterval(sliding, 5000)
    function sliding() {
        count = count - 1
        if (count === -5) {
            count = 0
        }
        if (count === 1) {
            count = -4
        }
        $(".slider").animate({
            left: `${count*100}%`
        })
    }

})