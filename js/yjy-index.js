//商品分类部分,鼠标悬停到二级菜单 显示三级菜单
$(document).ready(function() {
	var num;
	$('.navbar-sort').hover(
		function() {
			//显示对应二级菜单
			var Obj = $(this).attr('id');
			num = Obj.substring(5, Obj.length);
			//			console.log(num)
			$('#subitems-' + num).css("display", "block");

		},
		function() {
			$('#subitems-' + num).hide();
		});
	//保持
	$('.subitems').hover(function() {
		$('#subitems-' + num).css("display", "block");
		$('#sort-' + num).addClass("items-hover");

		//鼠标移出隐藏三级菜单 清除二级菜单hover效果
	}, function() {
		$('#subitems-' + num).hide();
		$('#sort-' + num).removeClass("items-hover");
	});

});

//家居生活部分点击改变右侧标签状态
$(document).ready(function() {
	$('.column-title-tag').click(function() {
		$(this).addClass("active");
		$(this).siblings().removeClass('active');
	});
});