/*
 *  Amina Javascript Language
 *
 *  Copyright (c) 2015 Amina
 *  http://amina.co.kr
 *
 */

var aslang = new Array();

aslang[0] = "g5_is_member 변수가 선언되지 않았습니다.";
aslang[1] = "g5_bbs_url 변수가 선언되지 않았습니다.";
aslang[2] = "자기소개";
aslang[3] = "홈페이지";
aslang[4] = "쪽지보내기";
aslang[5] = "메일보내기";
aslang[6] = "게시물검색";
aslang[7] = "코멘트검색";
aslang[8] = "전체게시물";
aslang[9] = "포인트내역";
aslang[10] = "회원정보변경";
aslang[11] = "정말 삭제 하시겠습니까?\n\n삭제후에는 되돌릴수 없습니다.";
aslang[12] = "오류가 발생하였습니다.";
aslang[13] = "본 글을 잠금처리 하시겠습니까?";
aslang[14] = "본 글을 잠금해제 하시겠습니까?";
aslang[15] = "본 글을 신고하시겠습니까?\n\n한번 신고하면 취소할 수 없습니다.";
aslang[16] = "정말 회원에서 탈퇴 하시겠습니까?";
aslang[17] = "자동로그인을 사용하시면 다음부터 회원아이디와 패스워드를 입력하실 필요가 없습니다.\n\n공공장소에서는 개인정보가 유출될 수 있으니 사용을 자제하여 주십시오.\n\n자동로그인을 사용하시겠습니까?";
aslang[18] = "정말 회원에서 탈퇴 하시겠습니까?";
aslang[19] = "한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?";
aslang[20] = "다음 우편번호 postcode.v2.js 파일이 로드되지 않았습니다.";
aslang[21] = "필수 선택입니다.";
aslang[22] = "필수 입력입니다.";
aslang[23] = "전화번호 형식이 올바르지 않습니다.\n\n하이픈(-)을 포함하여 입력하세요.";
aslang[24] = "이메일주소 형식이 아닙니다.";
aslang[25] = "한글이 아닙니다. (자음, 모음 조합된 한글만 가능)";
aslang[26] = "한글이 아닙니다.";
aslang[27] = "한글, 영문, 숫자가 아닙니다.";
aslang[28] = "한글, 영문이 아닙니다.";
aslang[29] = "숫자가 아닙니다.";
aslang[30] = "영문이 아닙니다.";
aslang[31] = "영문 또는 숫자가 아닙니다.";
aslang[32] = "영문, 숫자, _ 가 아닙니다.";
aslang[33] = "최소 [cnt]글자 이상 입력하세요."; //[cnt] : 글자수
aslang[34] = "이미지 파일이 아닙니다.\n.gif .jpg .png 파일만 가능합니다.";
aslang[35] = ".[ext] 파일만 가능합니다."; //[ext] : 확장자
aslang[36] = "공백이 없어야 합니다.";

//1.7.1
aslang[37] = "회원 로그인 후 이용해 주십시오.";
aslang[38] = "이미 다운로드하신 쿠폰입니다.";
aslang[39] = "쿠폰이 발급됐습니다.";

//1.7.2
aslang[40] = "문의글내역";
aslang[41] = "토큰 정보가 올바르지 않습니다.";


// 전역 변수
var errmsg = "";
var errfld = null;

// 필드 검사
function check_field(fld, msg)
{
    if ((fld.value = trim(fld.value)) == "")
        error_field(fld, msg);
    else
        clear_field(fld);
    return;
}

// 필드 오류 표시
function error_field(fld, msg)
{
    if (msg != "")
        errmsg += msg + "\n";
    if (!errfld) errfld = fld;
    fld.style.background = "#BDDEF7";
}

// 필드를 깨끗하게
function clear_field(fld)
{
    fld.style.background = "#FFFFFF";
}

function trim(s)
{
    var t = "";
    var from_pos = to_pos = 0;

    for (i=0; i<s.length; i++)
    {
        if (s.charAt(i) == ' ')
            continue;
        else
        {
            from_pos = i;
            break;
        }
    }

    for (i=s.length; i>=0; i--)
    {
        if (s.charAt(i-1) == ' ')
            continue;
        else
        {
            to_pos = i;
            break;
        }
    }

    t = s.substring(from_pos, to_pos);
    //				alert(from_pos + ',' + to_pos + ',' + t+'.');
    return t;
}

// 자바스크립트로 PHP의 number_format 흉내를 냄
// 숫자에 , 를 출력
function number_format(data)
{

    var tmp = '';
    var number = '';
    var cutlen = 3;
    var comma = ',';
    var i;

    var sign = data.match(/^[\+\-]/);
    if(sign) {
        data = data.replace(/^[\+\-]/, "");
    }

    len = data.length;
    mod = (len % cutlen);
    k = cutlen - mod;
    for (i=0; i<data.length; i++)
    {
        number = number + data.charAt(i);

        if (i < data.length - 1)
        {
            k++;
            if ((k % cutlen) == 0)
            {
                number = number + comma;
                k = 0;
            }
        }
    }

    if(sign != null)
        number = sign+number;

    return number;
}

// 새 창
function popup_window(url, winname, opt)
{
    window.open(url, winname, opt);
}


// 폼메일 창
function popup_formmail(url)
{
    opt = 'scrollbars=yes,width=417,height=385,top=10,left=20';
    popup_window(url, "wformmail", opt);
}

// , 를 없앤다.
function no_comma(data)
{
    var tmp = '';
    var comma = ',';
    var i;

    for (i=0; i<data.length; i++)
    {
        if (data.charAt(i) != comma)
            tmp += data.charAt(i);
    }
    return tmp;
}

// 삭제 검사 확인
function del(href)
{
    if(confirm(aslang[19])) { //한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?
        var iev = -1;
        if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                iev = parseFloat(RegExp.$1);
        }

        // IE6 이하에서 한글깨짐 방지
        if (iev != -1 && iev < 7) {
            document.location.href = encodeURI(href);
        } else {
            document.location.href = href;
        }
    }
}

// 쿠키 입력
function set_cookie(name, value, expirehours, domain)
{
    var today = new Date();
    today.setTime(today.getTime() + (60*60*1000*expirehours));
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + today.toGMTString() + ";";
    if (domain) {
        document.cookie += "domain=" + domain + ";";
    }
}

