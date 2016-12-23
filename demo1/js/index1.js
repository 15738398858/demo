//定义产品详情的名称、属性



function Product(){
    this.image=[];
    this.name="";
    this.buynum='';
    this.descript='';
    this.priceNormal='';
    this.priceGroup='';
    this.soldCount='';
    this.size=[];
    this.proLength=[];
    this.haveCount=0;
}
//定义产品对象的方法
Product.prototype={
    //绑定图片列表模型
    bindImageDom:function () {
        var str='';
        var imageContainer=$("#etalage");
        for(var i=0;i<3;i++){
            str+='<li>';
            str+='<img class="etalage_thumb_image"  src='+this.image[i].thum+' class="img-responsive" />';
            str+='<img class="etalage_source_image" src='+this.image[i].sour+' class="img-responsive" />';
            str+='</li>';
            str+='<div class="clearfix"></div>';
        }
        imageContainer.html(str);
        $('#etalage').etalage({
            thumb_image_width: 300,//缩略图的宽度
            thumb_image_height: 400,//缩略图的高度
            source_image_width: 600,//大图的宽度
            source_image_height: 800//大图的高度
        });
    },
    //绑定详情模型
    bindDetailDom:function () {
        var str='';
        str+="<h1 id='pname'>"+this.name+"</h1>";
        str+='<ul class="rating">';
        str+='<li><a class="product-rate" href="#"></a><span></span></li>';
        str+="<li><a href='#' id='buyCount'>"+this.buynum+"</a>人购买</li>";
        str+='<div class="clearfix"></div></ul>';
        str+='<div class="price_single">';
        str+='<span class="reducedfrom" id="price">'+this.priceNormal+'</span>';
        str+='<span class="actual" id="groupPrice">'+this.priceGroup+'</span><a href="#">团购</a></div>';
        str+='<h2 class="quick">简述:</h2>';
        str+="<p class='quick_desc' id='description'>"+this.descript+"</p>";
        str+='<ul class="size">';
        str+='<h3>尺寸:</h3>';
        for(var j=0 ;j<6;j++){
            str+='<li><a href="#">'+this.size[j]+'</a></li>';
        }
        str+='</ul><ul class="size"><h3>长度:</h3>';
        for(var z=0;z<3;z++){
            str+='<li><a href="#">'+this.proLength[z]+'</a></li>';
        }
        str+='</ul><ul class="product-qty"><span>数量:</span>';
        str+='<select id="sec"><option>1</option><option>2</option><option>3</option><option>4</option></select></ul>';
        str+='<div class="btn_form">';
        str+='<button type="button" id="btnaddcart" value="添加到购物车" title="">添加到购物车</button>';
        str+='<button type="button" id="btnbuy" value="立即购买" title="">立即购买</button>';
        str+='</div>';
        $("#cont1").html(str);
    }
};
function Buycart() {
    this.num='0';
    this.newnum='0';
    this.allprice='0';
    this.name='';
    this.src='';
    this.price='';
}
Buycart.prototype={
    //添加商品
    addSales:function () {
        var str='';
        str+='<div class="cart_box">';
        str+='<div class="message">';
        str+='<div class="alert-close"></div>';
        str+='<div class="list_img"><img src='+this.src+' class="img-responsive" alt=""/></div>';
        str+='<div class="list_desc"><h4><a href="#">'+this.name+'</a></h4><span class="num_spannn">'+this.num+'</span>x<span class="actual">$'+this.price+'</span>';
        str+='</div>';
        str+='<div class="clearfix"></div>';
        str+='</div></div></div>';
        $("#shopping_cart").append(str);

    },
    //移除商品
    removeSales:function (obj) {
        obj.parent().parent().remove();
    },
    //获取商品总数
    getslaseNum:function () {
        num1=$("#shopping_cart .cart_box").length;
        $("#gouwucheshu").html(num1);
    },
    //计算总价
    getallMoney:function () {
        var pric1=0;
        var tnum=$(".num_spannn");
        for(var k=0,len=tnum.length;k<len;k++){
            pric1+=tnum.eq(k).html() * this.price;
        }
        pric1=pric1.toFixed(2);
        $("#allmoney").html(pric1);
    },
    //最近添加商品数
    getjinAdd:function () {
        num111=$("#shopping_cart .cart_box").length;
        $("#totalCount").html(num111);
    }
};

