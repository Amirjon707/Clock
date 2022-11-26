setInterval(() => {
    let hours = document.getElementById('hours'),
        minutes = document.getElementById('minuts'),
        secunds = document.getElementById('seconds'),
        ampm = document.getElementById('ampm')
    h = new Date().getHours(),
        m = new Date().getMinutes(),
        s = new Date().getSeconds(),
        am = h >= 12 ? "PM" : "AM",
        hh = document.getElementById('hh'),
        mm = document.getElementById('mm'),
        ss = document.getElementById('ss')

    if (h > 12) {
        h = h - 12
    }

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h
    minutes.innerHTML = m
    secunds.innerHTML = s
    ampm.innerHTML = am

    hh.style.strokeDashoffset = 440 - (440 * h) / 12
    mm.style.strokeDashoffset = 440 - (440 * m) / 60
    ss.style.strokeDashoffset = 440 - (440 * s) / 60
})

