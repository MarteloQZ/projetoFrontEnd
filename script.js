//Desenvolvido por Gabriel Queiroz
$(document).ready(function(){
  $('#loginAluno').submit(function(evento){
    var usuario = $('#inputUsuario').val()
    var senha = $('#inputSenha').val()
    if(usuario == 'root' && senha == '1234'){
      $('#mensagem').addClass("alert alert-success alert-dismissible fade show")
      $('#mensagem').removeClass('alert-warning')
      $('#mensagem').text("Usuário logado!").show().fadeOut(3000)
    } else{
      $('#mensagem').addClass("alert alert-warning alert-dismisible fade show")
      $('#mensagem').removeClass('alert-success')
      $('#mensagem').text("Usuário ou senha inválida!").show().fadeOut(3000)
      evento.preventDeFault() //Bloquei o evento de submit
    }
  })

})