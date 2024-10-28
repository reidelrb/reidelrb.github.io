const canonical = document.querySelector('link[rel="canonical"]').href;
document.querySelector('footer div a').href = canonical;
const href = new URLSearchParams(window.location.search)
var $project = localStorage.pj || '1';
var clip = null;

const cx1 = 'c3961057de9e7fcb7';
const cx = "4416977100c5544ee";
const cx3 = "017986067167581999535:rnewgrysmpe";


ad = (t)=>{
  let e = document.createElement(t)
  if (t == 'h2') {
    e.innerHTML = 'Lorem Ipsum title.'
  }
  if (t == 'p') {
    e.innerHTML = 'Tritani ceteros eligendi usu ea, ei omnis menandri oportere has. bh vide wisi, pro in iriure antiopam. disputando.'
  }
  if (t == 'img') {
    e.src = ''
    e.loading = "lazy"
    e.alt = ""
    miga.tagName == 'IMG' && (e.className = miga.className)
  }

  if (miga.tagName != 'H1' && miga.tagName != 'ARTICLE') {
    miga.after(e)
  } else {
    document.querySelector('article section').append(e)
  }
  action()
  record()
  if (t == 'img') {
    miga = e;
    gl.style.display = "flex"
  }
}

load = (a)=>{
  loading.style.display = a ? 'flex' : 'none'
}

