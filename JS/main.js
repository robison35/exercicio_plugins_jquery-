$('.menu-hamburguer').ready(function() {
    $('#carrosel-imagens').slick({
        autoplay: true,
    })

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '__/_____/____'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })

    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    })

    $('form').validate({
        rules: {
            nomecompleto: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereçocompleto: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nomecompleto: 'Por favor digite seu nome completo'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
});