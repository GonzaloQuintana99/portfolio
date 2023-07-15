(() => { 

    const cursor = document.querySelector('.cursor');
 
    document.addEventListener('mousemove', e => {
       cursor.setAttribute('style', `top:  ${e.pageY - 0.5}px; left: ${e.pageX - 0.5}px;`);
  });
 })();
 
 