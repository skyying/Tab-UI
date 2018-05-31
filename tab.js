(function() {

    /**
     *  An tab item's data
     *  tabname will be shown as tab link text
     *  content will be displayed when click a tabname
     *  isCurrent is a state to check if this is a current tab
     *
     *  tabName : {
     *     content: {String},    
     *     isCurrent: {Boolean}
     *  }
     *
     */

    let data = {
        Red: {
            content: "Someone got married? ",
            isCurrent: true,
        },
        Blue: {
            content: "A calm color",
            isCurrent: false,
        },
        Yellow: {
            content: "A delightful color",
            isCurrent: false,
        },
    }


    // html element
    let main = document.getElementById("main");
    let tabs = document.getElementById("tabs");
    let display = document.getElementById("display");

    // create Tabs , assign an HTML element as container
    const createTabs = (parent) => {
        for (key in data) {
            let linkName = document.createElement('div');
            linkName.classList.add("link")
            linkName.innerHTML = key;
            if (data[key].isCurrent) {
                linkName.classList.add("current")
                console.log(linkName);
            }
            parent.appendChild(linkName);
        }
    }

    // reest tab style
    const changeStyle = (obj, bgColor, fontColor) => {
        obj.style.color = fontColor;
        obj.style.backgroundColor = bgColor;
    }

    // reset Current state
    const resetCurrent = (element) => {
        let nodes = tabs.childNodes;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].classList.contains('current')) {
                nodes[i].classList.remove('current');
                changeStyle(nodes[i], "white", "black");
            }
        }
        element.classList.add('current');
        changeStyle(element, "#0074D9", "white");
    }

    // create tabs, init current state on parents 
    const init = () => {
        createTabs(tabs);
        let nodes = tabs.childNodes;
        for (let i = 0; i < nodes.length; i++) {
            let name = nodes[i].innerHTML;
            if (data[name].isCurrent) {
                nodes[i].classList.add("current");
                display.innerHTML = data[name].content;
            }
        }
    }

    // add interaction
    tabs.addEventListener("click", e => {
        let name = e.target.innerHTML;
        display.innerHTML = data[name].content;
        for (key in data) {
            data[key].isCurrent = false;
        }
        resetCurrent(e.target);
        data[name].isCurrent = true;
    }, false);

    init();

})()
