$(window).scroll(function() {
    let oTop = $('.section-2').offset().top - window.innerHeight;
    if ($(windown).scrollTop() > oTop{
        $('.navbar').addClass('sticky');
    } else {
        $('navbar').removeClass('sticky');
    })
})
// animate gioi  thieu  sach

let nCount = selector => {
    $(seletor).each(function () {
        console.log($(this.text())
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: "swing",

            step: funtion (value) {
                console.log(value)
                $(this) .text(Math.ceil(value))
            }
        })
    })
}

let position = 0;
$(window).scroll(funtion(){
    let oTop = $('.numbers').offset().top - window.innerHeight
    if(position == 0 &&(window).scrollTop() >= oTop {
        position++;
        nCount(".rect > h1");
    }
})


