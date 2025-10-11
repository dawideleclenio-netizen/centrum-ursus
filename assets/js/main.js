
// Simple slider + hamburger + scroll animations
document.addEventListener('DOMContentLoaded', function(){
  // Hero slider
  const slides = document.querySelectorAll('.hero-slider .slide')
  let idx = 0
  function show(i){
    const width = document.querySelector('.hero-slider').clientWidth
    const wrap = document.querySelector('.hero-slider')
    wrap.style.transform = `translateX(-${i*width}px)`
  }
  function next(){
    idx = (idx+1)%slides.length
    show(idx)
  }
  let t = setInterval(next,5000)
  window.addEventListener('resize', ()=> show(idx))

  // hamburger
  const hb = document.querySelector('.hamburger')
  hb && hb.addEventListener('click', ()=>{
    const nav = document.querySelector('.main-nav')
    if(nav.style.display === 'flex') nav.style.display = 'none'
    else nav.style.display = 'flex'
  })

  // scroll animations
  const anims = document.querySelectorAll('[data-anim]')
  function checkAnim(){
    anims.forEach(a=>{
      const r = a.getBoundingClientRect()
      if(r.top < window.innerHeight - 60) a.classList.add('show')
    })
  }
  checkAnim()
  window.addEventListener('scroll', checkAnim)
})
