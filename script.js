const article = document.querySelector('article')
const footer = document.createElement('footer')
  footer.innerHTML= `
  <section class="share">
    <span>Share on</span>
    <label data-share="https://t.me/share/url?url=[host]&text=[title]" class="bi-telegram"></label>
      <label data-share="https://api.whatsapp.com/send?text=[host] [title]" class="bi-whatsapp"></label>
      <label data-share="" class="bi-share-fill"></label>
    </section>
    <div>
      <span>
        October 2024 by <a href="https://t.me/reidelrb_bot/reidelrb">v1.0Beta</a>
      </span>
    </div>
  `;
  article.after(footer)