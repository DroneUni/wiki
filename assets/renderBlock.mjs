window.addEventListener('load', ()=>{
    const version = window.location.pathname.split('/')[1];
    const canvasArray = document.querySelectorAll('canvas[data-block]');
    canvasArray.forEach(canvas=>{
        const ctx = canvas.getContext('2d');
        const image = new Image();
        image.addEventListener('load', ()=>{
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image,0,0);
        });
        image.src = `/images/${version}/blocks/${canvas.getAttribute('data-block')}.png`;
    });
});