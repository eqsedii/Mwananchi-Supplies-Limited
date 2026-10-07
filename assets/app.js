const WA='254101200510',$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const wa=t=>'https://wa.me/'+WA+'?text='+encodeURIComponent(t);
// loader video on button taps
const ld=$('#ld'),lv=ld.querySelector('video');
function load(go){ld.style.setProperty('--d',(lv.duration||2)+'s');ld.classList.add('on');lv.currentTime=0;let d=0;
 const fin=()=>{if(d)return;d=1;lv.onended=null;go();setTimeout(()=>{ld.classList.remove('on');lv.pause()},900)};
 lv.onended=fin;lv.play().catch(()=>{});setTimeout(fin,((lv.duration||4)+.6)*1000)}
window.load=load;
document.addEventListener('click',e=>{const a=e.target.closest('a.btn,nav a,.card,button.btn[data-load]');if(!a||a.dataset.nl)return;
 const h=a.getAttribute('href');if(h&&(h[0]==='#'||a.target==='_blank'&&0))return;
 if(h){e.preventDefault();load(()=>{a.target==='_blank'?window.open(h,'_blank'):location.href=h},1300)}});
addEventListener('pageshow',()=>ld.classList.remove('on'));
// header, progress, parallax
const hd=$('header'),bar=$('#bar'),hb=$('.hero');
addEventListener('scroll',()=>{const y=scrollY;hd.classList.toggle('sm',y>30);
 bar.style.width=(y/(document.body.scrollHeight-innerHeight)*100)+'%';
 if(hb&&y<900)hb.style.backgroundPosition='center '+(y*.3)+'px'},{passive:true});
$('#mb').onclick=()=>$('nav').classList.toggle('open');
// reveal
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
$$('.rv').forEach(el=>io.observe(el));
// whatsapp popup after 2s
const pop=$('#pop');setTimeout(()=>{if(!sessionStorage.getItem('pp'))pop.classList.add('show')},2000);
pop.querySelector('button').onclick=()=>{pop.classList.remove('show');try{sessionStorage.setItem('pp',1)}catch(e){}};
// forms -> WhatsApp
$$('form[data-wa]').forEach(f=>f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);
 let t='Hello Mwananchi Supplies Limited, '+f.dataset.wa+'\n';d.forEach((v,k)=>{if(v)t+=k+': '+v+'\n'});
 load(()=>window.open(wa(t),'_blank'),1300)});
