$(document).ready(function() {
    // 1. Khởi tạo hiệu ứng pháo hoa lên class .demo
    $('.demo').fireworks({ 
        sound: false, // Tắt tiếng nổ mặc định của script nếu bạn chỉ muốn nghe nhạc
        opacity: 0.9, 
        width: '100%', 
        height: '100%' 
    });

    // 2. Xử lý phát nhạc
    // Vì trình duyệt chặn tự động phát, nhạc sẽ chạy ngay khi người dùng bấm bất kỳ đâu
    $('body').one('click', function() {
        var audio = document.getElementById('bg-music');
        
        audio.play().then(() => {
            console.log("Nhạc đang phát...");
        }).catch(function(error) {
            console.log("Chưa phát được nhạc do chính sách trình duyệt: ", error);
        });
    });
});