let fl = 0
if (window.screen.width < 500) {
}
function sleep(milliseconds) {
  const date = Date.now()
  let currentDate = null
  do {
    currentDate = Date.now()
  } while (currentDate - date < milliseconds)
}
let ghfl = 0

// if (window.screen.width > 600) document.querySelector('.about__animation').innerHTML = "<img id='pat' src='https://m.protector-shin.ru/animations_tilda/image (4).png' type='img/base64'>"

var XHR = 'onload' in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest
if (window.screen.width > 500) {
  setTimeout(function () {
    var xhhr = new XHR()
    // (2) запрос на другой домен :)
    xhhr.open('GET', 'src/json/patttern1.json', true)
    xhhr.onload = function () {
      let s = this.responseText
      fl = 1
      let arra = []

      let i = 0
      let a = '[ '
      while (i < 60) {
        if (i > 0) {
          a += ', '
        }
        a += '"'
        let d = s.indexOf('"p":"') + 5
        let tt = s.indexOf('"', d + 10)
        let res = s.slice(d, tt)
        s = s.slice(tt)
        i = i + 1
        a += res + '"'
        arra[i - 1] = res
      }
      a += ']'
      fred(0, arra, 'pat', 59, 1)
    }

    xhhr.onerror = function () {
      alert('Ошибка ' + this.status)
    }

    xhhr.send()

    document.querySelector('.application__brain').innerHTML = "<img id='brain' src='https://инжиниринглаб.рф/brain.png' type='img/base64'>"

    var XHRx = 'onload' in new XMLHttpRequest() ? XMLHttpRequest : XDomainRequest
    var xhr = new XHRx()
    // (2) запрос на другой домен :)
    xhr.open('GET', 'https://инжиниринглаб.рф/brain.json', true)
    xhr.timeout = 100000
    xhr.onload = function () {
      let s = this.responseText
      fl = 1
      let arra = []
      let i = 0
      let a = '[ '
      while (i < 240) {
        if (i > 0) {
          a += ', '
        }
        a += '"'
        let d = s.indexOf('"p":"') + 5
        let tt = s.indexOf('"', d + 10)
        let res = s.slice(d, tt)
        s = s.slice(tt)
        i = i + 1
        a += res + '"'
        arra[i - 1] = res
      }
      a += ']'
      fred(0, arra, 'brain', 239, 50)
    }

    xhr.onerror = function () {
      alert('Ошибка ' + this.status)
    }

    xhr.send()
  }, 0)
} else {
  //frame('end');
}

let hl = 1
let shl = 1

let jhj = 0

function fred(t, arra, sto, lo, p) {
  let img = document.getElementById(sto)

  img.src = arra[t]

  if (t >= lo) {
    t = -1
  }
  t = t + 1

  setTimeout(
    (img.onload = function () {
      sleep(p)
      setTimeout(fred(t, arra, sto, lo, p), 1000)
    }),
    100000
  )
}
//===================================================================================
//===================================================================================
//===================================================================================
//===================================================================================

// if (window.screen.width <= 500) {
//   document.querySelector('.tools__animation').innerHTML = "<video playsinline='true' muted='muted' controls='false' autoplay='false' id='last' type='video/mp4'>"
//   document.getElementById('last').style.width = '235px'
//   var vdig = document.getElementById('last')
//   vdig.src = 'https://инжиниринглаб.рф/an/dub.mp4'
//   vdig.controls = false
//   vdig.loop = false
//   vdig.autoplay = false
// } else {
//   document.querySelector('.tools__animation').innerHTML += "<img id='last' type='img/base64'>"
//   // document.getElementById('last').src = 'https://m.protector-shin.ru/animations_tilda/imag.png'
// }
function dolist(t, arra, sto, lo, p, k) {
  let img = document.getElementById(sto)

  let hs = 1

  img.src = arra[t]

  if (t >= lo) {
    if (k == 1) {
      dolist(0, arra.reverse(), 'last', 60, 1, 2)
    } else if (k == 2) {
      dolist(0, arra.reverse(), 'last', 60, 1, 3)
    }

    hs = 0
  }
  t = t + 1
  if (hs) {
    img.onload = function () {
      sleep(p)
      setTimeout(dolist(t, arra, sto, lo, p, k), 100)
    }
  }
}
let ll = 1

window.addEventListener('scroll', function () {
  var pkk = 2800

  if (true) {
    ll = 0
    if (window.screen.width < 500) {
      document.getElementById('last').style.width = '235px'
      var vi = document.getElementById('last')

      vi.controls = false
      vi.loop = false
      vi.autoplay = true
      //vi.load();
      vi.play()
    } else {
      let xg = new XHR()
      xg.open('GET', 'https://инжиниринглаб.рф/dub.json', true)
      xg.onload = function () {
        //document.getElementsByClassName("shape4")[0].innerHTML="<img id='stan' type='img/base64'>";
        let s = this.responseText
        hl = 0
        let arra = []
        let i = 0
        let a = 'let f = [ '
        while (i < 61) {
          if (i > 0) {
            a += ', '
          }
          a += '"'
          let d = s.indexOf('"p":"') + 5
          let tt = s.indexOf('"', d + 10)
          let res = s.slice(d, tt)
          s = s.slice(tt)
          i = i + 1
          a += res + '"'
          arra[i - 1] = res
        }
        a += '];'
        //  eval(a);
        //  alert(arra[0]);
        //run();
        dolist(0, arra, 'last', 60, 0, 1)
        //  alert("asd");
      }

      xg.onerror = function () {
        alert('Ошибка ' + this.status)
      }

      xg.send()
    }
  }
})

