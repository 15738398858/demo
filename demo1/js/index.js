/**
 * Created by aa on 2016/12/15.
 */
$(function () {

    //创建实例对象
    var pro_real=new Product();
    var img=[{"thum":"images/s11.jpg","sour":"images/s11.jpg"},
        {"thum":"images/s12.jpg","sour":"images/s12.jpg"},
        {"thum":"images/s13.jpg","sour":"images/s13.jpg"}];
    pro_real.image=img;
    pro_real.bindImageDom();
    pro_real.name="黄蓉软猬甲";
    pro_real.buynum=999;
    pro_real.priceGroup="99.99";
    pro_real.descript="这是一家非常厉害的衣服，俗称软猬甲，刀枪不入哦！！";
    pro_real.priceNormal="$199.99";
    pro_real.size=[25,26,27,28,29,30];
    pro_real.proLength=[26,28,30];
    pro_real.bindDetailDom();


        //购物车功能
        var buycart=new Buycart();
    $("#btnaddcart").click(function () {
        buycart.name=$("#pname").html();
        buycart.num=$("#sec option:selected").html();
        buycart.src="images/s11.jpg";
        buycart.price=$("#groupPrice").html();
        buycart.addSales();
        buycart.getslaseNum();
        buycart.getallMoney();
        buycart.getjinAdd();
        $(".alert-close").click(function () {
            buycart.removeSales($(this));
            buycart.getslaseNum();
            buycart.getallMoney();
            buycart.getjinAdd();
        });
    });

























});


