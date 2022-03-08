function good () {
    alert("추천되었습니다.")
}
function goList(str) {
    location.replace(str);
}
function report() {
    alert("신고되었습니다.")
}
function commentReport (){
    alert("댓글이 신고되었습니다.")
}
function resize(obj) {
obj.style.height = "1px";
obj.style.height = (12+obj.scrollHeight)+"px";
}
// function reply_btn () {
//     if(document.getElementById("reply-register-box").style.display == "none"){

//     document.getElementById("reply-register-box").style.display = "block";
//     }
//     else{
//         document.getElementById("reply-register-box").style.display = "none";
//     }
// }
function commentRegist () {
    alert("등록되었습니다.")
}

$('#reply-btn').click(function () {
    if($('#reply-register-box').is(':hidden')) {
        $('#reply-register-box').slideDown();
        
    }else{
        $('#reply-register-box').slideUp();
        
    }

})
