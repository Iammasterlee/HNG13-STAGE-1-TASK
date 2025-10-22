
/* Menu toggle (accessible) */
(function(){
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  if(menuToggle && nav){
    const icon = menuToggle.querySelector('i');
    menuToggle.addEventListener('click', toggleMenu);
    menuToggle.addEventListener('keydown', (e) => {
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        toggleMenu();
      } else if (e.key === 'Escape') {
        closeMenu();
      }
    });

    const timeEl = document.getElementById('time');
setInterval(() => {
  timeEl.textContent = Date.now();
}, 100); // updates every 100ms


    function toggleMenu(){
      const open = nav.classList.toggle('show');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      icon.className = open ? 'fas fa-times' : 'fas fa-bars';
      if(open){
        // add slide down via inline style for smoothness
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '64px';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.background = '#fff';
        nav.style.padding = '0.75rem 0';
        nav.style.boxShadow = '0 6px 18px rgba(2,6,23,0.06)';
      } else {
        nav.style.display = '';
        nav.style.flexDirection = '';
        nav.style.position = '';
        nav.style.top = '';
        nav.style.left = '';
        nav.style.width = '';
        nav.style.background = '';
        nav.style.padding = '';
        nav.style.boxShadow = '';
      }
    }

    function closeMenu(){
      nav.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
      icon.className = 'fas fa-bars';
      nav.style.display = '';
    }

    // close on click outside
    document.addEventListener('click', (ev) => {
      if(!menuToggle.contains(ev.target) && !nav.contains(ev.target) && nav.classList.contains('show')){
        closeMenu();
      }
    });

    // close with escape
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && nav.classList.contains('show')){
        closeMenu();
        menuToggle.focus();
      }
    });
  }
})();




// Avatar upload
const avatarInput = document.getElementById('avatarUpload');
const avatarImg = document.getElementById('avatar');
if (avatarInput && avatarImg) {
  avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) avatarImg.src = URL.createObjectURL(file);
  });
}

