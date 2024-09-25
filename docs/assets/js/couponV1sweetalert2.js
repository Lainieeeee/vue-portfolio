$(document).on('click', '.sweetalertBtn', function(){
    Swal.fire({
        icon: $(this).attr('aria-icon'),
        text: $(this).attr('aria-text'),
        showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'はい',
        cancelButtonText: 'いいえ',
        // OKボタンがクリックされたときに実行される処理
        preConfirm: function() {
            // OKボタンがクリックされたときに実行される処理
            $('input[name="couponCode"]').val('');
        }
    });
});