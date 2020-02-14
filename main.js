const slides = ['login', 'front.jpg', 'top.jpg']

let stage = 0

function next(){
    stage++

    switch (stage) {
        case 1:
            $('.login').hide()
            $('.play').show()
            break;
        case 2:
            $('.question-image').css('background-image', 'url("images/top.png")')
            $('.zone-container').hide()
            $('.zone-container-2').css('display','flex')
            $('.zone').css('height', '100%')
            $('.zone').css('width', '18%')
            break
        case 3:
            $('.question-image').hide()
            $('.slider').css('display', 'flex')
        default:
            break;
    }
}