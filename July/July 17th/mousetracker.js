let handleMousemove = (event) => {
    console.log(`mouse position: ${event.x}:${event.y}`);
    if(event.x > 400) {
        body {background-color: violet}
    }
    };
  
  document.addEventListener('mousemove', handleMousemove);