action = ()=>{
  let p = document.querySelector('.panel')
  if (!p) {
    let p = document.createElement('div')
    p.classList.add('panel')
    p.innerHTML = `
  <style>
.menu-e {
  display: flex;
  flex-wrap: wrap;
  background: #ededed;
  color: #222;
  box-shadow: 0 0 .5rem #000;
  border-radius: .2em;
  z-index: 20;
  border: none;
  overflow: hidden;
  width: 7em;
  min-width: 0;
  max-width: 100%;
  border: outset 1px #acacac;
  outline: 0;
  padding: .2em;
  transform: translate (-50%,-50%)
}

.menu-e :is(div,a) {
  padding: .3em .5em;
  margin: 0;
  font-weight: 400;
  color: #000;
  font-size: 1em;
  width: 100%;
  white-space: nowrap;
  border-bottom: outset .1px #ececec;
  display: inline-block
}

.menu-e div.true {
  color: dodgerblue
}

.menu-e a {
  width: 33.33%
}

.ctrl {
  position: absolute;
  background: dodgerblue;
  color: #fff;
  bottom: .5em;
  left: 0em;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 .5em #333;
  border: outset .1px;
  border-left: none;
  border-radius: 0 .2em .2em 0;
}

.ctrl a {
  display: inline-block;
  padding: .2em .3em .1em;
  color: #fff;
  text-shadow: 0 0 1px #000;
  position: relative;
  font-size: 1.2em
}

.ctrl a span {
  padding: .2em;
  position: absolute;
  top: .3em;
  right: .5em;
  border-radius: .2em;
  color: #fff;
  background: red;
  font-size: .4em;
  box-shadow: 0 0 3px #000
}

.ctrl a i {
  margin: .2em;
  display: flex;
  border-radius: 3em;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  background: #000;
  font-size: .7em;
  box-shadow: 0 0 3px #000
}

.accion {
  outline: 0;
  margin: 1em auto ;
  border-radius: .2em;
  border: outset 1px var(--bg-shadow);
  background: var(--background);
  color: var(--cl);
  box-shadow: 0 0 .2em #000;
  max-width: 20em;
  width: 90%;
  font-size: .9em;
  padding: .8em .5em;
  animation: a-pt .5s
}

@keyframes a-pt {
  0% {
    margin-top: -80%
  }
}

.accion div {
  padding: .5em 0;
  font-weight: 300;
  overflow: auto
}

.accion>label {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 1.2em;
  padding: 0 .3em;
  color: #acacac
}

.accion :is(b,strong,strong-a){
  font-weight:600;
  display:inline-block;
  font-size:.7em;
  width:100%
}

strong-a{
  color:red
}

textarea{
  width: 100%;
  outline: 0;
  box-shadow:inset 0 0 5px #acacac;
  border: none;
  border-radius: .2em;
  padding: .4em;
  font-size: .9em;
  font-weight: 200;
  font-family: asap;
  resize: none;
  margin: .2em 0
}

button {
  display: inline-block;
  vertical-align: middle;
  border: none;
  border-radius: 4px;
  color: white;
  padding: .3em;
  outline: 0;
  font-size: .7em;
  text-shadow:0 0 1px #000;
  background-color: dodgerblue;
  border: 1px solid #595ef1bd
}

#sh,#gl {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.4);
  color: #fff
}

div#sh {
  z-index: 5;
  padding: .5em;
  display: none
}

#sh>section {
  width: 100%;
  height: 100%;
  max-width: 25em;
  overflow: auto;
  background: var(--background);
  border-radius: .2em;
  padding: .1em
}

#sh>section .box {
  width: 96%;
  margin: 2%;
  position: sticky;
  top: 2%;
  padding: .2em;
  display: flex;
  border-radius: .2em;
  background: dodgerblue;
  box-shadow: 0 0 3px #000;
}

#sh>section .box input {
  width: 100%;
  font-size: 1.2em;
  padding: .3em;
  box-shadow: inset 0 0 2px #000;
  border: none;
  border-radius: .2em
}

#sh>section .box label {
  font-size: 1.2em;
  padding: .3em;
  color:#fff
}

#results {
  padding: .5em 0;
  display: flex;
  flex-wrap: wrap;
  color:var(--color-font);
  font-size: .7em;
  text-align:center;
}

#results div{
  padding:.6em .1em;
  position: sticky;
  bottom:0;
  width:100%;
  background: var(--background)
}

#results div label{
  padding:.1em;
  font-size: 1.7em;
}

#gl #fts{
  background: var(--background);
  margin: auto auto 0;
  width: 98%;
  min-height: 5em;
  max-width: 27em;
  max-height: 70%;
  border-radius: .5em .5em 0 0;
  box-shadow: 0 0 1em #000;
  overflow: auto;
  display: flex;
  flex-wrap:wrap;
  position: relative;
  border: solid .1em var(--bg-shadow);
  border-top: solid 2em var(--bg-shadow)
}

#fts a{
  position:fixed;
  bottom:0;
  left:0;
  padding:.2em;
  margin:.5em;
  background:var(--background);
  color:var(--color-font);
  border-radius:.2em;
  box-shadow:0 0 .5em #000;
}

.mini, #fts img {
  aspect-ratio: 1/1;
  object-fit: cover;
  overflow: hidden;
  display: inline!important;
  margin: .1em;
  width: calc(33.333% - .2em);
}

.hide, #gl {
  display: none
}
</style>
<div id="sh">
  <section>
    <div class="box">
      <label onclick=" sh.style.display='none';gl.style.display='flex'; action() " class="bi-x-circle-fill"></label>
      <input id="search" placeholder="Buscador img" type="search">
    </div>
    <div id="results">
      
    </div>
    <div class="hide">
      <div class="gcse-searchresults-only"></div>
    </div>
  </section>
</div>

<div id="gl" onclick="this.style.display='none'">
  <div id="fts"></div>
</div>

<div class="ctrl">
  <a oncontextmenu="event.preventDefault();$project--;$project<1&&($project=5);localStorage.pj=$project;window.location.reload()" onclick="$project++;$project>5&&($project=1);localStorage.pj=$project;window.location.reload()" class="bi-folder-fill"><i class="bi-${$project}-circle-fill"></i></a>
  <a href="?idlink=reidelrb" class="bi-info-circle-fill"></a>
  <a onclick="accion(u = !document.querySelector('article header').dataset.user?'¿Crear un idlink de prueba para publicar tu página online! Experimental<strong>¡Los idlink de prueba caducan sin aviso!</strong>':'¿Actualizar el idlink de esta página con los cambios recientes para verla online?',()=>{req()})" class="bi-globe">
    <span class="">new</span>
  </a>
  <a oncontextmenu="event.preventDefault();accion('¿Reestablecer la página con la plantilla original?<br><strong>No se puede revertir!</strong>',()=>{article.innerHTML=document.querySelector('template').innerHTML;action();record()})" onclick="accion('¿Descargar página editada como archivo html?',()=>{dow()})" class="bi-filetype-html"></a>
</div>
`
    document.body.prepend(p)
    try {
      minisearch()
    } catch (e) {}
  }

  let uv = document.querySelector("[data-view]")
  if (uv && !uv.dataset.view) {
    uv.dataset.view = gtk('rbxxxxxxxxxxx')
  }
  let tm = document.querySelector("[data-time]")
  if (tm) {
    tm.dataset.time = new Intl.DateTimeFormat("en-EN",{
      dateStyle: "medium",
      timeStyle: "medium"
    }).format(new Date());
  }

  ["h1", "h2", "p", "img", ""].forEach(e=>{
    document.querySelectorAll('article ' + e).forEach(o=>{
      if (o.tagName == 'IMG') {
        if (o.classList.contains('g')) {
          o.onclick = function() {
            $img_open = this;
            v = document.createElement('div');
            v.className = 'fview';
            v.innerHTML = `<a class="bi-x-circle-fill"></a><img src="${this.src}"><div class="bi-pencil-square" onmouseover="this.focus()" onblur="record()" oninput="event.stopPropagation(); $img_open.alt =(this.innerText.slice(0,60)); if(this.innerText.length>60){this.innerText=$img_open.alt;alert('Sólo 60 caracteres')}" contenteditable="plaintext-only" onclick="event.stopPropagation()">${(this.alt || 'Sin info').replace(/[\W]+/gim, ' ')}</div>`;
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
                  let nx = $img_open.nextElementSibling;
                  nx && nx.classList.contains('g') && (this.remove(),
                  nx.click())
                }
                if ($pi + 150 < event.clientX) {
                  let pv = $img_open.previousElementSibling;
                  pv && pv.classList.contains('g') && (this.remove(),
                  pv.click())
                }
              }
            }
            ;
            document.body.prepend(v)
          }
        } else {
          o.onclick = ()=>{}
        }
        ;if (o.src != window.location.href && !document.querySelector('#fts img[src="' + o.src + '"]')) {
          n = new Image(),
          n.src = o.src,
          n.alt = o.alt,
          n.loading = "lazy",
          fts.prepend(n)
        }
      }
      document.querySelectorAll('#fts img').forEach(d=>{
        d.alt = (d.alt.replace(/[\W]+/gim, ' ')).slice(0, 60)
        d.onclick = function() {
          miga.src = this.src
          miga.alt = this.alt
          record()
        }
        d.oncontextmenu = function() {
          accion('¿Eliminar la imagen?', ()=>{
            this.remove()
            record()
          }
          )
        }
      }
      )
      o.oncontextmenu = function() {
        event.stopPropagation()

        /*AÑADIR*/
        let m = `
          <a onclick="ad('h2')" class="bi-fonts"></a>
          <a onclick="ad('p')" class="bi-justify-left"></a>
          <a onclick="ad('img')" class="bi-images"></a>
        `
        let t = this.tagName
        miga = this

        /*EDITAR*/
        if (t != 'ARTICLE' && t != 'IMG') {
          m += `<div onclick="miga.contentEditable = 'plaintext-only' ;miga.onblur=function(){this.contentEditable = 'inherit';record()}" class="bi-pencil-square"> Edite</div>`
        }
        /*IMG*/
        if (t == 'IMG') {
          m += `
            <div onclick="gl.style.display='flex'" class="bi-image-fill"> Change</div>
            <div onclick="miga.classList.toggle('g');record();action()" class="bi-grid-3x3-gap-fill ${this.classList.contains('g')}"> Grid x3</div>`
        }
        /*DELETE*/
        if (t != 'ARTICLE' && t != 'H1') {
          m += `
            <div onclick="clip=miga.cloneNode(true)" class="bi-copy"> Copy</div>
            <div onclick="clip=miga.cloneNode(true);miga.remove()" class="bi-scissors"> Cut</div>
  ${clip ? `<div onclick="if( miga.tagName!='ARTICLE'&&miga.tagName!='H1' ){miga.after(clip)}else{article.append(clip)}clip=null;record()" class="bi-paperclip"> Paste</div>` : ``}
            <div onclick="accion('Eliminar ${{
            IMG: 'la Imagen',
            P: 'el párrafo',
            H2: 'el subtítulo'
          }[miga.tagName]}?',()=>{miga.remove();record()})" class="bi-trash"> Delete</div>`
        }
        if (miga.contentEditable != 'plaintext-only') {
          event.preventDefault()
          opts(event, m)
        }
      }
    }
    )
  }
  )
}

