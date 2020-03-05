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
            $('#img3').fadeIn(300)
            break
        case 4:
            result['backSeat'] = value
            $('#img3').hide()
            $('#img4').fadeIn(300)
            break
        case 5:
            result['backSeatTop'] = value
            $('#img4').hide()
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