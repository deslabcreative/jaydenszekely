(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{139:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return m}),t.d(a,"pageQuery",function(){return d});t(48);var n=t(7),r=t.n(n),o=t(0),l=t.n(o),i=t(4),s=t.n(i),u=t(148),c=(t(153),t(149)),p=t(150),m=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return l.a.createElement(p.a,null,l.a.createElement(c.a,null,"Portfolio"),l.a.createElement("div",{className:"article"},e.map(function(e){var a=e.node;return l.a.createElement(u.Link,{to:a.fields.slug},l.a.createElement("div",{className:"listing",key:a.id,style:{backgroundImage:'url("'+a.frontmatter.portfolioImage+'")'}},l.a.createElement("div",{className:"glaze"},l.a.createElement("h1",null,a.frontmatter.portfolioName),a.frontmatter.jobDate)))})))},a}(l.a.Component);m.propTypes={data:s.a.shape({allMarkdownRemark:s.a.shape({edges:s.a.array})})};var d="3838764722"}}]);
//# sourceMappingURL=component---src-templates-portfolio-page-js-277695385d17d9d998c2.js.map