var tree = {
    left: {
        left: {
            left: null,
            right: null,
            val: 2
        },
        right: {
            left: null,
            right: null,
            val: 4
        },
        val: 3
    },
    right: {
        left: {
            left: null,
            right: null,
            val: 6
        },
        right: {
            left: null,
            right: {
                left: null,
                right: null,
                val: 9
            },
            val: 8
        },
        val: 7
    },
    val: 5
}

var inListRec = []; //定义保存中序遍历结果的数组

//递归遍历
var inOrderRec = function (node) {
    if (node) { //判断二叉树是否为空
        inOrderRec(node.left); //递归遍历左子树
        inListRec.push(node.value); //将结点的值存入数组中
        inOrderRec(node.right); //递归遍历右子树
    }
}
inOrderRec(tree);
console.log(inListRec);
//  ["a", "+", "b", "*", "c", "-", "d", "/", "e"]


//非递归遍历
var inListUnRec = []
var inOrderUnRec = function (node) {
    if (node) { //判断二叉树是否为空
        var stack = []; //建立一个栈
        while (stack.length !== 0 || node) { //如果栈不为空或结点不为空，则循环遍历
            if (node) { //如果结点不为空
                stack.push(node); //将结点压入栈
                node = node.left; //将左子树作为当前结点
            } else { //左子树为空，即没有左子树的情况
                node = stack.pop(); //将结点取出来
                inListUnRec.push(node.value); //将取出结点的值存入数组中
                node = node.right; //将右结点作为当前结点
            }
        }
    }
}
inOrderUnRec(tree);
console.log(inListUnRec);