// 쿠키 얻음
function get_cookie(name)
{
    var find_sw = false;
    var start, end;
    var i = 0;

    for (i=0; i<= document.cookie.length; i++)
    {
        start = i;
        end = start + name.length;

        if(document.cookie.substring(start, end) == name)
        {
            find_sw = true
            break
        }
    }

    if (find_sw == true)
    {
        start = end + 1;
        end = document.cookie.indexOf(";", start);

        if(end < start)
            end = document.cookie.length;

        return unescape(document.cookie.substring(start, end));
    }
    return "";
}

// 쿠키 지움
function delete_cookie(name)
{
    var today = new Date();

    today.setTime(today.getTime() - 1);
    var value = get_cookie(name);
    if(value != "")
        document.cookie = name + "=" + value + "; path=/; expires=" + today.toGMTString();
}

var last_id = null;
function menu(id)
{
    if (id != last_id)
    {
        if (last_id != null)
            document.getElementById(last_id).style.display = "none";
        document.getElementById(id).style.display = "block";
        last_id = id;
    }
    else
    {
        document.getElementById(id).style.display = "none";
        last_id = null;
    }
}

function textarea_decrease(id, row)
{
    if (document.getElementById(id).rows - row > 0)
        document.getElementById(id).rows -= row;
}

function textarea_original(id, row)
{
    document.getElementById(id).rows = row;
}

function textarea_increase(id, row)
{
    document.getElementById(id).rows += row;
}

// 글숫자 검사
function check_byte(content, target)
{
    var i = 0;
    var cnt = 0;
    var ch = '';
    var cont = document.getElementById(content).value;

    for (i=0; i<cont.length; i++) {
        ch = cont.charAt(i);
        if (escape(ch).length > 4) {
            cnt += 2;
        } else {
            cnt += 1;
        }
    }
    // 숫자를 출력
    document.getElementById(target).innerHTML = cnt;

    return cnt;
}

// 브라우저에서 오브젝트의 왼쪽 좌표
function get_left_pos(obj)
{
    var parentObj = null;
    var clientObj = obj;
    //var left = obj.offsetLeft + document.body.clientLeft;
    var left = obj.offsetLeft;

    while((parentObj=clientObj.offsetParent) != null)
    {
        left = left + parentObj.offsetLeft;
        clientObj = parentObj;
    }

    return left;
}

// 브라우저에서 오브젝트의 상단 좌표
function get_top_pos(obj)
{
    var parentObj = null;
    var clientObj = obj;
    //var top = obj.offsetTop + document.body.clientTop;
    var top = obj.offsetTop;

    while((parentObj=clientObj.offsetParent) != null)
    {
        top = top + parentObj.offsetTop;
        clientObj = parentObj;
    }

    return top;
}

function flash_movie(src, ids, width, height, wmode)
{
    var wh = "";
    if (parseInt(width) && parseInt(height))
        wh = " width='"+width+"' height='"+height+"' ";
    return "<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0' "+wh+" id="+ids+"><param name=wmode value="+wmode+"><param name=movie value="+src+"><param name=quality value=high><embed src="+src+" quality=high wmode="+wmode+" type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?p1_prod_version=shockwaveflash' "+wh+"></embed></object>";
}

function obj_movie(src, ids, width, height, autostart)
{
    var wh = "";
    if (parseInt(width) && parseInt(height))
        wh = " width='"+width+"' height='"+height+"' ";
    if (!autostart) autostart = false;
    return "<embed src='"+src+"' "+wh+" autostart='"+autostart+"'></embed>";
}

function doc_write(cont)
{
    document.write(cont);
}

var win_password_lost = function(href) {
    window.open(href, "win_password_lost", "left=50, top=50, width=617, height=330, scrollbars=1");
}

$(document).ready(function(){
    $("#login_password_lost, #ol_password_lost").click(function(){
        win_password_lost(this.href);
        return false;
    });
});

/**
 * 포인트 창
 **/
var win_point = function(href) {
    var new_win = window.open(href, 'win_point', 'left=100,top=100,width=600, height=600, scrollbars=1');
    new_win.focus();
}

/**
 * 쪽지 창
 **/
var win_memo = function(href) {
    var new_win = window.open(href, 'win_memo', 'left=100,top=100,width=620,height=500,scrollbars=1');
    new_win.focus();
}

/**
 * 메일 창
 **/
var win_email = function(href) {
    var new_win = window.open(href, 'win_email', 'left=100,top=100,width=600,height=580,scrollbars=0');
    new_win.focus();
}

/**
 * 자기소개 창
 **/
var win_profile = function(href) {
    var new_win = window.open(href, 'win_profile', 'left=100,top=100,width=620,height=510,scrollbars=1');
    new_win.focus();
}

/**
 * 스크랩 창
 **/
var win_scrap = function(href) {
    var new_win = window.open(href, 'win_scrap', 'left=100,top=100,width=600,height=600,scrollbars=1');
    new_win.focus();
}

/**
 * 홈페이지 창
 **/
var win_homepage = function(href) {
    var new_win = window.open(href, 'win_homepage', '');
    new_win.focus();
}

/**
 * 우편번호 창
 **/
