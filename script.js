//document.getElementById('ok').addEventListener('click',function (e) {
//    document.getElementById('no').classList.add('toggleOn')
//    console.log(document.getElementById('no'))
//})

document.getElementById('ok').addEventListener('click', function (e) {
    let noElement = document.getElementById('no')
    if (noElement.classList.contains('toggleOn')) {
        noElement.classList.replace('toggleOn','toggleOff')
    }
    else if (noElement.classList.contains('toggleOff')) {
        noElement.classList.replace('toggleOff','toggleOn')

    }
    else {
        noElement.classList.add('toggleOn')
    }
})

var borderTick = 2
document.getElementById('cancel').style.border = `${borderTick}px solid white`

var cancelElement = document.getElementById('cancel')
cancelElement.addEventListener('mouseover', function (e) {
    cancelElement.innerHTML = `
        <div class="container-col">
            <div class="flex-item">
                no 1
            </div>
            <div class="flex-item">
                no 2
            </div>
        </div>
        `
})

//ยกเลิกเมื่อเอาเม้าออก
cancelElement.addEventListener('mouseleave', function (e) {
    cancelElement.innerHTML = `
        cancle
        `
})