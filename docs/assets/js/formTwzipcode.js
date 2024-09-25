$("#twzipcode").twzipcode({
    zipcodeIntoDistrict: true, // 郵遞區號自動顯示在區別選單中
    css: ["form-select w-50","form-select w-50 ms-3"], // 自訂 "城市"、"地別" class 名稱 
    countyName: "city", // 自訂城市 select 標籤的 name 值
    districtName: "state" // 自訂區別 select 標籤的 name 值
});
$(document).ready(function() {
    $('select[name="city"]').attr('aria-label', 'city');
    $('select[name="state"]').attr('aria-label', 'state');
});