async function req() {
  try {
    load(true)
    let a = "https://jsonblob.com/api/jsonBlob"
    let u = document.querySelector('article header').dataset.user
    let b = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    if (u == '') {
      b.method = 'POST'
      b.body = '{}'
      callback = req
    } else {
      b.method = 'PUT'
      b.body = `$idlink(${JSON.stringify(document.querySelector('article').innerHTML.replace(/(\n)|(  )|( data-user=\"\/[0-9]+\")/gim, ''))})`
      callback = ()=>{
        accion(`La URL para ver esta página en ${document.querySelector('head title').innerHTML}<strong-a>¡Éste link es para mostrar como se verá su página en internet, puede compartirlo, después de un tiempo será eliminado!</strong-a><textarea id="copi" readonly wrap="off" rows="3">${window.location.origin}/index.html?idlink=${u.replace('/','')}</textarea>¿Copiar?`,()=>{
          copyToClip(copi.value)
        })
        console.log('open: '+a+u)
      }
    }
    const response = await fetch(a+u, b);
    if (response.ok) {
      let l = response.headers.get('location')
      if(l){
        document.querySelector('article header').dataset.user = l.slice(32,90)
        record()
      }
      const text = await response.text();
      callback()
    } else {
      console.log(response.ok)
      document.querySelector('article header').dataset.user = ''
      record()
      req()
      alert('¡El link anterior ha caducado!')
    }
    load()
  } catch (e) {
    load()
    alert(e.message == 'Failed to fetch' ? '¡Sin conexión a Internet para obtener el idlink!' : e.message)
  }
}



