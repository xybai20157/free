$("form  :input").blur(function(){
    if( $(this).is("#title") ){
        var str = $("<span class='error'>申请标题不能为空</span>");
        if($(this).val()==""){
            $(this).after(str);
        }else{console.log(1);
            $(this).next().remove();
        }
    }
    if( $(this).is("#name") ){
        str = $("<span class='error'>名称不能为空</span>");
        if($(this).val()==""){
            $(this).after(str);
        }else{
            $(this).next().remove();
        }
    }
    if( $(this).is("#reason") ){
        str = $("<span class='error'>申请原因不能为空</span>");
        if($(this).val()==""){
            $(this).after(str);
        }else{
            $(this).next().remove();
        }
    }
    if( $(this).is("#content") ){
        str = $("<span class='error' style='display:block'>请详细说明申请原因</span>");
        if($(this).val()==""){
            $(this).after(str);
        }else{
            $(this).next().remove("error");
        }
    }
    if( $(this).is("#goods") ){
        str = $("<span class='error'>请填写申请物品</span>");
        if($(this).val()==""){
            $(this).after(str);
        }else{
            $(this).next().remove();
        }
    }
    if( $(this).is("#number") ){
        str = $("<span class='error'>请填写申请数量</span>");
        if($(this).val()==""){
            $(this).after(str);
        }else{
            $(this).next().remove();
        }
    }
    if( $(this).is("#phone") ){
        str = $("<span class='error'>请填写真实电话</span>");
        var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if($(this).val()==""&&!reg.test($(this).val())){
            $(this).after(str);
        }else{
            $(this).next().remove();
        }
    }
    if( $(this).is("#address") ){
        str = $("<span class='error'>请填详细地址</span>");
        if($(this).val()==""){
            $(this).after(str);
        }else{
            $(this).next().remove();
        }
    }
});
$("form  :input").focus(function(){
    if( $(this).is("#title") ){
        $(this).next().remove(".error");
    }
    if( $(this).is("#name") ){
        $(this).next().remove(".error");
    }
    if( $(this).is("#reason") ){
        $(this).next().remove(".error");
    }
    if( $(this).is("#content") ){
        $(this).next().remove(".error");
    }
    if( $(this).is("#goods") ){
        $(this).next().remove(".error");
    }
    if( $(this).is("#number") ){
        $(this).next().remove(".error");
    }
    if( $(this).is("#phone") ){
        $(this).next().remove(".error");
    }
    if( $(this).is("#address") ){
        $(this).next().remove(".error");
    }
});

$('body').on('click',"div[class='btn']",function(){
    var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    var form=$("form");
    var title = $.trim(form.find('#title').val());
    var name =$.trim(form.find('#name').val());
    var reason =$.trim(form.find('#reason').val());
    var content =$.trim(form.find('#content').val());
    var goods =$.trim(form.find('#goods').val());
    var number =$.trim(form.find('#number').val());
    var phone =$.trim(form.find('#phone').val());
    var address =$.trim(form.find('#address').val());
    if (title.length==0) {
        str = $("<span class='error'>申请标题不能为空</span>");
        if($("form #title").next().has("class='error'")){
            $("#title").after(str);
        }

    }
    if (name.length==0) {
        str = $("<span class='error'>名称不能为空</span>");
        if($("form #name").next().has("class='error'")){
            $("#name").after(str);
        }
    }
    if (reason.length==0) {
        str = $("<span class='error'>申请原因不能为空</span>");
        if($("form #reason").next().has("class='error'")){
            $("#reason").after(str);
        }
    }
    if (content.length==0) {
        str = $("<span class='error' style='display:block'>请详细说明申请原因</span>");
        $("#content").after(str);
    }
    if (goods.length==0) {
        str = $("<span class='error'>请填写申请物品</span>");
        if($("form #goods").next().has("class='error'")){
            $("#goods").after(str);
        }
    }
    if (number.length==0) {
        str = $("<span class='error'>请填写申请数量</span>");
        if($("form #number").next().has("class='error'")){
            $("#number").after(str);
        }
    }
    if (phone.length==0&&!reg.test($(this).val())) {
        str = $("<span class='error'>请填写真实电话</span>");
        if($("form #phone").next().has("class='error'")){
            $("#phone").after(str);
        }
    }
    if (address.length==0) {
        str = $("<span class='error'>请填详细地址</span>");
        if($("form #address").next().has("class='error'")){
            $("#address").after(str);
        }
    } else{
        window.location="Need_warm_CZ.html";
    }
});
