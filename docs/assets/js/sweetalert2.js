$(document).on('click', '.sweetalertBtn', function(){
    Swal.fire({
        icon: $(this).attr('aria-icon'),
        title: $(this).attr('aria-title'),
        text: $(this).attr('aria-text'),
        imageUrl: $(this).attr('aria-image-url'),
        imageHeight: $(this).attr('aria-image-height'),
        imageAlt: $(this).attr('aria-image-alt'),
        html: $(this).attr('aria-html'),

        showCloseButton: true,
        showCancelButton: true,

        showConfirmButton: true,
        // timer: 1500,

        footer: $(this).attr('aria-footer'),

    });
});