function opts(e, mp) {
  var l = document.createElement("dialog");
  l.className = "menu-e",
  l.innerHTML = mp,
  l.onclick = function() {
    this.remove()
    miga.focus()
    action()
  }
  document.body.append(l),
  l.showModal();
  var o = l;
  let i = getPosition(e)
    , r = i.x
    , a = i.y
    , c = o.offsetWidth + 4
    , s = o.offsetHeight + 4
    , u = window.innerWidth
    , m = window.innerHeight;
  u - r < c / 2 ? o.style.marginLeft = u - c + "px" : r - c / 2 < 0 ? o.style.marginLeft = "5px" : o.style.marginLeft = r - c / 2 + "px",
  m - a < s / 2 ? o.style.marginTop = m - s + "px" : a - s / 2 < 0 ? o.style.marginTop = "5px" : o.style.marginTop = a - s / 2 + "px"
}
getPosition = (e)=>{
  var posx = 0;
  var posy = 0;
  if (!e)
    var e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return {
    x: posx,
    y: posy
  };
}

$idlink = (e)=>{
  article.innerHTML = e?e:`<div class="ups"><h1>404 !Error</h1><p>● El idlink ha caducado o no hay conexión a Internet!<br/></p><a href="">try again</a></div>`
  lib()
}


gtk = e=>{
  var t = new Date().getTime();
  return (e || "token-xxxxxxxx").replace(/[xy]/g, function(e) {
    var n = (t + 16 * Math.random()) % 16 | 0;
    return t = Math.floor(t / 16),
    ("x" == e ? n : 3 & n | 8).toString(16)
  })
}
accion = (t,c)=>{
  let i = gtk('rbxxxxxxxxxxx')
  window['accion'+i] = document.createElement('dialog')
  window['accion'+i].className = 'accion'
  window['accion'+i].innerHTML = `<div>${t}</div>${c ? '<hr/><button class="acepta bi-hand-index-thumb-fill"> Confirmar</button>' : ''}<label>×</label>`
  document.body.append(window['accion'+i])
  window['accion'+i].showModal()
  window['accion'+i].querySelector('label').onclick = function() {
    window['accion'+i].remove()
  }
  if (c) {
    window['accion'+i].querySelector('.acepta').onclick = function() {
      c()
      window['accion'+i].remove()
    }
  } else {
    window['accion'+i].querySelector('label').focus()
  }
}
window.alert = accion

