(function () {
    let index = 4;
    let dom_yymbox = document.querySelector("#yymbox");

    let Special_dom_list = {};

    //项目点击功能,<button>自动点击</button>
    yymbox.data[index].func = (e, item) => {
        let state = yymbox.is_stick(e);
    };




    // ==================================================================================================
    // ==================================================================================================
    // ==================================================================================================
    // ==================================================================================================
    // ==================================================================================================

    //项目子菜单的按钮功能。

    // ==================================================================================================
    //                                              樱花飘落
    // ==================================================================================================
    yymbox.data[index].children[0].func = (e, item) => {
        let state = yymbox.is_stick(e);
        if (state) {
            yymbox.my_append(YYM, "script", { src: `${yymbox.yymbox_url}/yymbox/背景-樱花飘落.js` }).then(el => Special_dom_list["樱花飘落"] = el);
        } else {
            Special_dom_list["樱花飘落"].remove();
            document.querySelector("#canvas_sakura").remove();
        }
    };
    // ==================================================================================================
    //                                               。。。。
    // ==================================================================================================

    yymbox.data[index].children[1].func = (e, item) => {
        let state = yymbox.is_stick(e);
    };

    // ==================================================================================================
    // ==================================================================================================

    //使用说明。
    // yymbox.data[index].children[2].func = (e, item) => {
    // }
    // ==================================================================================================
    // ==================================================================================================
    // ==================================================================================================
    // ==================================================================================================
    // ==================================================================================================



})()