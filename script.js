
var marginBtn = 10
document.getElementById('ok').addEventListener('click', function (e) {
    marginBtn = marginBtn+10
    document.getElementById('cancel').style.marginLeft = `${marginBtn}px `
    document.getElementById('cancel').style.marginRight = `${marginBtn}px `
    document.getElementById('no').style.marginLeft = `${marginBtn}px`
    document.getElementById('no').style.marginRight = `${marginBtn}px`
})

var text = ['ok','วิชานี้','ง่าย','จริงๆนะ']
var count = 0
var changeText = document.getElementById('no')
changeText.addEventListener('dblclick', function (e) {
    if (count > 3) {
        count = 0
    }
    document.getElementById('ok').innerHTML = text[count]
    count++

    
    

    
})
