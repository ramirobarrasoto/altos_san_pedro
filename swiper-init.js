document.querySelectorAll(".slider").forEach(sl => {
  new Swiper(sl,{
    effect:"fade",
    loop:true,
    speed:700,
    pagination:{el:sl.querySelector(".swiper-pagination"),clickable:true},
    autoplay:{delay:5000,disableOnInteraction:false},
  });
});

const tabs=document.querySelectorAll(".tab");
tabs.forEach(tab=>{
  tab.addEventListener("click",()=>{
    /* pestañas */
    tabs.forEach(t=>t.classList.toggle("active",t===tab));
    /* sliders */
    document.querySelectorAll(".slider").forEach(s=>{
      s.classList.toggle("show",s.id===tab.dataset.target);
    });
    /* textos */
    document.querySelectorAll(".info").forEach(info=>{
      info.classList.toggle("show",info.dataset.id===tab.dataset.target);
    });
  });
});
