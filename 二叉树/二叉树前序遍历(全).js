var tree = {
    value: "-",
    left: {
        value: '+',
        left: {
            value: 'a',
        },
        right: {
            value: '*',
            left: {
                value: 'b',
            },
            right: {
                value: 'c',
            }
        }
    },
    right: {
        value: '/',
        left: {
            value: 'd',
        },
        right: {
            value: 'e',
        }
    }
}


var preListRec = []; //定义保存先序遍历结果的数组

// 递归遍历 
var preOrderRec = function (node) {
    if (node) { //判断二叉树是否为空
        preListRec.push(node.value); //将结点的值存入数组中
        preOrderRec(node.left); //递归遍历左子树
        preOrderRec(node.right); //递归遍历右子树
    }
}
preOrderRec(tree);
console.log(preListRec);
// ["-", "+", "a", "*", "b", "c", "/", "d", "e"]

//非递归遍历
var preListUnRec = []
var preOrderUnRecursion = function (node) {
    if (node) { //判断二叉树是否为空
        var stack = [node]; //将二叉树压入栈
        while (stack.length !== 0) { //如果栈不为空，则循环遍历
            node = stack.pop(); //从栈中取出一个结点
            preListUnRec.push(node.value); //将取出结点的值存入数组中
            if (node.right) stack.push(node.right); //如果存在右子树，将右子树压入栈
            if (node.left) stack.push(node.left); //如果存在左子树，将左子树压入栈
        }
    }
}
preOrderUnRecursion(tree);
console.log(preListUnRec);