//==========================================================================================
//==========================================================================================
//==========================================================================================
//==========================================================================================
//==========================================================================================

// let fig = 1
// if (window.screen.width < 500) {
//   document.getElementsByClassName('shape4')[0].innerHTML =
//     "<video playsinline='true' muted='muted' controls='false' autoplay='false' id='stan' src='https://инжиниринглаб.рф/an/machine_start.mp4' type='video/mp4'></video>"

//   document.getElementById('stan').style.width = '265px'
//   document.getElementById('stan').controls = false
//   document.getElementById('stan').loop = false
//   document.getElementById('stan').autoplay = false
// } else {
//   document.querySelector('.integration__animation').innerHTML = "<img id='stan' type='img/base64'>"
//   document.getElementById('stan').src = 'https://инжиниринглаб.рф/an/image.png'
// }

// function hoo() {
//   let xgf = new XHR()
//   xgf.open('GET', 'src/json/start.json', true)
//   xgf.onload = function () {
//     let s = this.responseText
//     fl = 1
//     let arra = []
//     if (fig) {
//       let i = 0
//       let a = 'let f = [ '
//       while (i < 184) {
//         if (i > 0) {
//           a += ', '
//         }
//         a += '"'
//         let d = s.indexOf('"p":"') + 5
//         let tt = s.indexOf('"', d + 10)
//         let res = s.slice(d, tt)
//         s = s.slice(tt)
//         i = i + 1
//         a += res + '"'
//         arra[i - 1] = res
//       }
//       a += '];'

//       dolistal(0, arra, 'stan', 183, 0)
//     }
//   }

//   xgf.onerror = function () {
//     alert('Ошибка ' + this.status)
//   }

//   xgf.send()
// }

// function fun() {
//   let x = new XHR()
//   x.open('GET', 'https://инжиниринглаб.рф/loop.json', true)
//   x.onload = function () {
//     let s = this.responseText
//     hl = 1
//     let arrsa = []
//     let i = 0
//     let a = 'let f = [ '
//     while (i < 67) {
//       if (i > 0) {
//         a += ', '
//       }
//       a += '"'
//       let d = s.indexOf('"p":"') + 5
//       let tt = s.indexOf('"', d + 10)
//       let res = s.slice(d, tt)
//       s = s.slice(tt)
//       i = i + 1
//       a += res + '"'
//       arrsa[i - 1] = res
//     }
//     a += '];'

//     fred(0, arrsa, 'stan', 66, 0)
//   }

//   x.onerror = function () {
//     alert('Ошибка ' + this.status)
//   }

//   x.send()
// }

// const imgs = document.querySelector('.imgs')
// let lastAtr
// let firstImg
// let count = 1
// flag = 0
// function dolistal(t, arra, sto, lo, p) {
//   let img = document.getElementById(sto)

//   let hs = 1

//   img.src = arra[t]

//   if (count === 170) {
//     return
//   }

//   if (lastAtr != arra[t]) {
//     if (count == 2) {
//       firstImg = arra[t]
//     }
//     // let imgsItem = document.createElement('img')

//     // imgsItem.src = arra[t]
//     // imgsItem.dataset.imgId = count
//     // imgs.append(count)
//     // imgs.append(imgsItem)
//     // count++
//     // lastAtr = arra[t]

//     // if (firstImg == arra[t]) {
//     //   flag = 1
//     //   console.log('Начало')
//     // }
//   }

//   //alert(t);
//   if (t >= lo) {
//     //
//     if (lo == 33) {
//       hs = 0
//     } else {
//       hs = 0
//     }
//     dolistal(154, arra, sto, lo, p)
//   }
//   t = t + 1
//   if (hs) {
//     img.onload = function () {
//       sleep(p)
//       setTimeout(dolistal(t, arra, sto, lo, p), 100)
//     }
//   }
// }

// window.addEventListener('scroll', function () {
//   var pk = 3450
//   if (window.screen.width > 1575) pk = 3250

//   rl = 0
//   if (window.screen.width < 500) {
//     var vist = document.getElementById('stan')
//     vist.style.width = '265px'
//     $('#stan').css('z-index', '23')
//     $('#stan').css('position', 'absolute')

//     $('#stan').css('left', '0px')
//     $('#stan').css('top', '0px')

//     vist.controls = false
//     vist.loop = false
//     vist.autoplay = true
//     //vist.load();
//     vist.play()
//     document.getElementById('stan').addEventListener('ended', myHandler, false)

//     function myHandler(e) {
//       var vis = document.getElementById('stan')

//       vis.currentTime = 2.65
//       vist.play()
//     }
//   } else {
//     hoo()
//   }
// })