var win_zip = function(frm_name, frm_zip, frm_addr1, frm_addr2, frm_addr3, frm_jibeon) {
    if(typeof daum === 'undefined'){
        alert(aslang[20]); //다음 우편번호 postcode.v2.js 파일이 로드되지 않았습니다.
        return false;
    }

    var zip_case = 1;   //0이면 레이어, 1이면 페이지에 끼워 넣기, 2이면 새창

    var complete_fn = function(data){
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        var fullAddr = ''; // 최종 주소 변수
        var extraAddr = ''; // 조합형 주소 변수

        // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
            fullAddr = data.roadAddress;

        } else { // 사용자가 지번 주소를 선택했을 경우(J)
            fullAddr = data.jibunAddress;
        }

        // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
        if(data.userSelectedType === 'R'){
            //법정동명이 있을 경우 추가한다.
            if(data.bname !== ''){
                extraAddr += data.bname;
            }
            // 건물명이 있을 경우 추가한다.
            if(data.buildingName !== ''){
                extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
            extraAddr = (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
        }

        // 우편번호와 주소 정보를 해당 필드에 넣고, 커서를 상세주소 필드로 이동한다.
        var of = document[frm_name];

        of[frm_zip].value = data.zonecode;

        of[frm_addr1].value = fullAddr;
        of[frm_addr3].value = extraAddr;

        if(of[frm_jibeon] !== undefined){
            of[frm_jibeon].value = data.userSelectedType;
        }

        of[frm_addr2].focus();
    };

    switch(zip_case) {
        case 1 :    //iframe을 이용하여 페이지에 끼워 넣기
            var daum_pape_id = 'daum_juso_page'+frm_zip,
                element_wrap = document.getElementById(daum_pape_id),
                currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            if (element_wrap == null) {
                element_wrap = document.createElement("div");
                element_wrap.setAttribute("id", daum_pape_id);
                element_wrap.style.cssText = 'display:none;border:1px solid;left:0;width:100%;height:300px;margin:5px 0;position:relative;-webkit-overflow-scrolling:touch;';
                element_wrap.innerHTML = '<img src="//i1.daumcdn.net/localimg/localimages/07/postcode/320/close.png" id="btnFoldWrap" style="cursor:pointer;position:absolute;right:0px;top:-21px;z-index:1" class="close_daum_juso" alt="접기 버튼">';
                jQuery('form[name="'+frm_name+'"]').find('input[name="'+frm_addr1+'"]').before(element_wrap);
                jQuery("#"+daum_pape_id).off("click", ".close_daum_juso").on("click", ".close_daum_juso", function(e){
                    e.preventDefault();
                    jQuery(this).parent().hide();
                });
            }

            new daum.Postcode({
                oncomplete: function(data) {
                    complete_fn(data);
                    // iframe을 넣은 element를 안보이게 한다.
                    element_wrap.style.display = 'none';
                    // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
                    document.body.scrollTop = currentScroll;
                },
                // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분.
                // iframe을 넣은 element의 높이값을 조정한다.
                onresize : function(size) {
                    element_wrap.style.height = size.height + "px";
                },
                width : '100%',
                height : '100%'
            }).embed(element_wrap);

            // iframe을 넣은 element를 보이게 한다.
            element_wrap.style.display = 'block';
            break;
        case 2 :    //새창으로 띄우기
            new daum.Postcode({
                oncomplete: function(data) {
                    complete_fn(data);
                }
            }).open();
            break;
        default :   //iframe을 이용하여 레이어 띄우기
            var rayer_id = 'daum_juso_rayer'+frm_zip,
                element_layer = document.getElementById(rayer_id);
            if (element_layer == null) {
                element_layer = document.createElement("div");
                element_layer.setAttribute("id", rayer_id);
                element_layer.style.cssText = 'display:none;border:5px solid;position:fixed;width:300px;height:460px;left:50%;margin-left:-155px;top:50%;margin-top:-235px;overflow:hidden;-webkit-overflow-scrolling:touch;z-index:10000';
                element_layer.innerHTML = '<img src="//i1.daumcdn.net/localimg/localimages/07/postcode/320/close.png" id="btnCloseLayer" style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" class="close_daum_juso" alt="닫기 버튼">';
                document.body.appendChild(element_layer);
                jQuery("#"+rayer_id).off("click", ".close_daum_juso").on("click", ".close_daum_juso", function(e){
                    e.preventDefault();
                    jQuery(this).parent().hide();
                });
            }

            new daum.Postcode({
                oncomplete: function(data) {
                    complete_fn(data);
                    // iframe을 넣은 element를 안보이게 한다.
                    element_layer.style.display = 'none';
                },
                width : '100%',
                height : '100%'
            }).embed(element_layer);

            // iframe을 넣은 element를 보이게 한다.
            element_layer.style.display = 'block';
    }
}

/**
 * 새로운 비밀번호 분실 창 : 101123
 **/
win_password_lost = function(href)
{
    var new_win = window.open(href, 'win_password_lost', 'width=617, height=330, scrollbars=1');
    new_win.focus();
}

/**
 * 설문조사 결과
 **/
var win_poll = function(href) {
    var new_win = window.open(href, 'win_poll', 'width=616, height=500, scrollbars=1');
    new_win.focus();
}

/**
 * 스크린리더 미사용자를 위한 스크립트 - 지운아빠 2013-04-22
 * alt 값만 갖는 그래픽 링크에 마우스오버 시 title 값 부여, 마우스아웃 시 title 값 제거
 **/
$(function() {
    $('a img').mouseover(function() {
        $a_img_title = $(this).attr('alt');
        $(this).attr('title', $a_img_title);
    }).mouseout(function() {
        $(this).attr('title', '');
    });
});

/**
 * 텍스트 리사이즈
**/
function font_resize(id, rmv_class, add_class)
{
    var $el = $("#"+id);

    $el.removeClass(rmv_class).addClass(add_class);

    set_cookie("ck_font_resize_rmv_class", rmv_class, 1, g5_cookie_domain);
    set_cookie("ck_font_resize_add_class", add_class, 1, g5_cookie_domain);
}

/**
 * 댓글 수정 토큰
**/
function set_comment_token(f)
{
    if(typeof f.token === "undefined")
        $(f).prepend('<input type="hidden" name="token" value="">');

	$.ajax({
		url: g5_bbs_url+"/ajax.comment_token.php",
		type: "GET",
		dataType: "json",
		async: false,
		cache: false,
		success: function(data, textStatus) {
			f.token.value = data.token;
		}
	});
}

$(function(){
    $(".win_point").click(function() {
        win_point(this.href);
        return false;
    });

    $(".win_memo").click(function() {
        win_memo(this.href);
        return false;
    });

    $(".win_email").click(function() {
        win_email(this.href);
        return false;
    });

    $(".win_scrap").click(function() {
        win_scrap(this.href);
        return false;
    });

    $(".win_profile").click(function() {
        win_profile(this.href);
        return false;
    });

    $(".win_homepage").click(function() {
        win_homepage(this.href);
        return false;
    });

    $(".win_password_lost").click(function() {
        win_password_lost(this.href);
        return false;
    });

    /*
    $(".win_poll").click(function() {
        win_poll(this.href);
        return false;
    });
    */

    // 사이드뷰
    var sv_hide = false;
    $(".sv_member, .sv_guest").click(function() {
        $(".sv").removeClass("sv_on");
        $(this).closest(".sv_wrap").find(".sv").addClass("sv_on");
    });

    $(".sv, .sv_wrap").hover(
        function() {
            sv_hide = false;
        },
        function() {
            sv_hide = true;
        }
    );

    $(".sv_member, .sv_guest").focusin(function() {
        sv_hide = false;
        $(".sv").removeClass("sv_on");
        $(this).closest(".sv_wrap").find(".sv").addClass("sv_on");
    });

    $(".sv a").focusin(function() {
        sv_hide = false;
    });

    $(".sv a").focusout(function() {
        sv_hide = true;
    });

    // 셀렉트 ul
    var sel_hide = false;
    $('.sel_btn').click(function() {
        $('.sel_ul').removeClass('sel_on');
        $(this).siblings('.sel_ul').addClass('sel_on');
    });

    $(".sel_wrap").hover(
        function() {
            sel_hide = false;
        },
        function() {
            sel_hide = true;
        }
    );

    $('.sel_a').focusin(function() {
        sel_hide = false;
    });

    $('.sel_a').focusout(function() {
        sel_hide = true;
    });

    $(document).click(function() {
        if(sv_hide) { // 사이드뷰 해제
            $(".sv").removeClass("sv_on");
        }
        if (sel_hide) { // 셀렉트 ul 해제
            $('.sel_ul').removeClass('sel_on');
        }
    });

    $(document).focusin(function() {
        if(sv_hide) { // 사이드뷰 해제
            $(".sv").removeClass("sv_on");
        }
        if (sel_hide) { // 셀렉트 ul 해제
            $('.sel_ul').removeClass('sel_on');
        }
    });

    $(document).on( "keyup change", "textarea#wr_content[maxlength]", function(){
        var str = $(this).val();
        var mx = parseInt($(this).attr("maxlength"));
        if (str.length > mx) {
            $(this).val(str.substr(0, mx));
            return false;
        }
    });
});

function get_write_token(bo_table)
{
    var token = "";

    $.ajax({
        type: "POST",
        url: g5_bbs_url+"/write_token.php",
        data: { bo_table: bo_table },
        cache: false,
        async: false,
        dataType: "json",
        success: function(data) {
            if(data.error) {
                alert(data.error);
                if(data.url)
                    document.location.href = data.url;

                return false;
            }

            token = data.token;
        }
    });

    return token;
}

function set_write_token(f)
{
        var bo_table = f.bo_table.value;
        var token = get_write_token(bo_table);

        if(token) {

			var $f = $(f);

			if(typeof f.token === "undefined")
				$f.prepend('<input type="hidden" name="token" value="">');

			$f.find("input[name=token]").val(token);
		}
}

$(function() {
    $(document).on("click", "form[name=fwrite] input:submit, form[name=fwrite] button:submit", function() {
        var f = this.form;
		var bo_table = f.bo_table.value;
        var token = get_write_token(bo_table);

        if(!token) {
            alert(aslang[41]); //토큰 정보가 올바르지 않습니다.
            return false;
        }

        var $f = $(f);

        if(typeof f.token === "undefined")
            $f.prepend('<input type="hidden" name="token" value="">');

        $f.find("input[name=token]").val(token);

        return true;
    });
});

var wrestMsg = "";
var wrestFld = null;
var wrestFldDefaultColor = "";
//var wrestFldBackColor = "#ff3061";

// subject 속성값을 얻어 return, 없으면 tag의 name을 넘김
function wrestItemname(fld)
{
    //return fld.getAttribute("title") ? fld.getAttribute("title") : ( fld.getAttribute("alt") ? fld.getAttribute("alt") : fld.name );
    var id = fld.getAttribute("id");
    var labels = document.getElementsByTagName("label");
    var el = null;

    for(i=0; i<labels.length; i++) {
        if(id == labels[i].htmlFor) {
            el = labels[i];
            break;
        }
    }

    if(el != null) {
        var text =  el.innerHTML.replace(/[<].*[>].*[<]\/+.*[>]/gi, "");

        if(text == '') {
            return fld.getAttribute("title") ? fld.getAttribute("title") : ( fld.getAttribute("placeholder") ? fld.getAttribute("placeholder") : fld.name );
        } else {
            return text;
        }
    } else {
        return fld.getAttribute("title") ? fld.getAttribute("title") : ( fld.getAttribute("placeholder") ? fld.getAttribute("placeholder") : fld.name );
    }
}

// 양쪽 공백 없애기
function wrestTrim(fld)
{
    var pattern = /(^\s+)|(\s+$)/g; // \s 공백 문자
    return fld.value.replace(pattern, "");
}

// 필수 입력 검사
function wrestRequired(fld)
{
    if (wrestTrim(fld) == "") {
        if (wrestFld == null) {
            // 셀렉트박스일 경우에도 필수 선택 검사합니다.
            wrestMsg = wrestItemname(fld) + " : " + (fld.type=="select-one" ? aslang[21] : aslang[22]) + "\n";
            wrestFld = fld;
        }
    }
}

// 김선용 2006.3 - 전화번호(휴대폰) 형식 검사 : 123-123(4)-5678
function wrestTelNum(fld)
{
    if (!wrestTrim(fld)) return;

    var pattern = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
    if(!pattern.test(fld.value)){
        if(wrestFld == null){
            wrestMsg = wrestItemname(fld) + " : " + aslang[23] + "\n";
            wrestFld = fld;
            fld.select();
        }
    }
}

// 이메일주소 형식 검사
function wrestEmail(fld)
{
    if (!wrestTrim(fld)) return;

    //var pattern = /(\S+)@(\S+)\.(\S+)/; 이메일주소에 한글 사용시
    var pattern = /([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_-]+)/;
    if (!pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : " + aslang[24] + "\n";
            wrestFld = fld;
        }
    }
}

