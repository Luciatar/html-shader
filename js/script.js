const SHADED=document.querySelectorAll('div');
const root = document.documentElement
const light = {
  x: innerWidth/2,
  y: innerHeight/2
}
addCss()
function calcPosition(){
  for( let i=0; i< SHADED.length; i++){
    let cssVarName="--shdw-ele-"+i;
    let hOff, vOff, blur,spread;
    let x =SHADED[i].getBoundingClientRect().x- (SHADED[i].getBoundingClientRect().width/2);
    let y =SHADED[i].getBoundingClientRect().y- (SHADED[i].getBoundingClientRect().height/2);
    hOff = light.x - x;
    vOff = light.y - y;
    root.style.setProperty(cssVarName+"-x", hOff + "px");
    root.style.setProperty(cssVarName+"-y", vOff + "px");
  }

}
function addCss(){
  for( let i=0; i< SHADED.length; i++){
    let cssVarName="--shdw-ele-"+i;
    let hOff, vOff, blur,spread;
    let x =SHADED[i].getBoundingClientRect().x- (SHADED[i].getBoundingClientRect().width/2);
    let y =SHADED[i].getBoundingClientRect().y- (SHADED[i].getBoundingClientRect().height/2);
    hOff = (light.x - x)*0.1;
    vOff = (light.y - y)*0.1;
    root.style.setProperty(cssVarName+"-x", hOff + "px");
    root.style.setProperty(cssVarName+"-y", vOff + "px");
    SHADED[i].style.cssText=" box-shadow: inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%),  var("+cssVarName+"-x) var("+cssVarName+"-y) 20px rgb(50 50 93 / 85%)";
  }

}


function calcShadow(objHeight, angleSunHorizon){
  let len = objHeight/Math.tan(angleSunHorizon);
  return len;
}