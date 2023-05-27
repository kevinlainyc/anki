const beautify = require("js-beautify").html;

function formatHTML(htmlString) {
  const formattedHTML = beautify(htmlString, {
    indent_size: 2,
    wrap_attributes: "auto",
    preserve_newlines: false,
  });

  return formattedHTML;
}

const htmlString =
  '<div><blockquote><div>优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：</div>\n<ul>\n<li>如果存在内联样式，那么 <code>A = 1</code>，否则 <code>A = 0</code> ；</li>\n<li>B 的值等于 <code>ID选择器（#id）</code> 出现的次数；</li>\n<li>C 的值等于 <code>类选择器（.class）</code> 和 <code>属性选择器（a[href="https://example.org"]）</code> 和 <code>伪类（:first-child）</code> 出现的总次数；</li>\n<li>D 的值等于 <code>标签选择器（h1,a,div）</code> 和 <code>伪元素（::before,::after）</code> 出现的总次数。</li>\n</ul>\n</blockquote>\n<blockquote>\n<div>从左至右比较，如果是样式优先级相等，取后面出现的样式。</div></blockquote></div>';

const formattedHTML = formatHTML(htmlString);
console.log(formattedHTML);
