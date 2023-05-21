# IT::Frontend_Monitor::Concept

## Why does composedPath on event returns different value when delayed

Why event.composedPath() is empty array when inside `setTimeout`?

%

When you call event.composedPath() inside a setTimeout/async callback, it's possible for the method to return an empty array. This behavior occurs because the setTimeout callback is executed asynchronously. By the time the callback is invoked, the event has already finished propagating through the DOM, and the event's path information may no longer be available.

[#Frontend_Monitor::Basic]

## How to detect blank screen

%

elementsFromPoints(x, y)

在页面中由内向外分别取若干个点（比如 20 个），然后通过 document.elementsFromPoint(x, y) 方法获取这些点所在的 DOM 元素，如果这些点所在的 DOM 元素都是空元素，那么就可以认为页面是空白页面

[#Frontend_Monitor::Basic]

## How to mointor dom performance?

%

1. PerformanceResourceTiming

- retrieval and analysis of detailed network timing data regarding the loading of an application's resources
- [PerformanceResourceTiming](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming)

2. PerformanceObserver

- used to observe performance measurement events and be notified of new performance entries as they are recorded in the browser's performance timeline
- [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver)

[#Frontend_Monitor::Basic]

## List several import timing metrics

%

- FP (first paint): when the browser renders the first pixel on the screen
- FCP (first contentful paint): when the browser renders the first bit of content on the screen
- FMP (first meaningful paint): when the browser renders the first bit of content on the screen that is useful to the user
- LCP (largest contentful paint): when the browser renders the largest bit of content on the screen
- DCL (DOMContentLoaded): when the browser finishes parsing the HTML and has built the DOM tree (hanppen before onLoad)
- L (onload): when the browser finishes loading all the resources on the page
- TTI (time to interactive): when the browser is capable of responding to user interactions quickly
- FID (first input delay): when the browser responds to the first user interaction
- These metrics can be seen in chrome dev tool (Performance tab)

[#Frontend_Monitor::Basic]

## How to flag an element for FMP tracking?

%

- set 'elementtiming' attribute on the element
- [elementtiming](https://developer.mozilla.org/en-US/docs/Web/API/ElementTiming)

[#Frontend_Monitor::Basic]

## Why use gif instead of get/post or text/js to send request?

%

向服务器端上报数据，可以通过请求接口，请求普通文件，或者请求图片资源的方式进行。只要能上报数据，无论是请求GIF文件还是请求js文件或者是调用页面接口，服务器端其实并不关心具体的上报方式。那为什么所有系统都统一使用了请求GIF图片的方式上报数据呢？

1. 防止跨域

- 一般而言，打点域名都不是当前域名，所以所有的接口请求都会构成跨域。而跨域请求很容易出现由于配置不当被浏览器拦截并报错，这是不能接受的。但图片的src属性并不会跨域，并且同样可以发起请求。（排除接口上报）

2. 防止阻塞页面加载，影响用户体验

- 通常，创建资源节点后只有将对象注入到浏览器DOM树后，浏览器才会实际发送资源请求。反复操作DOM不仅会引发性能问题，而且载入js/css资源还会阻塞页面渲染，影响用户体验。
- 但是图片请求例外。构造图片打点不仅不用插入DOM，只要在js中new出Image对象就能发起请求，而且还没有阻塞问题，在没有js的浏览器环境中也能通过img标签正常打点，这是其他类型的资源请求所做不到的。（排除文件方式）

3. 相比PNG/JPG，GIF的体积最小

- 最小的BMP文件需要74个字节，PNG需要67个字节，而合法的GIF，只需要43个字节。
- 同样的响应，GIF可以比BMP节约41%的流量，比PNG节约35%的流量。
- 并且大多采用的是1*1像素的透明GIF来上报
- 1x1像素是最小的合法图片。而且，因为是通过图片打点，所以图片最好是透明的，这样一来不会影响页面本身展示效果，二者表示图片透明只要使用一个二进制位标记图片是透明色即可，不用存储色彩空间数据，可以节约体积。