const us = href.get("idlink")
if (!us) {
  const $app_name = 'article'

  let openRequest = indexedDB.open($app_name, 1);
  openRequest.onupgradeneeded = function() {
    let db = openRequest.result;
    if (!db.objectStoreNames.contains($app_name)) {
      db.createObjectStore($app_name, {
        keyPath: 'id'
      });
      console.log($app_name + ' instalado con éxito')
    }
  }

  openRequest.onerror = function() {
    console.error("Error", openRequest.error)
  }

  openRequest.onsuccess = function() {
    db = openRequest.result;
    console.log($app_name + " cargado")

    searchDB('fts', (f)=>{
      action()
      document.querySelector('#fts').innerHTML = f || `<a onclick="sh.style.display='flex'" class="bi-search"> Search URL</a>`
      searchDB($project, (p)=>{
        if (p) {
          var d = p
        } else {
          var d = document.querySelector('template').innerHTML
        }
        article.innerHTML = d;
        ((o)=>{
          o&&(o.onclick=function(){
            fetch_(`https://api.counterapi.dev/v1/${this.dataset.view}/counter`,(e)=>{
              if(e.count){
                alert(`Ésta página ${e.count==0?'no ha registrado visitas!':'ha registrado '+e.count+' visitas de usuarios con Internet!'}`)
              }else{
                e.error==400&&(alert('Aún no se han registrado visitas para esta página!'))
              }
            })
          })
        })(document.querySelector('[data-view]'))
        action()
        load()
      }
      )

    }
    )
  }

  searchDB = (t=$app_name,callback)=>{
    let transaction = db.transaction($app_name);
    let books = transaction.objectStore($app_name);
    let request = books.get(t);

    request.onsuccess = function() {
      if (request.result !== undefined) {
        console.log("datos en: " + t);
        callback(request.result.data)
      } else {
        callback(false)
        console.log(t + ": no tiene datos");
      }
    }
  }

  putDB = (d,t=$project)=>{
    let transaction = db.transaction($app_name, "readwrite");
    let data = {
      id: t,
      data: d
    }
    let request = transaction.objectStore($app_name).put(data);
    request.onsuccess = function(event) {
      console.log(t + " Save kb " + (d.length / 1024).toFixed(1))
    }
    request.onerror = function(event) {
      console.log(request.error)
    }
    transaction.onabort = function() {
      console.log("Error", transaction.error);
    }
  }

} else {
  load(true)

  let s = document.createElement('script')
  s.src = (us.length >= 17 ? 'https://jsonblob.com/api/jsonBlob/' : 'idlink/') + us
  s.onerror = function() {
    $idlink()
    load()
    this.remove()
  }
  s.onload = function() {
    load()
    this.remove()
  }
  document.body.append(s)
}

