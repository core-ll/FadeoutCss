function Fadeout() { }
function animationclass(name) {
    //渐出

}
//加载资源方法
function loadStyle(url) {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = url
    const head = document.getElementsByTagName('head')[0]
    head.appendChild(link)
}
function loadscript(url) {
    const link = document.createElement('script')
    link.src = url
    const head = document.getElementsByTagName('body')[0]
    head.appendChild(link)
}
//监听dom
function FadeIntersectionObserver(cnodes) {
    let io = new IntersectionObserver((e) => {
        e.map(item => {
            if (item.isIntersecting) {
                console.log(item);
                let nodeMap = {
                    result: cnodes.getAttribute('free').split('-')[0],
                    class: cnodes.getAttribute('class'),
                };
                cnodes.setAttribute('class', `free-lode-up-left ${nodeMap.class}`)
            }
        })
    }, {});
    io.observe(cnodes);
}
//  递归函数
function openNodes(node) {
    //  判断是否存在子节点
    if (node.hasChildNodes()) {
        //  获取子节点
        let cnodes = node.childNodes;
        //  对子节点进行递归处理
        for (let i = 0; i < cnodes.length; i++) {
            resultisbot(cnodes[i])
            reviewnode(cnodes[i])
        }
    }
}
//检索dom节点下是否存在标识属性
function reviewnode(cnodes) {
    if (cnodes) {
        let cnodesnext = cnodes.childNodes;
        for (let reviewnodeitem = 0; reviewnodeitem < cnodes.childNodes.length; reviewnodeitem++) {
            resultisbot(cnodesnext[reviewnodeitem])
            reviewnode(cnodesnext[reviewnodeitem])
        }
    }
}
//检索载入
function resultisbot(cnodes) {
    try {
        if (cnodes) {
            if (cnodes.attributes) {
                // free 动画
                if (cnodes.getAttribute('free')) {
                    FadeIntersectionObserver(cnodes);
                }
            }
        }
    }
    catch (err) {
        console.error(err.message);
    }
}
//初始化
function resultinit() {
    loadStyle('./style/Fadeout.css');
    openNodes(document.body)
}

if (document.body && document.body.getElementsByTagName) {
    resultinit();
}
