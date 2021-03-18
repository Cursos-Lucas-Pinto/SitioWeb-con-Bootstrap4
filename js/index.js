$(function(){
    $('.carousel').carousel({
        interval: 1000
    });
    $('#contacto').on('show.bs.modal', function (e){
        console.log('El modal se está mostrando');

        $('#contactoBtn').removeClass('btn-outline-success');
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disabled', true);
    });

    $('#contacto').on('shown.bs.modal', function (e){
        console.log('El modal se mostró');
    });

    $('#contacto').on('hide.bs.modal', function (e){
        console.log('El modal se esta ocultando');
    });

    $('#contacto').on('hidden.bs.modal', function (e){
        console.log('El modal se ocultó');
        
        $('#contactoBtn').prop('disabled', false);
        $('#contactoBtn').removeClass('btn-primary');
        $('#contactoBtn').addClass('btn-outline-success');
    });
});