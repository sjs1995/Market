new Vue({
    el: ".cart-box-body",
    data : model = {
        goods_list: [{name : "apple",num : 1, price : 10.0},
                    {name : "pear",num : 2, price : 20.0},
                    {name : "orange",num : 3, price : 30.0},
                    {name: "banana", num: 4, price: 40.0 }
                    ]
        ,collect_list: []
    }
    ,computed:{
        count : function(){
            var num = 0;
            for(var i in this.goods_list){
                num += parseInt(this.goods_list[i].num);
            }
            return num;
        },
        total : function(){
            var total = 0;
            for(var i in this.goods_list){
                total += this.goods_list[i].price * this.goods_list[i].num;
            }
            return total;
        }
    }
    ,methods: {
        changeNumber: function (goods, _$event) {
            var obj = $(event.target);
            goods.num = parseInt(obj.val());
        },
        remove: function (goods) {
            model.goods_list.splice($.inArray(goods,model.goods_list), 1);
        }
    }
});