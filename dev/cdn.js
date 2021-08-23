/* 以下為jQuery插入程式碼 */

document.write("<script src=\"https://code.jquery.com/jquery-3.5.1.js\">" + "<\/script>");

/* 以上為jQuery插入程式碼 */

/* 以下為本cdn內容 */

var ety = {
    empty: ""
}
var bjs = {
    set: "set",
    get: "get",
    src: "src",
    $empty: "",
    show: "show",
    hide: "hide",
    getlength: "getlength",
    string: "steing",
    add: "add",
    remove: "remove",

    random: (NBinput, floor, plus1, plese_dont_input) => {
        if (plus1) {
            NBinput ++;
        };
        if (floor) {
            plese_dont_input = Math.floor(Math.random()*NBinput);
        }else{
            plese_dont_input = Math.random()*NBinput;
        };
        return plese_dont_input;
    },
    text: (action, obj, text, plese_dont_input) => {
        if (action == bjs.get) {
            plese_dont_input = $(obj).text();
            return plese_dont_input;
        };

        if (action == bjs.set) {
            $(obj).text(text);
            return undefined;
        };
    },
    val: (action, obj, val, plese_dont_input) => {
        if (action == bjs.get) {
            plese_dont_input = $(obj).val();
            return plese_dont_input;
        };
    
        if (action == bjs.set) {
            $(obj).val(val);
            return undefined;
        };
    },
    css: (action, obj, a, b, plese_dont_input) => {
        if (action == bjs.get) {
            plese_dont_input = $(obj).css(a);
            return plese_dont_input;
        };
        
        if (action == bjs.set) {
            $(obj).css(a, b);
            return undefined;
        };
    },
    attr: (action, obj, a, b, plese_dont_input) => {
        if (action == bjs.get) {
            plese_dont_input = $(obj).attr(a);
            return plese_dont_input
        };
        
        if (action == bjs.set) {
            $(obj).attr(a, b);
            return undefined;
        };
    },
    data: (action, obj, a, b, plese_dont_input) => {
        if (action == bjs.get) {
            plese_dont_input = $(obj).data(a);
            return plese_dont_input;
        };

        if (action == bjs.set) {
            $(obj).data(a, b);
            return undefined;
        };
    },
    img: (action, obj, imgsrc, plese_dont_input) => {
        if (action == bjs.get) {
            plese_dont_input = $(obj).attr(src);
            return plese_dont_input;
        };
    
        if (action == bjs.set) {
            $(obj).attr(bjs.src, imgsrc);
            return undefined
        };
    },
    click: (obj, func) => {
        $(obj).click(func);
    },
    on: (action, obj, in_obj, func) => {
        $(obj).on(action, in_obj, func);
    },
    display: (action, obj) => {
        if (action == bjs.show) {
            $(obj).show();
        };

        if (action == bjs.hide) {
            $(obj).hide();
        };
    },
    empty: (obj) => {
        $(obj).empty();
    },
    class: (action, obj, $class) => {
        if (action == bjs.add) {
            $(obj).addClass($class);
        };

        if (action == bjs.remove) {
            $(obj).removeClass($class);
        };
    },
    append: (obj, input) => {
        $(obj).append(input);
    },
    keydown: (obj, func) => {
        $(obj).keydown(func);
    },
    keyup: (obj, func) => {
        $(obj).keyup(func)
    },
    toggle: (obj) => {
        $(obj).toggle()
    },
    keypress: (obj, func) => {
        $(obj).keypress(func);
    },
    children: (action, obj, obj2, plese_dont_input) => {
        if (action == bjs.getlength) {
            plese_dont_input = $(obj).children(obj2);
            plese_dont_input = plese_dont_input.length;
            return plese_dont_input;
        };
    },
    prop: (action, obj, a, b, plese_dont_input) => {
        if (action == bjs.get) {
            plese_dont_input = $(obj).prop(a);
            return plese_dont_input;
        };
    
        if (action == bjs.set) {
            $(obj).prop(a, b)
        };
    },
    scrollTop: (action, obj, input, plese_dont_input) => {
        if (action == bjs.get) {
            plese_dont_input = $(obj).scrollTop();
            return plese_dont_input;
        };
    
        if (action == bjs.set) {
            $(obj).scrollTop(input);
            return undefined
        };
    },
    fade: (action, obj) => {
        if (action == "Out") {
            $(obj).fadeOut();
        }

        if (action == "In") {
            $(obj).fadeIn();
        }
    }
};

/* 以上為本cdn內容 */