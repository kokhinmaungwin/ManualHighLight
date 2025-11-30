(function(){
// Run when DOM ready
function run(fn){
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
}
  
run(function(){
function waitHighlight(cb){
    let n = 0;
const timer = setInterval(()=>{
    if (typeof manualHighlight === "function"){
    clearInterval(timer);
    cb();
}
    if (n++ > 5){   // timeout after
    clearInterval(timer);
    cb();
    }
  }, 15);
}
  
waitHighlight(function(){
function escapeHtml(str){
   return str.replace(/&/g,"&amp;")
                  .replace(/</g,"&lt;")
                  .replace(/>/g,"&gt;");
}

// Render single box
function renderBox(box){
const ta = box.querySelector("textarea.codeData");
const preview = box.querySelector(".broPreview");
    if (!ta || !preview) return;
    let raw = ta.textContent.replace(/^\n+/, "");

// highlight or plain render
    if (typeof manualHighlight === "function"){
    try {
    preview.innerHTML = manualHighlight(raw);
         } catch(e){
    preview.textContent = raw;
         }
         } else {
    preview.innerHTML = escapeHtml(raw);
  }
}

// Render all boxes
function renderAll(){
document.querySelectorAll(".broCodeBox").forEach(renderBox);
}

// Copy handling
function copyText(text){
        if (navigator.clipboard){
          return navigator.clipboard.writeText(text);
        }
        return new Promise((resolve,reject)=>{
          const t = document.createElement("textarea");
          t.value = text;
          t.style.position = "fixed";
          t.style.left = "-9999px";
          document.body.appendChild(t);
          t.select();
          try {
            document.execCommand("copy");
            document.body.removeChild(t);
            resolve();
          } catch(e){
            document.body.removeChild(t);
            reject(e);
       }
   });
}

function attachCopy(){
document.querySelectorAll(".broCodeBox").forEach(box=>{
const btn = box.querySelector(".broCopyBtn");
const ta = box.querySelector("textarea.codeData");
          if (!btn || btn._attached) return;
          btn._attached = true;
          btn.addEventListener("click", ()=>{
            let raw = ta.textContent.replace(/^\n+/, "");
            copyText(raw).then(()=>{
              let old = btn.innerText;
              btn.innerText = "Copied!";
              setTimeout(()=> btn.innerText = old, 1200);
          });
      });
  });
}
// Start FAST
      renderAll();
      attachCopy();

// For dynamic usage
      window.broRenderAll = renderAll;
      window.broAttachCopy = attachCopy;
    }); 
  }); 
})();
