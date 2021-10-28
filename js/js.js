
$(document).ready(function(){
    $('.content-galleri').load('galleri.html');
    $('.collumn-comments').load('comment.html');
    $('main').hide();
    $('.open-invitation').click(function(){
        $('header').slideUp('normal');
        $('main').slideDown('normal');
        $('footer').removeClass('d-none');
    });
    
    $('.btn-viewgalleri').click(function(){
        $('.more-galleri').removeClass('d-none');
        $('.btn-viewgalleri').addClass('d-none');
        $('.btn-hidegalleri').removeClass('d-none');
    });
    $('.btn-hidegalleri').click(function(){
        $('.more-galleri').addClass('d-none');
        $('.btn-viewgalleri').removeClass('d-none');
        $('.btn-hidegalleri').addClass('d-none');
    });

  // post data
  $("#btn-send").click(function(e){
    var nama = $("#name").val();
    var pesan = $("#comments").val();
        // validate
        if (nama.length < 1 && pesan.length < 1) {
            $.alert({
                title: 'Errors!',
                content: 'Please Insert Data !',
            });
        }
        if (nama.length < 1 && !pesan.length < 1){
            $.alert({
                title: 'Errors!',
                content: 'Please Correct Data !',
            });
        }
        if (!nama.length < 1 && pesan.length < 1){
            $.alert({
                title: 'Errors!',
                content: 'Please Correct Data !',
            });
        }
        if (!nama.length < 1 && !pesan.length < 1){
            $.confirm({
                title: 'Confirm!',
                content: 'Lanjut Kirim Pesan?',
                buttons: {
                    confirm: function () {
                        $.post("save.php",{nama:nama,pesan:pesan},function(data){
                            $(".collumn-comments").load("comment.hmtl");
                            $.alert('Success!');
                            // reset
                            $(':input','.form1')
                            .not(':button, :submit, :reset, :hidden')
                            .val('')
                        });
                    },
                    cancel: function () {
                        $.alert('Canceled!');
                    }
                }
            });
        }
    });


});

