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
function FadeIntersectionObserver(cnodes, styleall) {
    let io = new IntersectionObserver((e) => {
        e.map(item => {
            if (item.isIntersecting) {
                let nodeMap = {
                    style: cnodes.getAttribute('style'),
                };
                //动画时间
                cnodes.setAttribute('style', `opacity: 0;
                ${animatorientation(styleall.orientation,1000)} ${nodeMap.style}`)
                setTimeout(res => {
                    cnodes.setAttribute('style', `opacity: 1;
                    ${animatorientation(styleall.orientation,0,true)} transition:${styleall.time}ms all;${nodeMap.style} `)
                }, 100)
            }
        })
    }, {});
    io.observe(cnodes);
}
//方位定向
function animatorientation(direction, px, istwo) {
    switch (direction) {
        case 'left':
            if (istwo) {
                return `transform: translateX(0px);`
            }
            return `transform: translateX(-10vw);`
            break;
        case 'top':
            if (istwo) {
                return `transform: translateY(0px);`
            }
            return `transform: translateY(-10vw);`
            break;
        case 'bottom':
            if (istwo) {
                return `transform: translateY(0px);`
            }
            return `transform: translateY(10vw);`
            break;
        case 'right':
            if (istwo) {
                return `transform: translateX(0px);`
            }
            return `transform: translateX(10vw);`
            break;
        default:
    }
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
//属性检索
function Attributesearch(cnodes) {
    if (cnodes.getAttribute('free')) {
        const keylength = cnodes.getAttribute('free').split('-');
        const Setstyle = {
            types: "",
            subclass: "",
            orientation: '',
            time: 1000
        };
        keylength.map((itme, index) => {
            switch (index) {
                case 0:
                    Setstyle.types = itme;
                    break;
                case 1:
                    Setstyle.subclass = itme;
                    break;
                case 2:
                    Setstyle.orientation = itme;
                    break;
                case 3:
                    Setstyle.time = itme;
                    break;
                default:
            }
        })
        FadeIntersectionObserver(cnodes, Setstyle);
    }
}
//检索载入
function resultisbot(cnodes) {
    try {
        if (cnodes) {
            if (cnodes.attributes) {
                Attributesearch(cnodes);
            }
        }
    }
    catch (err) {
        console.error(err.message);
    }
}
//初始化
function resultinit() {
    openNodes(document.body)
}

if (document.body && document.body.getElementsByTagName) {
    resultinit();
}
