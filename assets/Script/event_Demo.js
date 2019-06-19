cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            console.log("节点内触摸")
        }, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            console.log("触摸检测移动")
        }, this)
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log("节点内触摸离开")
        }, this)
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            console.log("节点外触摸离开")
        }, this)
    },

    start() {

    },

    // update (dt) {},
});