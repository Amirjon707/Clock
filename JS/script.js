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
        ss = document.getElementById('ss'),
        hr = document.querySelector('.hr_dot'),
        min = document.querySelector('.min_dot'),
        sec = document.querySelector('.sec_dot')

    if (h > 12) {
        h = h - 12
    }

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h + '<br><p>Hours</p>'
    minutes.innerHTML = m + '<br><p>Minutes</p>'
    secunds.innerHTML = s + '<br><p>Seconds</p>'
    ampm.innerHTML = am

    hh.style.strokeDashoffset = 440 - (440 * h) / 12
    mm.style.strokeDashoffset = 440 - (440 * m) / 60
    ss.style.strokeDashoffset = 440 - (440 * s) / 60

    hr.style.transform = `rotate(${h * 30}deg)`;
    min.style.transform = `rotate(${m * 6}deg)`;
    sec.style.transform = `rotate(${s * 6}deg)`;
})