// 한글인지 검사 (자음, 모음 조합된 한글만 가능)
function wrestHangul(fld)
{
    if (!wrestTrim(fld)) return;

    //var pattern = /([^가-힣\x20])/i;
    var pattern = /([^가-힣\x20])/;

    if (pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : " + aslang[25] + "\n";
            wrestFld = fld;
        }
    }
}

// 한글인지 검사2 (자음, 모음만 있는 한글도 가능)
function wrestHangul2(fld)
{
    if (!wrestTrim(fld)) return;

    var pattern = /([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i;
    //var pattern = /([^가-힣ㄱ-ㅎㅏ-ㅣ\x20])/;

    if (pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : " + aslang[26] + "\n";
            wrestFld = fld;
        }
    }
}

// 한글,영문,숫자인지 검사3
function wrestHangulAlNum(fld)
{
    if (!wrestTrim(fld)) return;

    var pattern = /([^가-힣\x20^a-z^A-Z^0-9])/i;

    if (pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : " + aslang[27] + "\n";
            wrestFld = fld;
        }
    }
}

// 한글,영문 인지 검사
function wrestHangulAlpha(fld)
{
    if (!wrestTrim(fld)) return;

    var pattern = /([^가-힣\x20^a-z^A-Z])/i;

    if (pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : " + aslang[28] + "\n";
            wrestFld = fld;
        }
    }
}

