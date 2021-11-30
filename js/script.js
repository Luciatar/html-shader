const SHADED = document.querySelectorAll('.shdw');

const root = document.documentElement
const light = {
  x: innerWidth / 2,
  y: innerHeight / 2
}
const mouse = {
  x: 0,
  y: 0
}
window.addEventListener('mousemove', function (e) {
  mouse.x = e.clientX
  mouse.y = e.clientY

})
addCss()
setInterval(() => {
  update()
}, 80);

const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

function addCss() {
  for (let i = 0; i < SHADED.length; i++) {
    let cssVarName = "--shdw-ele-" + i;
    let hOff, vOff, blur, spread;
    let x = SHADED[i].getBoundingClientRect().left + (SHADED[i].getBoundingClientRect().width / 2);
    let y = SHADED[i].getBoundingClientRect().top + (SHADED[i].getBoundingClientRect().height / 2);
    hOff = Math.floor(-(mouse.x - x) * 0.01);
    vOff = Math.floor(-(mouse.y - y) * 0.01);
    let a = Math.floor(mouse.x - x);
    let b = Math.floor(mouse.y - y);
    blur = Math.sqrt(a * a + b * b)
    root.style.setProperty(cssVarName + "-x", hOff + "vw");
    root.style.setProperty(cssVarName + "-y", vOff + "vw");
    root.style.setProperty(cssVarName + "-b", blur + "vw");



    SHADED[i].style.cssText = `box-shadow: inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%), var(${ cssVarName }-x) var( ${ cssVarName }-y) var( ${ cssVarName }-b) rgb(50 50 93 / 85%), 0 0 0.1vw  rgb(50 50 93 / 85%); 
      
    text-shadow:  calc(var( ${ cssVarName }-x)* .3) calc(var( ${ cssVarName }-y)* .3) 2px  rgb(50 50 93 / 85%), 0 0 0.1vw  rgb(50 50 93 / 85%)`;
   
  }

}

function update() {
  for (let i = 0; i < SHADED.length; i++) {
    let cssVarName = "--shdw-ele-" + i;
    let hOff, vOff, blur, spread;
    let x = SHADED[i].getBoundingClientRect().x + (SHADED[i].getBoundingClientRect().width / 2);
    let y = SHADED[i].getBoundingClientRect().y + (SHADED[i].getBoundingClientRect().height / 2);
    let a = Math.floor(mouse.x - x);
    let b = Math.floor(mouse.y - y);

    blur = Math.floor(Math.sqrt(a * a + b * b) * 0.1) //distance
    hOff = map( -a * 0.004,0,15, 0, 5 );
    vOff = map( -b * 0.004,0,15, 0, 5);


    root.style.setProperty(cssVarName + "-x", hOff + "vw");
    root.style.setProperty(cssVarName + "-y", vOff + "vw");
    root.style.setProperty(cssVarName + "-b", blur*0.005  + "vw");
  }

}


function calcShadow(objHeight, angleSunHorizon) {
  let len = objHeight / Math.tan(angleSunHorizon);
  return len;
}


