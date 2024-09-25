var defaultCity = $("#twzipcode").data("city"); // 縣市
var defaultState = $("#twzipcode").data("state"); // 鄉鎮市區
var defaultDist = $("#twzipcode").data("dist"); // 郵遞區號

$("#twzipcode").twzipcode({

    countySel: defaultCity,
    zipcodeSel: defaultState,
    districtSel: defaultDist,

    zipcodeIntoDistrict: true, // 郵遞區號自動顯示在區別選單中
    css: ["form-select w-50", "form-select w-50 ms-3"], // 自訂 "城市"、"地別" class 名稱
    countyName: "county", // 自訂城市 select 標籤的 name 值
    districtName: "district", // 自訂區別 select 標籤的 name 值
    zipcodeName: "zipCode" // 

});
$(document).ready(function () {
    $('select[name="county"]').attr({'aria-label': 'county', 'required': true});
    $('select[name="district"]').attr({'aria-label': 'district', 'required': true});
});