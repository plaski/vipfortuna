(function() {

  const menuToggle = () => {
    const menuBtn = document.getElementById('menuBtn');
    const menuList = document.getElementById('menuList');
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault(); 
      menuList.classList.toggle('opened')
    })
  }
  
  const init = function() {
    menuToggle()
  }
    init();
  })();