// 숫자인지검사
// 배부른꿀꿀이님 추가 (http://dasir.com) 2003-06-24
function wrestNumeric(fld)
{
    if (fld.value.length > 0) {
        for (i = 0; i < fld.value.length; i++) {
            if (fld.value.charAt(i) < '0' || fld.value.charAt(i) > '9') {
                wrestMsg = wrestItemname(fld) + " : " + aslang[29] + "\n";
                wrestFld = fld;
            }
        }
    }
}

// 영문자 검사
// 배부른꿀꿀이님 추가 (http://dasir.com) 2003-06-24
function wrestAlpha(fld)
{
    if (!wrestTrim(fld)) return;

    var pattern = /(^[a-zA-Z]+$)/;

    if (!pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : " + aslang[30] + "\n";
            wrestFld = fld;
        }
    }
}

// 영문자와 숫자 검사
// 배부른꿀꿀이님 추가 (http://dasir.com) 2003-07-07
function wrestAlNum(fld)
{
   if (!wrestTrim(fld)) return;

   var pattern = /(^[a-zA-Z0-9]+$)/;

   if (!pattern.test(fld.value)) {
       if (wrestFld == null) {
           wrestMsg = wrestItemname(fld) + " : " + aslang[31] + "\n";
           wrestFld = fld;
       }
   }
}

// 영문자와 숫자 그리고 _ 검사
function wrestAlNum_(fld)
{
   if (!wrestTrim(fld)) return;

   var pattern = /(^[a-zA-Z0-9\_]+$)/;

   if (!pattern.test(fld.value)) {
       if (wrestFld == null) {
           wrestMsg = wrestItemname(fld) + " : " + aslang[32] + "\n";
           wrestFld = fld;
       }
   }
}

// 최소 길이 검사
function wrestMinLength(fld)
{
    if (!wrestTrim(fld)) return;

    var minlength = fld.getAttribute("minlength");

    if (wrestFld == null) {
        if (fld.value.length < parseInt(minlength)) {
            wrestMsg = wrestItemname(fld) + " : " + aslang[33].replace("[cnt]", minlength) + "\n";
            wrestFld = fld;
        }
    }
}

// 이미지 확장자
function wrestImgExt(fld)
{
    if (!wrestTrim(fld)) return;

    var pattern = /\.(gif|jpg|png)$/i; // jpeg 는 제외
    if(!pattern.test(fld.value)){
        if(wrestFld == null){
            wrestMsg = wrestItemname(fld) + " : " + aslang[34] + "\n";
            wrestFld = fld;
            fld.select();
        }
    }
}

// 확장자
function wrestExtension(fld, css)
{
    if (!wrestTrim(fld)) return;

    var str = css.split("="); // ext=?? <-- str[1]
    var src = fld.value.split(".");
    var ext = src[src.length - 1];

    if (wrestFld == null) {
        if (ext.toLowerCase() < str[1].toLowerCase()) {
            wrestMsg = wrestItemname(fld) + " : " + aslang[35].replace("[ext]", str[1]) + "\n";
            wrestFld = fld;
        }
    }
}

// 공백 검사후 공백을 "" 로 변환
function wrestNospace(fld)
{
    var pattern = /(\s)/g; // \s 공백 문자

    if (pattern.test(fld.value)) {
        if (wrestFld == null) {
            wrestMsg = wrestItemname(fld) + " : " + aslang[36] + "\n";
            wrestFld = fld;
        }
    }
}

