
jQuery(function($) {
    $('.slideshow').bgSwitcher({
        images: ['https://images.unsplash.com/photo-1511920170033-f8396924c348?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
        'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29mZmVlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
        'https://images.unsplash.com/photo-1493925410384-84f842e616fb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvZmZlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGNvZmZlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60',
        'https://images.unsplash.com/photo-1531590878845-12627191e687?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvZmZlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60'],
        interval: 3000// 切り替える背景画像を指定
    });
});