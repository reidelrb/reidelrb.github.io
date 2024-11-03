((n = (new Date).getHours()) > 17 || n < 7) && document.documentElement.classList.toggle("dark-css");

const article = document.querySelector('article');
const footer = document.createElement('footer');
footer.innerHTML = `
  <div class="content">
    <section class="share">
      <span>Share on</span>
      <label data-share="tg:msg_url?url=[host]&text= [title]" class="bi-telegram"></label>
      <label data-share="whatsapp://send/?text=[host] [title]" class="bi-whatsapp"></label>
      <label data-share="" class="bi-share-fill"></label>
    </section>
    <div class="ref">
      <span>
        October 2024 by <a href="https://t.me/reidelrb_bot/reidelrb">v1.0Beta</a>
      </span>
    </div>
  </div>
  `;
article.after(footer);
let imgLoad = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return topVisible || bottomVisible;
}
function showVisible() {
  for (let img of document.querySelectorAll('img[data-src]')) {
    let realSrc = img.dataset.src;
    if (!realSrc)
      continue;
    if (isVisible(img)) {
      /*img.src = realSrc*/;
      n = new Image();
      n.src= realSrc;
      n.onload = n.onerror = function(){
        document.querySelectorAll('img[data-src="'+this.src+'"]').forEach (f=>{f.src = this.src;f.dataset.src = ''})
      };
      
    }
  }
}
;(lib = ()=>{
  document.querySelectorAll('.share [data-share]').forEach(a=>{
    a.onclick = function() {
      if (this.dataset.share) {
        open(this.dataset.share.replaceAll('[title]', article.querySelector("h1").innerHTML).replaceAll('[host]', window.location.href.split('#')[0]))
      } else {
        navigator.share && (navigator.share({
          title: 'Share',
          text: article.querySelector("h1").innerHTML,
          url: window.location.href.split('#')[0]
        }).then(()=>0).catch(r=>0))
      }
    }
  }
  );
  ((i)=>{
    if (i && i.dataset.view) {
      fetch(`https://api.counterapi.dev/v1/${i.dataset.view}/counter${!sessionStorage.up ? '/up' : ''}`).then(r=>r.json()).then(c=>{
        document.querySelector('[data-view]').innerHTML = ` ${c.count}`;
        sessionStorage.up = true
      }
      ).catch(e=>true)
    }
  }
  )(document.querySelector("[data-view]"));
  (function(e) {
    if (e) {
      let t, o, n = (new Date().getTime() - new Date(e.dataset.time || new Date).getTime()) / 1e3, m = Math.floor(n / 60), r = Math.floor(m / 60), l = Math.floor(r / 24), a = Math.floor(l / 30), $ = Math.floor(a / 12);
      o = $ > 0 ? [$, "year"] : a > 0 ? [a, "month"] : l > 0 ? [l, "day"] : r > 0 ? [r, "hour"] : m > 0 ? [m, "minutes"] : [0, "second"];
      try {
        let m = new Intl.RelativeTimeFormat((window.navigator.language || navigator.browserLanguage),{
          numeric: "auto",
          style: "long"
        });
        t = m.format(-1 * o[0], o[1]),
        n < 0 && (t = "--")
      } catch (i) {}
      e.innerHTML = ' ' + t
    }
  }
  )(document.querySelector("[data-time]"));
  ((f)=>{
    f.forEach(e=>{
      e.onclick = function() {
        if (e.src != imgLoad) {
          $img_open = this;
          v = document.createElement('div');
          v.className = 'fview';
          v.innerHTML = `<a class="bi-x-circle-fill"></a><img src="${this.src}">`;
          v.onclick = function() {
            this.remove()
          }
          ;
          v.ondragstart = ()=>false;
          v.onpointerdown = function() {
            $pi = event.clientX;
            v.setPointerCapture(event.pointerId);
            v.onpointerup = function(event) {
              if ($pi > event.clientX + 150) {
                let nx = $img_open.nextElementSibling.nextElementSibling;
                nx && nx.tagName == 'IMG' && (this.remove(),
                nx.click())
              }
              if ($pi + 150 < event.clientX) {
                let pv = $img_open.previousElementSibling.previousElementSibling;
                pv && pv.tagName == 'IMG' && (this.remove(),
                pv.click())
              }
            }
          }
          ;
          document.body.prepend(v)
        }
      }
      ;
      e.onerror = function() {
        let i = document.createElement("canvas")
          , $ = i.getContext("2d");
        this.src = (i.width = 400,
        i.height = 200,
        $.fillStyle = "#0000",
        $.fillRect(0, 0, i.width, i.height),
        $.font = "900 90px asap",
        $.fillStyle = "#acacac",
        $.textAlign = "center",
        $.textBaseline = "middle",
        $.fillText('404', i.width / 2, i.height / 2),
        i.toDataURL())
      }
      ;
      !e.classList.contains('g') && (k = document.createElement('figure'),
      k.innerHTML = `by <b>${(new URL(e.dataset.src || (e.src || 'http://example.com'))).origin}</b>`,
      e.before(k))
    }
    )
  }
  )(document.querySelectorAll('article img'));
  showVisible()
}
)();
window.addEventListener('scroll', showVisible);
