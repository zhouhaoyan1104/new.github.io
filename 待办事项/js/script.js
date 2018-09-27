new Vue({
    el:"#app",
    data:{
        texts:"",
        title:"待办事项",
        mess:
            [
                {text:"学习js",del:"删除"},
                {text:"学习js1",del:"删除"},
                {text:"学习js2",del:"删除"}
            ]

    },
    methods:{
        fun:function(){
            if(this.texts !== ""){
                this.mess.push({text:this.texts,del:"删除"}),
                this.texts=""
            }else {
                alert("请输入字母")
            }
        },
        fun1:function(n){
            this.mess.splice(n,1)
        }
    }
})

var arr=["1","2","3"]
arr.splice(2,2)
console.log(arr)