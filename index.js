$(function() {
    var count = 0
    $('.point').click(function() {
        $(".slider").animate({
            left: `-${$(this).index()*100}%`
        })
    })
    $('.right-arrow').click(function() {
        count = count - 1
        $(".slider").animate({
            left: `${count*100}%`
        })
    })
    $('.left-arrow').click(function() {
        count = count + 1
        $(".slider").animate({
            left: `${count*100}%`
        })
    })


})