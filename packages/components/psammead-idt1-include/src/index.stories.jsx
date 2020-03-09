import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withServicesKnob } from '@bbc/psammead-storybook-helpers';
import notes from '../README.md';
import Idt1Include from './index';

const requireJsSrc = `https://news.files.bbci.co.uk/include/vjassets/js/vendor/require-2.1.20b.min.js`;
// const fakeInclude = `<div id="placeholder">Uninitialised include</div>
// <div>
//   <script>
//     define('initialiser', function() {
//       var element = document.getElementById('placeholder');
//       element.innerHTML = 'Initialised include';
//     });

//     require(['initialiser'], function(initialiser) {
//       initialiser();
//     });
//   </script>
// </div>
// `;

//const fakeInclude = `<!DOCTYPE html><html lang="en"> <script type="text/javascript">var count=0; function incrementCount(cnt){count=cnt + 1; document.getElementById('count').innerHTML=count;}; function decrementCount(cnt){count=cnt - 1; document.getElementById('count').innerHTML=count;}; </script> <head> <style>html{display: inline-flex;}span{background-color: #333; border-radius: 3px; color: #fff; padding: 1px 5px;}button{background-color: #fff; border: 1px solid currentColor; border-radius: 3px; cursor: pointer; outline: 0;}button:active{background-color: #333; color: #fff;}button, span{margin: 0 2px;}</style> </head> <body> <div> <span id="count">0</span> <button onClick="incrementCount(count)">Increase Count</button> <button onClick="decrementCount(count)">Decrease Count</button> </div></body></html>`;

const fakeInclude = `<style>@-webkit-keyframes spinnerRotate{from{-webkit-transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);}}@-moz-keyframes spinnerRotate{from{-moz-transform:rotate(0deg);}to{-moz-transform:rotate(360deg);}}@-ms-keyframes spinnerRotate{from{-ms-transform:rotate(0deg);}to{-ms-transform:rotate(360deg);}}.bbc-news-visual-journalism-loading-spinner{display: block; margin: 10px auto; width: 33px; height: 33px; max-width: 33px; -webkit-animation-name: spinnerRotate; -webkit-animation-duration: 5s; -webkit-animation-iteration-count: infinite; -webkit-animation-timing-function: linear; -moz-animation-name: spinnerRotate; -moz-animation-duration: 5s; -moz-animation-iteration-count: infinite; -moz-animation-timing-function: linear; -ms-animation-name: spinnerRotate; -ms-animation-duration: 5s; -ms-animation-iteration-count: infinite; -ms-animation-timing-function: linear; background-image: url('data:image/gif;base64,R0lGODlhIQAhALMAAMPDw/Dw8BAQECAgIICAgHBwcKCgoDAwMFBQULCwsGBgYEBAQODg4JCQkAAAAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFFOTcwNTgzMDlCMjExRTQ4MDU3RThBRkIxMjYyOEYyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFFOTcwNTg0MDlCMjExRTQ4MDU3RThBRkIxMjYyOEYyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUU5NzA1ODEwOUIyMTFFNDgwNTdFOEFGQjEyNjI4RjIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUU5NzA1ODIwOUIyMTFFNDgwNTdFOEFGQjEyNjI4RjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQAAAAAACwAAAAAIQAhAAAE0vDJSScguOrNE3IgyI0bMIQoqUoF6q5jcLigsCzwJrtCAeSjDwoRAI4aLoNxxBCglEtJoFGUKFCEqCRxKkidoIP20aoVDaifFvB8XEGDseQEUjzoDq+87IijEnIPCSlpgWwhDIVyhyKKY4wOD3+BgyF3IXpjfHFvfYF4dmghalGQSgFgDmJaM2ZWWFEEKHYSTW1AojUMFEi3K7kgDRpCIUQkAcQgCDqtIT2kFgWpYVUaOzQ2NwvTIQfVHHw04iCZKibjNAPQMB7oDgiAixjzBOsbEQA7');}</style><script>define('vjCutsTheMustard', function cutsTheMustard(){return ( document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1') && 'querySelector' in document && 'localStorage' in window && 'addEventListener' in window );});</script><div id="5e57e13fcddb2"> <div id="5e57e13fcddb2-core-content"> <a href="//www.bbc.co.uk/indepthtoolkit/quizzes/sistema_solar_Quiz_Mundo">Haga clic para ver el contenido&#58; sistema_solar_Quiz_Mundo</a> </div></div><script type="text/javascript">require.config({paths:{'pym': '//static.bbc.co.uk/indepthtoolkit/15.3.0.361/js/vendor/bower/pym.js/dist/pym.v1.min', 'pymManager': '//static.bbc.co.uk/indepthtoolkit/15.3.0.361/js/vendor/bower/news-vj-iframe-wrapper/js/pym-manager'}}); require(['vjCutsTheMustard', 'pymManager'], function (cutsTheMustard, pymManager){if (cutsTheMustard){pymManager.init('5e57e13fcddb2', '//www.bbc.co.uk/indepthtoolkit/quizzes/sistema_solar_Quiz_Mundo?iframe=true&iframeUID=5e57e13fcddb2', 'pym', '5e57e13fcddb2-core-content');}});</script>`;

storiesOf('Components|Idt1Include', module)
  .addDecorator(withKnobs)
  .addDecorator(withServicesKnob())
  .add(
    'default',
    () => <Idt1Include html={fakeInclude} requireJsSrc={requireJsSrc} />,
    { notes },
  );