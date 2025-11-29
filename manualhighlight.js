function manualHighlight(code) {
// Escape HTML entities
  code = code.replace(/&/g, '&amp;').replace(/</g, "&lt;").replace(/>/g, "&gt;");

// 1. Strings highlight FIRST (double, single, template)
  code = code.replace(/("(?:\\.|[^"])*"|'(?:\\.|[^'])*'|`(?:\\.|[^`])*`)/g,
    '<span style="color:#f1c40f;">$1</span>');
    
// 2.   
  code = code.replace(/(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}))(?![^<]*>)/g, m =>
  `<span style="color:#27ae60;">${m}</span>`);

// 3. Keywords 
  code = code.replace(/\b(const|let|var|return|if|else|for|while|class|new|this|switch|export|import|try|catch)\b/g, '<span style="color:#d35400;">$1</span>');
  
// 4. Functions
  code = code.replace(/\b(function|console|log|fetch|alert|setTimeout|setInterval)\b/g, '<span style="color:#8e44ad;">$1</span>');
  
// 5.
  code = code.replace(/(\(\)\s*=>\s*\{\})/g, '<span style="color:#9b59b6;">$1</span>');
  
// 6. Objects
  code = code.replace(/\b(document|window|Math|JSON)\b/g, '<span style="color:#f39c12;">$1</span>');
 
// 7. 
  code = code.replace(/\b(innerHTML|innerText|text|onclick|clipboard|value)\b/g, '<span style="color:#b5cea8;">$1</span>');

// 8. HTML attributes
  code = code.replace(/\b(id|src|href|type|value|name)=/gi,
    '<span style="color:#00FF00;">$1</span>=');
 
// 9. HTML tags
  code = code.replace(/(&lt;\/?[a-zA-Z0-9\-]+[^&]*?&gt;)/g,
    '<span style="color:#569cd6;">$1</span>');

// 10.
  code = code.replace(/(\/\*[\s\S]*?\*\/|\/\/.*$)/gm, '<span style="color:#34495e;">$1</span>');
 
// 11. Function names - cyan
  code = code.replace(/\b([a-zA-Z_]\w*)(?=\s*\()/g, '<span style="color:#4ec9b0;">$1</span>');
  
// 12. CSS properties
  code = code.replace(/\b(-color|padding|margin|font|border|display|position|top|left|right|bottom|gap|width|height|overflow|white|break)\b/g,
    '<span style="color:#d7ba7d;">$1</span>');

// 13.  
  code = code.replace(/\b(background|x|y|max|space|wrap|cursor|radius|size|family|box-shadow|text-align|align-items|justify-content|flex-direction|resize)\b/g, '<span style="color:#f39c12">$1</span>');
 
// 14. 
  code = code.replace(/\b(auto|none|absolute|vertical|pointer|word)\b/g,
    '<span style="color:#16a085;">$1</span>');
  
// 15. CSS values (px, %, rem, em)
  code = code.replace(
    /(px|%|rem|em|vh)/g, '<span style="color:#a29bfe;">$1</span>' );

// 16.    
  code = code.replace(
  /(\+|\{|\}|\[|\]|\.)/g,
  '<span style="color:#FF00FF;">$1</span>');

// 17. Numbers 
  code = code.replace(
    /\b(\d+)\b/g,
    '<span style="color:#e74c3c;">$1</span>');
  
// 18. 
  code = code.replace(
    /(\-|\*|\_|\,|\(|\)|\!|\$)/g,
    '<span style="color:#6a9955;">$1</span>');
    
// 19. 
  code = code.replace(/(&lt;|&gt;|&amp;|&quot;|&#39;)/g,
  '<span style="color:#922b21;">$1</span>');
  
   return code;
}
window.manualHighlight = manualHighlight;