record = ()=>{
  putDB(article.innerHTML.replace(/(checked=\"\")|(flex;)|(none;)|(class="select")|(contenteditable="plaintext-only")|(class="")/gim, ''))
  putDB(document.querySelector('#fts').innerHTML, 'fts')
}

minisearch = ()=>{
  busca = (q,s=0)=>{
    search.blur()
    load(true)
    let z = new Image()
    z.src = q
    z.alt = ""
    z.onload = function() {
      load()
      miga.src = this.src
      miga.alt = this.alt
      alert('Se ha añadido la imagen de la url')
      record()
      action()
    }
    z.onerror = function() {
      load()
      putSc(`https://cse.google.com/cse/element/v1?rsz=filtered_cse&num=20&start=${s}&hl=es&source=gcsc&cselibv=${goo.cselibv}&searchtype=image&cx=${cx}&q=${q || search.value}&safe=off&cse_tok=${goo.cse_tok}&exp=cc%2Capo&callback=gs${localStorage._grecaptcha ? '&g-recaptcha-response=' + localStorage._grecaptcha : ''}&rurl=http%3A%2F%2Flocalhost%3A8080%2Findex.html`)
    }
  }
  putSc = (d)=>{
    load(true)
    let s = document.createElement('script')
    s.src = d
    s.onerror = s.onload = function() {
      this.remove()
      load()
    }
    document.head.append(s)
  }
  search.onsearch = bbs = function() {
    goo = JSON.parse(localStorage.goo || "{}")
    let q = search.value;
    if (goo.cse_tok) {
      q.trim() && (busca(q))
    } else {
      function handleNewScript(g) {
        let k = (new URLSearchParams((new URL(g.src)).search))
        if (k.get('cse_tok')) {
          goo.cse_tok = k.get('cse_tok')
          goo.cselibv = k.get('cselibv')
          localStorage.goo = JSON.stringify(goo)
          observer.disconnect()
          busca(k.get('q'))
          history.replaceState(null, document.title, location.pathname + location.search)
          alert('El buscador está disponible!')
          console.log(g.src)
        }
      }
      const observer = new MutationObserver(mutations=>{
        mutations.forEach(mutation=>{
          mutation.addedNodes.forEach(node=>{
            if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SCRIPT' && (new URLSearchParams((new URL(node.src)).search)).get('cse_tok')) {
              handleNewScript(node);
            }
          }
          );
        }
        );
      }
      );
      observer.observe(document, {
        childList: true,
        subtree: true
      });
      putSc("https://cse.google.com/cse.js?cx=" + cx)
      window.location.hash = "#gsc.q=" + q
    }
  }
}
gU = (e)=>{
  t = ((new URL(e.dataset.src)).host)
  return t
}
gs = (r)=>{
  console.log(JSON.stringify(r, null, 2))
  let li = '';
  if (r.results) {
    r.results.forEach(o=>{
      li += `<img onclick="accion('Guardar ésta imagen?<br>'+ gU(this) ,()=>{ load(true);i=new Image(); i.src= this.dataset.src; i.alt=this.alt; i.onload=function(){gimg(this); load();record();fts.scrollTop=0 };i.onerror=function(){load();alert('Error al cargar la imagen')} })" src="${o.tbMedUrl}" data-src="${o.url}" class="mini" alt="${(o.titleNoFormatting.replace(/[\W]+/gim, ' ')).slice(0, 60)}">`
    }
    )
    results.innerHTML = ` ${li} <div>${r.cursor.pages.map((v,n)=>n < 8 ? `<label onclick="busca(null,${n * 20})" class="bi-${n + 1}-square${n == r.cursor.currentPageIndex ? '-fill' : ''}"></label>` : '').join('')}</div><p>Resultados de Google. Pueden estar sujetas a derechos de autor.</p>`
  } else {
    captcha = (t)=>{
      alert(t)
      localStorage._grecaptcha = t
      busca();
      mcaptcha.remove()
    }
    if (r.error) {
      r.error.code == 429 && (alert('Demasiadas búsquedas por el momento! espere 5minutos'),
      putSc('https://www.google.com/recaptcha/api.js'),
      mcaptcha.style.display = 'flex')
      r.error.code == 403 && (localStorage.goo = "{}",
      bbs())
    }
  }

}

setCookie = (k,v,t)=>{
  document.cookie = `${encodeURIComponent(k)}=${encodeURIComponent(v)}; path=/; max-age=${(t || 0) * 86400}`
}

gimg = (e)=>{
  e.loading = 'lazy';
  !document.querySelector('#fts img[src="' + e.src + '"]') && (fts.prepend(e))
  return false
}

const fetch_ = async(url,callback)=>{
  load(true)
  try{
    let response = await fetch(url,{
      headers:{},
      method:'GET'
    });
    load()
    if (response.ok) {
      try{
        json = await response.json();
        console.log(JSON.stringify(json,null,2))
      }catch(e){
        json={error:e.name}
      }
      callback&&(callback(json))
    } else {
      callback&&(callback({error: response.status}))
    }
  }catch(e){
    load()
    alert('Sin conexión')
  }
}

var dow = ()=>{
  $basic_css = document.querySelector("#style").innerHTML.replace(/(  )|(\n)/gim, ""),
  $host = window.location.origin
  pg = document.querySelector('main').innerHTML.replace(/( data-user="\/[0-9]+")/gim, ''),
  html = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1,minimum-scale=1,maximum-scale=1"/><link rel="icon" href="${$host}/icon.png"/><title>${(x = article.querySelector("h1")) ? x.innerHTML : "default Page"}</title><style>${$basic_css}</style></head><body><main>${pg}</main></body><script><\/script></html>`;
  let e = html.split(/(?=<)/).map(e=>e.trim())
    , t = ""
    , n = 0;
  e.forEach(e=>{
    e.startsWith("</") && --n < 0 && (n = 0),
    ["</title>", "<br>", "</i>", "</style>", "<\/script>", "</a>", "</span>", "</label>", "</p>", "</h1>", "</h2>"].indexOf(e) >= 0 ? t += e : t += "\n" + "  ".repeat(n) + e,
    !e.startsWith("<") || e.endsWith("/>") || e.startsWith("</") || e.startsWith("<img") || e.startsWith("<!DOCTYPE") || e.startsWith("<br") || e.startsWith("<hr") || n++
  }
  ),
  t=t.replace('<script><\/script>','<script>'+ script.innerHTML.replace(/(\n)|(\s\s)/gim, '')+'<\/script>');
  console.log("Download " + (t.length / 1024).toFixed(2));
  dfile(t, (x = article.querySelector("h1")) ? x.innerHTML : "free html", 'html')
}

getCookie = (n)=>{
  let matches = document.cookie.match(new RegExp("(?:^|; )" + n.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : null
}

dfile = (f,n,t)=>{
  let l = document.createElement("a")
    , o = new Blob([f],{
    type: "text/" + t
  });
  //n&&(l.download = n)
  alert('Se ha descargado su archivo <b>'+n+'</b>')
  l.href = URL.createObjectURL(o),
  l.click(),
  URL.revokeObjectURL(l.href)
}

const copyToClip = async str => {
  try {
    await navigator.clipboard.writeText(str);
    alert("Copiado en el portapapeles!")
  } catch (e) {
    alert(e);
  }
};          

navigator.serviceWorker && navigator.serviceWorker.register("sw.js").then(e=>console.log("service worker registered")).catch(e=>console.log(`Here is the error: ${e}`));
