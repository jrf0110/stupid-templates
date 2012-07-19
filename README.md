#Stupid Templates

They're pretty fuckin' stupid; Check it out:

```html
<!DOCTYPE HTML>
<html>
  <head>
    <script data-main="js/app.js" src="js/jam/require.js"></script>
  </head>
  <body>
    <div id="app-container"></div>
    <!-- Put your stupid ass templates in the body -->

    <!-- ##################### -->
    <!-- PAGE DEFAULT TEMPLATE -->
    <!-- ##################### -->
    <script id="page-default-tmpl" type="text/template">
      <div class="page">
        {{content}}
      </div>
    </script>

    <!-- ################### -->
    <!-- APP HEADER FRAGMENT -->
    <!-- ################### -->
    <script id="app-header-tmpl" type="text/template">
      <div class="inline-columns">
        <div class="column left">
          <button class="btn huge-btn blue-btn go-back">Back</button>
        </div>
        <div class="column right">
          <img class="logo" src="{{logo}}" />
        </div>
      </div>
    </script>

    <!-- ####################### -->
    <!-- APP SUB-HEADER FRAGMENT -->
    <!-- ####################### -->
    <script id="app-sub-header-tmpl" type="text/template">
      <div class="column left">
        <div class="module how-to">
          <h3 class="title">How to Earn Points</h3>
          <dl class="how-to-legend">
            <div class="row inline-columns">
              <dt class="column key">Punching Someone</dt>
              <dd class="column value">10 Points</dd>
            </div>
            <div class="row inline-columns">
              <dt class="column key">Punching Someone +<br />Post to Facebook</dt>
              <dd class="column value">15 Points</dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="column right" id="your-points-container">{{yourPoints}}</div>
    </script>
  </body>
</html>
```

```javascript
/**
 * templates.js
 */

define(function(require){
  var stupid = require('stupid-templates');

  // Specify an arbitrarily deep object that eventually resolves to element ID's
  var templates           = {};
  templates.pages         = {};
  template.pages.default  = "page-default-tmpl";
  template.pages.snazzy   = "page-snazzy-tmpl";
  templates.appHeader     = "app-header-tmpl";
  templates.appSubHeader  = "app-sub-header-tmpl";

  // Pass your id objects into stupid.compile and get your stupid ass template functions back
  templates = stupid.compile(templates);
  return templates;
});
```

```javascript
/**
 * app.js
 */

define(function(require){
  var
    domready  = require('domready')
  , templates = require('templates')
  ;

  domready(function(){
    // you get the picture
    document.getElementById('app-container').innerHTML = templates.pages.default({
      content: "Your shitty content"
    });
  });
});
```