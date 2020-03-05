let result = {}
let stage = 0

function next(value) {
    stage++

    switch (stage) {
        case 0:
            $('.end').hide()
            $('.login').fadeIn(300)
            break
        case 1:
            result['personalNumber'] = $('#personalNumber').val()
            $('.login').hide()
            $('.play').fadeIn(300)
            $('#img1').show()
            break;
        case 2:
            result['driverSeat'] = value
            $('#img1').hide()
            $('#img2').fadeIn(300)
            break
        case 3:
            result['driverSeatTop'] = value
            $('#img2').hide()
            $('#slider1').css('display', 'flex').hide().fadeIn(300)
            break
        case 4:
            result['driverSeatOverall'] = value
            $('#slider1').hide()
            $('#slider3').css('display', 'flex').hide().fadeIn(300)
            break
        case 5:
            result['barva'] = value
            $('#slider3').hide()
            $('#slider4').css('display', 'flex').hide().fadeIn(300)
            break
        case 6:
            result['celkovyDojem'] = value
            $('#slider4').hide()
            $('#slider5').css('display', 'flex').hide().fadeIn(300)
            break
        case 7:
            result['vibrace'] = parseInt(value)
            $('#slider5').hide()
            $('#img3').fadeIn(300)
            break
        case 8:
            result['backSeat'] = value
            $('#img3').hide()
            $('#img4').fadeIn(300)
            break
        case 9:
            result['backSeatTop'] = value
            $('#img4').hide()
            $('#slider2').css('display', 'flex').hide().fadeIn(300)
            break
        case 10:
            result['backSeatOverall'] = parseInt(value)
            $('#slider2').hide()
            $('.play').hide()
            $('.end').fadeIn(300)
            postResult()
            break
        default:
            break
    }
}

function postResult() {
    $.post({
        method: 'POST',
        url: location.href,
        data: result
    })
    setTimeout(() => {
        result = {}
        stage = -1
        $('#personalNumber').val('')
        $('#overall1').val(0)
        $('#overall2').val(0)
        $('#barva').val(0)
        $('#celkovyDojem').val(0)
        $('#vibrace').val(0)
        next()
    }, 1500)
}