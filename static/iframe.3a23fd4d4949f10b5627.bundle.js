(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{246:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(65),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(196);function _templateObject(){var data=function(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n  background: none;\n  color: ",";\n  border: 2px solid ",";\n"]);return _templateObject=function(){return data},data}var styledExampleButton=__webpack_require__(28).default.button(_templateObject(),function(props){return props.theme.colour},function(props){return props.theme.borderColour}),src_ExampleButton=function(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,children=_ref.children,onClick=_ref.onClick;return react_default.a.createElement(styledExampleButton,{disabled:disabled,type:type,className:"button",onClick:onClick},children)};src_ExampleButton.propTypes={type:prop_types.string.isRequired,disabled:prop_types.bool,children:prop_types.element.isRequired,onClick:prop_types.func.isRequired},src_ExampleButton.defaultProps={disabled:!1};__webpack_exports__.a=src_ExampleButton;src_ExampleButton.__docgenInfo={description:"",methods:[],displayName:"ExampleButton",props:{type:{defaultValue:{value:"'button'",computed:!1},type:{name:"string"},required:!1,description:""},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},children:{type:{name:"element"},required:!0,description:""},onClick:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/example-button/src/index.jsx"]={name:"ExampleButton",docgenInfo:src_ExampleButton.__docgenInfo,path:"packages/components/example-button/src/index.jsx"})},471:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Headline}),__webpack_require__.d(__webpack_exports__,"b",function(){return SubHeading});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(28),_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(726),_bbc_psammead_styles_fonts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(472),_bbc_gel_constants_spacings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(245),_bbc_gel_foundations_styled_components_typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(473);function _templateObject2(){var data=_taggedTemplateLiteral(["\n  color: red;\n  font-family: ",";\n  margin: 0; /* Reset */\n  padding: "," 0;\n  font-weight: 400;\n  ",";\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=_taggedTemplateLiteral(["\n  color: ",";\n  font-family: ",";\n  margin: 0; /* Reset */\n  padding: "," 0 "," 0;\n  ",";\n"]);return _templateObject=function(){return data},data}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var Headline=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h1(_templateObject(),_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_1__.C_EBON,_bbc_psammead_styles_fonts__WEBPACK_IMPORTED_MODULE_2__.FF_NEWS_SERIF_MDM,_bbc_gel_constants_spacings__WEBPACK_IMPORTED_MODULE_3__.GEL_SPACING_QUAD,_bbc_gel_constants_spacings__WEBPACK_IMPORTED_MODULE_3__.GEL_SPACING_DBL,_bbc_gel_foundations_styled_components_typography__WEBPACK_IMPORTED_MODULE_4__.GEL_CANON),regexPunctuationSymbols=/[^a-z0-9\s-]/gi,regexSpaces=/\s+/g,SubHeading=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h2.attrs(function(_ref){return{id:_ref.text.replace(regexPunctuationSymbols,"").replace(regexSpaces,"-"),tabIndex:"-1"}})(_templateObject2(),_bbc_psammead_styles_fonts__WEBPACK_IMPORTED_MODULE_2__.FF_NEWS_SANS_REG,_bbc_gel_constants_spacings__WEBPACK_IMPORTED_MODULE_3__.GEL_SPACING_DBL,_bbc_gel_foundations_styled_components_typography__WEBPACK_IMPORTED_MODULE_4__.GEL_TRAFALGAR)},725:function(module,exports){module.exports="# Example Button\n\n### Hello Example Button Readme.md"},728:function(module,__webpack_exports__,__webpack_require__){"use strict";var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(28),_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(729),_bbc_psammead_styles_fonts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(730),_bbc_gel_constants_spacings__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(731),_bbc_gel_foundations_styled_components_typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(732);function _templateObject(){var data=function(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  color: ",";\n  font-family: ",";\n  padding-bottom: ",";\n  margin: 0; /* Reset */\n  ",";\n"]);return _templateObject=function(){return data},data}var Paragraph=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p(_templateObject(),_bbc_psammead_styles_colours__WEBPACK_IMPORTED_MODULE_1__.C_STORM,_bbc_psammead_styles_fonts__WEBPACK_IMPORTED_MODULE_2__.FF_NEWS_SANS_REG,_bbc_gel_constants_spacings__WEBPACK_IMPORTED_MODULE_3__.GEL_SPACING_DBL,_bbc_gel_foundations_styled_components_typography__WEBPACK_IMPORTED_MODULE_4__.GEL_BODY_COPY);__webpack_exports__.a=Paragraph},733:function(module,__webpack_exports__,__webpack_require__){"use strict";function _templateObject(){var data=function(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  clip-path: inset(100%);\n  clip: rect(1px, 1px, 1px, 1px);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  width: 1px;\n"]);return _templateObject=function(){return data},data}var VisuallyHiddenText=__webpack_require__(28).default.span(_templateObject());__webpack_exports__.a=VisuallyHiddenText},734:function(module,exports,__webpack_require__){__webpack_require__(247),__webpack_require__(735),module.exports=__webpack_require__(736)},736:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(56),_storybook_addon_options__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(720),styled_normalize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(721),styled_normalize__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_3__),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(28);function _templateObject(){var data=function(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  ","\n\n  /* Box Sizing https://bit.ly/1A91I0J */\n  html {\n    box-sizing: border-box;\n    font-size: 100%;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  @font-face {\n    font-display: optional;\n    font-family: ReithSansNewsRegular;\n    font-style: normal;\n    font-weight: 400;\n    src: url('https://gel.files.bbci.co.uk/r2.302/BBCReithSans_W_Rg.woff2') format('woff2'), url('https://gel.files.bbci.co.uk/r2.302/BBCReithSans_W_Rg.woff') format('woff');\n  }\n  @font-face {\n    font-display: optional;\n    font-family: ReithSerifNewsMedium;\n    font-style: normal;\n    font-weight: 600;\n    src: url('https://gel.files.bbci.co.uk/r2.302/BBCReithSerif_W_Md.woff2') format('woff2'), url('https://gel.files.bbci.co.uk/r2.302/BBCReithSerif_W_Md.woff') format('woff');\n  }\n"]);return _templateObject=function(){return data},data}Object(_storybook_addon_options__WEBPACK_IMPORTED_MODULE_2__.setOptions)({name:"Psammead",url:"https:github.com/bbc/carl",addonPanelInRight:!0,sidebarAnimations:!0});var GlobalStyle=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__.createGlobalStyle)(_templateObject(),styled_normalize__WEBPACK_IMPORTED_MODULE_3___default.a);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyle,null),story())}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(function(){__webpack_require__(762)},module)}.call(this,__webpack_require__(132)(module))},762:function(module,exports,__webpack_require__){module.exports={"../packages/components/example-button/src/index.stories.jsx":__webpack_require__(763),"../packages/components/psammead-headings/src/index.stories.jsx":__webpack_require__(836),"../packages/components/psammead-paragraph/src/index.stories.jsx":__webpack_require__(843),"../packages/components/psammead-visually-hidden-text/src/index.stories.jsx":__webpack_require__(852)}},763:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(56),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(195),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(28),_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(129),storybook_readme__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(724),_README_md__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(725),_README_md__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_README_md__WEBPACK_IMPORTED_MODULE_6__),___WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(246);function _templateObject(){var data=function(strings,raw){raw||(raw=strings.slice(0));return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  width: 200px;\n"]);return _templateObject=function(){return data},data}var StyledContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div(_templateObject());Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("ExampleButton",module).addDecorator(Object(storybook_readme__WEBPACK_IMPORTED_MODULE_5__.withReadme)(_README_md__WEBPACK_IMPORTED_MODULE_6___default.a)).addDecorator(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.withKnobs).add("with text",function(){var disabled=Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.boolean)("Disabled",!1);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_7__.a,{disabled:disabled,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Example Button"))}).add("with emojis",function(){var disabled=Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.boolean)("Disabled",!1);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_7__.a,{disabled:disabled,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"emoji"},"😀 😎 👍 💯")))}).add("with a theme provider",function(){var disabled=Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.boolean)("Disabled",!1),theme={colour:Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.color)("Text Colour","#ededed"),borderColour:Object(_storybook_addon_knobs_react__WEBPACK_IMPORTED_MODULE_4__.color)("Border Colour","#000000")};return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider,{theme:theme},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledContainer,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_7__.a,{disabled:disabled,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Example Button")))})}.call(this,__webpack_require__(132)(module))},836:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(56),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(471);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Headline",module).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.a,null,"This is my headline.")}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("SubHeading",module).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.b,{text:"This is a SubHeading"},"This is a SubHeading")})}.call(this,__webpack_require__(132)(module))},843:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(727),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(56),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(728);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Paragraph",module).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.a,null,"This is text in a paragraph.")})}.call(this,__webpack_require__(132)(module))},852:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(56),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(733);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("VisuallyHiddenText",module).add("default",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_index__WEBPACK_IMPORTED_MODULE_2__.a,null,"Some offscreen text")})}.call(this,__webpack_require__(132)(module))}},[[734,2,4]]]);
//# sourceMappingURL=iframe.3a23fd4d4949f10b5627.bundle.js.map