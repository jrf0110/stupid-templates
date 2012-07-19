(function(name){
  var stupid = {
    compile: function(obj){
      var compiled = {};
      for (var key in obj){
        if (typeof obj[key] !== "string"){
          compiled[key] = compileTemplates(obj[key]);
        }else {
          // Create a function to be called (like other templating systems) for each template item
          compiled[key] = function(obj){
            var newHtml = this.html;
            for (var key in obj){
              newHtml = newHtml.replace(RegExp('{{' + key + '}}', 'g'), obj[key]);
            }
            return newHtml;
          }.bind({html: document.getElementById(obj[key]).innerHTML});
        }
      }
      return compiled;
    }
  };
  if (define) define(function(){ return stupid });
  else window[name] = stupid;
})('stupid');