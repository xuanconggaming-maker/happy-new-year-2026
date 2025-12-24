$(document).ready(function() {
    // Khởi tạo pháo hoa với độ mờ thấp hơn để trông tối hơn
    $('.demo').fireworks({ 
        opacity: 0.5, // Chỉnh thông số này thấp xuống (0.4 - 0.6) để pháo hoa tối đi
        width: '100%', 
        height: '100%' 
    });

    // Kích hoạt nhạc khi chạm vào màn hình (cho điện thoại)
    $('body').one('touchstart click', function() {
        var audio = document.getElementById('bg-music');
        if (audio) {
            audio.play();
        }
    });
});