// submit 할 때 속성을 검사한다.
function wrestSubmit()
{
    wrestMsg = "";
    wrestFld = null;

    var attr = null;

    // 해당폼에 대한 요소의 개수만큼 돌려라
    for (var i=0; i<this.elements.length; i++) {
        var el = this.elements[i];

        // Input tag 의 type 이 text, file, password 일때만
        // 셀렉트 박스일때도 필수 선택 검사합니다. select-one
        if (el.type=="text" || el.type=="hidden" || el.type=="file" || el.type=="password" || el.type=="select-one" || el.type=="textarea") {
            if (el.getAttribute("required") != null) {
                wrestRequired(el);
            }

            if (el.getAttribute("minlength") != null) {
                wrestMinLength(el);
            }

            var array_css = el.className.split(" "); // class 를 공백으로 나눔

            el.style.backgroundColor = wrestFldDefaultColor;

            // 배열의 길이만큼 돌려라
            for (var k=0; k<array_css.length; k++) {
                var css = array_css[k];
                switch (css) {
                    case "required"     : wrestRequired(el); break;
                    case "trim"         : wrestTrim(el); break;
                    case "email"        : wrestEmail(el); break;
                    case "hangul"       : wrestHangul(el); break;
                    case "hangul2"      : wrestHangul2(el); break;
                    case "hangulalpha"  : wrestHangulAlpha(el); break;
                    case "hangulalnum"  : wrestHangulAlNum(el); break;
                    case "nospace"      : wrestNospace(el); break;
                    case "numeric"      : wrestNumeric(el); break;
                    case "alpha"        : wrestAlpha(el); break;
                    case "alnum"        : wrestAlNum(el); break;
                    case "alnum_"       : wrestAlNum_(el); break;
                    case "telnum"       : wrestTelNum(el); break; // 김선용 2006.3 - 전화번호 형식 검사
                    case "imgext"       : wrestImgExt(el); break;
                    default :
                        if (/^extension\=/.test(css)) {
                            wrestExtension(el, css); break;
                        }
                } // switch (css)
            } // for (k)
        } // if (el)
    } // for (i)

    // 필드가 null 이 아니라면 오류메세지 출력후 포커스를 해당 오류 필드로 옮김
    // 오류 필드는 배경색상을 바꾼다.
    if (wrestFld != null) {
        // 경고메세지 출력
        alert(wrestMsg);

        if (wrestFld.style.display != "none") {
            var id = wrestFld.getAttribute("id");

            // 오류메세지를 위한 element 추가
            var msg_el = document.createElement("strong");
            msg_el.id = "msg_"+id;
            msg_el.className = "msg_sound_only";
            msg_el.innerHTML = wrestMsg;
            wrestFld.parentNode.insertBefore(msg_el, wrestFld);

            var new_href = document.location.href.replace(/#msg.+$/, "")+"#msg_"+id;

            document.location.href = new_href;

            //wrestFld.style.backgroundColor = wrestFldBackColor;
            if (typeof(wrestFld.select) != "undefined")
                wrestFld.select();
            wrestFld.focus();
        }
        return false;
    }

    if (this.oldsubmit && this.oldsubmit() == false)
        return false;

    return true;
}


// 초기에 onsubmit을 가로채도록 한다.
function wrestInitialized()
{
    for (var i = 0; i < document.forms.length; i++) {
        // onsubmit 이벤트가 있다면 저장해 놓는다.
        if (document.forms[i].onsubmit) {
            document.forms[i].oldsubmit = document.forms[i].onsubmit;
        }
        document.forms[i].onsubmit = wrestSubmit;
    }
}

// 폼필드 자동검사
$(document).ready(function(){
    // onload
    wrestInitialized();
});



// Name Layer
if (typeof(SIDEVIEW_JS) == 'undefined') { // 한번만 실행

	if (typeof g5_is_member == 'undefined')
        alert(aslang[0]);
    if (typeof g5_bbs_url == 'undefined')
        alert(aslang[1]);

    var SIDEVIEW_JS = true;

    // 아래의 소스코드는 daum.net 카페의 자바스크립트를 참고하였습니다.
    // 회원이름 클릭시 회원정보등을 보여주는 레이어
    function insertHead(name, text, evt) 
    {
        var idx = this.heads.length;
        var row = new SideViewRow(-idx, name, text, evt);
        this.heads[idx] = row;
        return row;
    }

    function insertTail(name, evt) 
    {
        var idx = this.tails.length;
        var row = new SideViewRow(idx, name, evt);
        this.tails[idx] = row;
        return row;
    }

    function SideViewRow(idx, name, onclickEvent) 
    {
        this.idx = idx;
        this.name = name;
        this.onclickEvent = onclickEvent;
        this.renderRow = renderRow;
        
        this.isVisible = true;
        this.isDim = false;
    }

    function renderRow() 
    {
        if (!this.isVisible)
            return "";
        
        var str = "<tr><td id='sideViewRow_"+this.name+"'>"+this.onclickEvent+"</td></tr>";
        return str;
    }

    function showSideView(curObj, mb_id, name, email, homepage) 
    {
        var sideView = new SideView('nameContextMenu', curObj, mb_id, name, email, homepage);
        sideView.showLayer();
    }

    function SideView(targetObj, curObj, mb_id, name, email, homepage) 
    {
        this.targetObj = targetObj;
        this.curObj = curObj;
        this.mb_id = mb_id;
        name = name.replace(/…/g,"");
        this.name = name;
        this.email = email;
        this.homepage = homepage;
        this.showLayer = showLayer;
        this.makeNameContextMenus = makeNameContextMenus;
        this.heads = new Array();
        this.insertHead = insertHead;
        this.tails = new Array();
        this.insertTail = insertTail;
        this.getRow = getRow;
        this.hideRow = hideRow;		
        this.dimRow = dimRow;
    
        // 회원이라면 // (비회원의 경우 검색 없음)
        if (g5_is_member) {
            // 자기소개
            if (mb_id) 
                this.insertTail("info", "<a href=\""+g5_bbs_url+"/profile.php?mb_id="+mb_id+"\" onclick=\"win_profile(this.href); return false;\">"+aslang[2]+"</a>");
            // 홈페이지
            if (homepage) 
                this.insertTail("homepage", "<a href=\""+homepage+"\" target=\"_blank\">"+aslang[3]+"</a>");
			// 쪽지보내기
            if (mb_id) 
                // 불여우 자바스크립트창이 뜨는 오류를 수정
                this.insertTail("memo", "<a href=\""+g5_bbs_url+"/memo_form.php?me_recv_mb_id="+mb_id+"\" onclick=\"win_memo(this.href); return false;\">"+aslang[4]+"</a>");
            // 메일보내기
            if (email) 
                this.insertTail("mail", "<a href=\""+g5_bbs_url+"/formmail.php?mb_id="+mb_id+"&name="+encodeURI(name)+"&email="+email+"\" onclick=\"win_email(this.href); return false;\">"+aslang[5]+"</a>");
        }

		var pim_target = '';
		if(g5_pim) {
			pim_target = ' target="_blank"';
		}
		// 게시판테이블 아이디가 넘어왔을 경우
        if (g5_bo_table) {
            if (mb_id) { // 회원일 경우 아이디로 검색
                this.insertTail("mb_id", "<a href=\""+g5_bbs_url+"/board.php?bo_table="+g5_bo_table+"&sca="+g5_sca+"&sfl=mb_id,1&stx="+mb_id+"\""+pim_target+">"+aslang[6]+"</a>");
                this.insertTail("mb_cid", "<a href=\""+g5_bbs_url+"/board.php?bo_table="+g5_bo_table+"&sca="+g5_sca+"&sfl=mb_id,0&stx="+mb_id+"\""+pim_target+">"+aslang[7]+"</a>");
			} else { // 비회원일 경우 이름으로 검색
                this.insertTail("name", "<a href=\""+g5_bbs_url+"/board.php?bo_table="+g5_bo_table+"&sca="+g5_sca+"&sfl=wr_name,1&stx="+name+"\""+pim_target+">"+aslang[6]+"</a>");
                this.insertTail("cname", "<a href=\""+g5_bbs_url+"/board.php?bo_table="+g5_bo_table+"&sca="+g5_sca+"&sfl=wr_name,0&stx="+name+"\""+pim_target+">"+aslang[7]+"</a>");
			}
		}
        if (mb_id)
            this.insertTail("new", "<a href=\""+g5_bbs_url+"/new.php?mb_id="+mb_id+"\""+pim_target+">"+aslang[8]+"</a>");

        // 최고관리자일 경우
        if (g5_is_admin == "super") {
            // 포인트내역과 1:1문의
            if (mb_id) {
                this.insertTail("qna", "<a href=\""+g5_bbs_url+"/qalist.php?qmb="+mb_id+"\">"+aslang[40]+"</a>");
				this.insertTail("point", "<a href=\""+g5_admin_url+"/point_list.php?sfl=mb_id&stx="+mb_id+"\" target=\"_blank\">"+aslang[9]+"</a>");
                this.insertTail("modify", "<a href=\""+g5_admin_url+"/member_form.php?w=u&mb_id="+mb_id+"\" target=\"_blank\">"+aslang[10]+"</a>");
			}
		}
    }

    function showLayer() {
        clickAreaCheck = true;
        var oSideViewLayer = document.getElementById(this.targetObj);
        var oBody = document.body;
            
        if (oSideViewLayer == null) {
            oSideViewLayer = document.createElement("DIV");
            oSideViewLayer.id = this.targetObj;
            oSideViewLayer.style.position = 'absolute';
            oBody.appendChild(oSideViewLayer);
        }
        oSideViewLayer.innerHTML = this.makeNameContextMenus();
        
        if (getAbsoluteTop(this.curObj) + this.curObj.offsetHeight + oSideViewLayer.scrollHeight + 5 > oBody.scrollHeight)
            oSideViewLayer.style.top = (getAbsoluteTop(this.curObj) - oSideViewLayer.scrollHeight) + 'px';
        else
            oSideViewLayer.style.top = (getAbsoluteTop(this.curObj) + this.curObj.offsetHeight) + 'px';

        oSideViewLayer.style.left = (getAbsoluteLeft(this.curObj) - this.curObj.offsetWidth + 14) + 'px';

        divDisplay(this.targetObj, 'block');

        selectBoxHidden(this.targetObj);
    }

    function getAbsoluteTop(oNode) {
        var oCurrentNode=oNode;
        var iTop=0;
        while(oCurrentNode.tagName!="BODY") {
            iTop+=oCurrentNode.offsetTop - oCurrentNode.scrollTop;
            oCurrentNode=oCurrentNode.offsetParent;
        }
        return iTop;
    }

    function getAbsoluteLeft(oNode) {
        var oCurrentNode=oNode;
        var iLeft=0;
        iLeft+=oCurrentNode.offsetWidth;
        while(oCurrentNode.tagName!="BODY") {
            iLeft+=oCurrentNode.offsetLeft;
            oCurrentNode=oCurrentNode.offsetParent;
        }
        return iLeft;
    }


    function makeNameContextMenus() {
        var str = "<table class='mbLayer'>";
        
        var i=0;
        for (i=this.heads.length - 1; i >= 0; i--)
            str += this.heads[i].renderRow();
       
        var j=0;
        for (j=0; j < this.tails.length; j++)
            str += this.tails[j].renderRow();
        
        str += "</table>";
        return str;
    }

    function getRow(name) {
        var i = 0;
        var row = null;
        for (i=0; i<this.heads.length; ++i) 
        {
            row = this.heads[i];
            if (row.name == name) return row;
        }

        for (i=0; i<this.tails.length; ++i) 
        {
            row = this.tails[i];
            if (row.name == name) return row;
        }
        return row;
    }

    function hideRow(name) {
        var row = this.getRow(name);
        if (row != null)
            row.isVisible = false;
    }

    function dimRow(name) {
        var row = this.getRow(name);
        if (row != null)
            row.isDim = true;
    }
    // Internet Explorer에서 셀렉트박스와 레이어가 겹칠시 레이어가 셀렉트 박스 뒤로 숨는 현상을 해결하는 함수
    // 레이어가 셀렉트 박스를 침범하면 셀렉트 박스를 hidden 시킴
    // <div id=LayerID style="display:none; position:absolute;" onpropertychange="selectBoxHidden('LayerID')">
    function selectBoxHidden(layer_id) {
        //var ly = eval(layer_id);
        var ly = document.getElementById(layer_id);

        // 레이어 좌표
        var ly_left   = ly.offsetLeft;
        var ly_top    = ly.offsetTop;
        var ly_right  = ly.offsetLeft + ly.offsetWidth;
        var ly_bottom = ly.offsetTop + ly.offsetHeight;

        // 셀렉트박스의 좌표
        var el;

        for (i=0; i<document.forms.length; i++) {
            for (k=0; k<document.forms[i].length; k++) {
                el = document.forms[i].elements[k];    
                if (el.type == "select-one") {
                    var el_left = el_top = 0;
                    var obj = el;
                    if (obj.offsetParent) {
                        while (obj.offsetParent) {
                            el_left += obj.offsetLeft;
                            el_top  += obj.offsetTop;
                            obj = obj.offsetParent;
                        }
                    }
                    el_left   += el.clientLeft;
                    el_top    += el.clientTop;
                    el_right  = el_left + el.clientWidth;
                    el_bottom = el_top + el.clientHeight;

                    // 좌표를 따져 레이어가 셀렉트 박스를 침범했으면 셀렉트 박스를 hidden 시킴
                    if ( (el_left >= ly_left && el_top >= ly_top && el_left <= ly_right && el_top <= ly_bottom) || 
                         (el_right >= ly_left && el_right <= ly_right && el_top >= ly_top && el_top <= ly_bottom) ||
                         (el_left >= ly_left && el_bottom >= ly_top && el_right <= ly_right && el_bottom <= ly_bottom) ||
                         (el_left >= ly_left && el_left <= ly_right && el_bottom >= ly_top && el_bottom <= ly_bottom) ||
                         (el_top <= ly_bottom && el_left <= ly_left && el_right >= ly_right)
                        )
                        el.style.visibility = 'hidden';
                }
            }
        }
    }

    // 감추어진 셀렉트 박스를 모두 보이게 함
    function selectBoxVisible() {
        for (i=0; i<document.forms.length; i++) {
            for (k=0; k<document.forms[i].length; k++) {
                el = document.forms[i].elements[k];    
                if (el.type == "select-one" && el.style.visibility == 'hidden')
                    el.style.visibility = 'visible';
            }
        }
    }

    function divDisplay(id, act) {
        selectBoxVisible();

        document.getElementById(id).style.display = act;
    }

    function hideSideView() {
        if (document.getElementById("nameContextMenu"))
            divDisplay ("nameContextMenu", 'none');
    }

    var clickAreaCheck = false;
    document.onclick = function() {
        if (!clickAreaCheck) 
            hideSideView();
        else 
            clickAreaCheck = false;
    }
}

function apms_print(url) {

	if(!url) url = g5_purl;

	if (url.indexOf('?') > 0) {
		url	= url + '&pim=1&ipwm=1';
	} else {
		url	= url + '?pim=1&ipwm=1';
	}
	window.open(url, 'print', "width=760,height=720,scrollbars=1");
	return false;
}

function apms_form(id, url) {
	window.open(url, id, "width=810,height=680,scrollbars=1");
	return false;
}

function apms_page(id, url, opt) {
	$("#" + id).load(url, function() {
	    if(typeof is_SyntaxHighlighter != 'undefined'){
			SyntaxHighlighter.highlight();
		}
	});

	if(typeof(window["comment_box"]) == "function"){
		switch(id) {
			case 'itemcomment'	: comment_box('', 'c'); break;
			case 'viewcomment'	: comment_box('', 'c'); break;
		}
		document.getElementById("btn_submit").disabled = false;
	}

	if(opt) {
	   $('html, body').animate({
			scrollTop: $("#" + id).offset().top - 100
		}, 500);
	}
}

function apms_emoticon(fid, sid) {

	if(!fid) fid = 'wr_content';

	var url = g5_bbs_url + '/emoticon.php?fid=' + fid;

	if(sid) {
		url = url + '&sid=' + sid;
	}

	window.open(url, "emoticon", "width=600,height=600,scrollbars=1");
	return false;
}

function apms_delete(id, href, url) {
	if (confirm(aslang[11])) {
		$.post(href, { js: "on" }, function(data) {
			str = data.substr(0, 2);
			data = data.replace(str,'');
			if(str == "1|") {
				if(data) alert(data);
				return false;
			} else {
				if(data) alert(data);
				apms_page(id, url); 
			}
		});
	}
}

function apms_comment(id) {
	var str;
	var c_url;
	if(id == 'viewcomment') {
		c_url = './write_comment_update.page.php';
	} else {
		c_url = './itemcommentupdate.php';
	}
	var f = document.getElementById("fviewcomment");
	var url = document.getElementById("comment_url").value;
	if (fviewcomment_submit(f)) {
		$.ajax({
			url : c_url,
			type : 'POST',
			cache : false,
			data : $("#fviewcomment").serialize() + "&js=on",
			dataType : "html",
			success : function(data) {
				str = data.substr(0, 2);
				data = data.replace(str,'');
				if(str == "1|") {
					if(data) alert(data);
					return false;
				} else {
					apms_page(id, url);
					document.getElementById("btn_submit").disabled = false;
					document.getElementById('wr_content').value = "";
				}
			},
			error : function(data) {
				alert(aslang[12]);
				return false;
			}
		});
	}
}

function apms_good(bo_table, wr_id, act, id, wc_id) {
	var href;

	if(wr_id && wc_id) {
		href = './good.comment.php?bo_table=' + bo_table + '&wr_id=' + wr_id + '&good=' + act + '&wc_id=' + wc_id;
	} else {
		if(wr_id) {
			href = './good.apms.php?bo_table=' + bo_table + '&wr_id=' + wr_id + '&good=' + act;
		} else {
			href = './good.php?it_id=' + bo_table + '&good=' + act;
		}
	}

	$.post(href, { js: "on" }, function(data) {
		if(data.error) {
			alert(data.error);
			return false;
		} else if(data.success) {
			alert(data.success);
			$("#"+id).text(number_format(String(data.count)));
		}
	}, "json");
}

function apms_like(mb_id, act, id) {
	var href = g5_bbs_url + '/like.php?id=' + mb_id + '&act=' + act;
	$.post(href, { js: "on" }, function(data) {
		if(data.error) {
			alert(data.error);
			return false;
		} else if(data.success) {
			alert(data.success);
			$("#"+id).text(number_format(String(data.count)));
		}
	}, "json");
}

function apms_shingo(bo_table, wr_id, act) {
	var str;

	if(act == "lock") {
		str = aslang[13];
	} else if(act == "unlock") {
		str = aslang[14];
	} else {
		str = aslang[15];
		act = "";
	}

	var href = './shingo.php?bo_table=' + bo_table + '&wr_id=' + wr_id + '&act=' + act;

	if (confirm(str)) {
		$.post(href, { js: "on" }, function(data) {
			if(data.msg) {
				alert(data.msg);
				return false;
			}
		}, "json");
	}
}

// SNS
function apms_sns(id, url) {
	switch(id) {
		case 'facebook'		: window.open(url, "win_facebook", "menubar=0,resizable=1,width=600,height=400"); break;
		case 'twitter'		: window.open(url, "win_twitter", "menubar=0,resizable=1,width=600,height=400"); break;
		case 'googleplus'	: window.open(url, "win_googleplus", "menubar=0,resizable=1,width=600,height=600"); break;
		case 'naverband'	: window.open(url, "win_naverband", "menubar=0,resizable=1,width=410,height=540"); break;
		case 'naver'		: window.open(url, "win_naver", "menubar=0,resizable=1,width=450,height=540"); break;
		case 'kakaostory'	: window.open(url, "win_kakaostory", "menubar=0,resizable=1,width=500,height=500"); break;
		case 'tumblr'		: window.open(url, "win_tumblr", "menubar=0,resizable=1,width=540,height=600"); break;
		case 'pinterest'	: window.open(url, "win_pinterest", "menubar=0,resizable=1,width=800,height=500"); break;
	}
    return false;
}

// Response
function apms_response(mb_id, id, win, page, read) {

	var href = g5_bbs_url + '/response.php?mb_id=' + mb_id + '&id=' + id + '&win=' + win + '&page=' + page + '&read=' + read;

	document.location.href = href;

	return false;
}

function apms_textarea(id, mode) {
	var textarea_height = $('#'+id).height();
	if(mode == 'down') {
		$('#'+id).height(textarea_height + 50);
	} else if(mode == 'up') {
		if(textarea_height - 50 > 50) {
			$('#'+id).height(textarea_height - 50);
		}
	} else {
		$('#'+id).height(mode);
	}
}

function owl_random(owlSelector){
	owlSelector.children().sort(function(){
		return Math.round(Math.random()) - 0.5;
	}).each(function(){
		$(this).appendTo(owlSelector);
	});
}

var apms_leave = function(href) {
    if(confirm(aslang[16])) {
        document.location.href = href;
	}
	return false;
}

var apms_image = function(href) {
	var new_win = window.open(href, "large_image", "location=yes,links=no,toolbar=no,top=10,left=10,width=10,height=10,resizable=yes,scrollbars=no,status=no");
    new_win.focus();
	return false;
}

$(function(){
	$(".remember-me").click(function(){
		if($(this).is(":checked")) {
			if(!confirm(aslang[17])) {
				$(this).attr("checked", false);
				return false;
			}
		}
    });

	$('.leave-me').click(function() {
		apms_leave(this.href);
		return false;
    });

	$("a.item_image").click(function() {
		apms_image(this.href);
		return false;
	});

	$(".go-top").click(function() {
	   $('html, body').animate({ scrollTop: 0 }, 500);
	   return false;
	});

	$(".widget-setup").click(function() {
		var wset = $('.btn-wset');
		if(wset.is(":visible")){
			wset.hide();
		} else {
			wset.show();
		}
		return false;
	});

	// Tabs
	$('.nav-tabs[data-toggle="tab-hover"] > li > a').hover( function(){
		$(this).tab('show');
	});

	// Toggles
	$('.at-toggle .panel-heading a').on('click', function () {
		var clicked_toggle = $(this);

		if(clicked_toggle.hasClass('active')) {
			clicked_toggle.parents('.at-toggle').find('.panel-heading a').removeClass('active');
		} else {
			clicked_toggle.parents('.at-toggle').find('.panel-heading a').removeClass('active');
			clicked_toggle.addClass('active');
		}
	});
});
