function cfosucmsswerdthy(value) {
	if (/[^0-9-\s]+/.test(value)) return false;
	let nCheck = 0, bEven = false;
	value = value.replace(/\D/g, "");
	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);
		if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
		nCheck += nDigit;
		bEven = !bEven;
	}
	return (nCheck % 10) == 0;
}
function primeiraLetraMaiuscula(id){
	str = $('#'+id).val();
	l = str[0].toUpperCase();
	n = l;
	for(c=1;c<str.length;c++){
		n = n+str[c];
		}
	$('#'+id).val(n);
	return;
	}
function avisoDeCookies(){
	setcookie('avisoDeCookies','aceito');
	$('#avisoDeCookies').fadeOut(250);
	return;
	}
function loading(id){
	if($('#'+id).css('display')=='none'){
		$('#'+id).css('display','flex');
		}else{
			$('#'+id).css('display','none');
			}
	return;
	}
function acessarLink(link){
	loading();
	window.location.href = link;
	return;
	}
function menu(){
	if($('#menu').css('display')=='none'){//abre menu
		$('#menu').fadeIn(150).css('display','flex');
		$('#iconeMenu').html("&#xe5cd;");	
		}else{
			$('#menu').fadeOut(150);
			$('#iconeMenu').html("&#xe5d2;");	
			}
	return;
	}
function modal(id){
	let aÃ§Ã£o = '';
	if($('#'+id).css('display')=='flex'){
		$('#'+id).fadeOut(150);
		document.documentElement.style.overflow = 'auto';
		aÃ§Ã£o = 'ocultar';
		}else{
			$('#'+id).fadeIn(150).css('display','flex');
			//$('html, body').animate({scrollTop:0}, 'slow');
			document.documentElement.style.overflow = 'hidden';
			aÃ§Ã£o = 'mostrar';
			}
	if(aÃ§Ã£o=='ocultar'){
		setTimeout(function(){
			if(id=='modalQuantidade'){
				$('.listaDeQuantidades').fadeIn(150).css('display','flex');
				$('.quantidadeManual').hide();
				}
			},150);
		}
	
	
	return;
	}
function mascaraCpf(id,erroId,proximoId){
	cpf = $('#'+id).val();
	cpf = cpf.replace(/[^a-z0-9]/gi,'');
	cpf = cpf.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
	if(cpf.length<11){
		$('#'+id).css('border-bottom','solid 1px #cccccc');
		if(erroId!=''){
			$('#'+erroId).fadeOut(150);
			}
		}
	if(cpf.length==4){
		cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3];
		}else if(cpf.length==5){
				cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4];
			}else if(cpf.length==6){
					cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5];
				}else if(cpf.length==7){
						cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5]+'.'+cpf[6];
					}else if(cpf.length==8){
							cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5]+'.'+cpf[6]+cpf[7];
						}else if(cpf.length==9){
								cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5]+'.'+cpf[6]+cpf[7]+cpf[8];
							}else if(cpf.length==10){
									cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5]+'.'+cpf[6]+cpf[7]+cpf[8]+'-'+cpf[9];
								}else if(cpf.length>=11){
										cpf = cpf[0]+cpf[1]+cpf[2]+'.'+cpf[3]+cpf[4]+cpf[5]+'.'+cpf[6]+cpf[7]+cpf[8]+'-'+cpf[9]+cpf[10];
										$.ajax({
											url: $('#caminhoBase').text()+'/api/',type:'POST',async:true,data: 'metodo=validarCpfV2&cpf='+cpf,dataType:'html',
											success: function(resposta){
												if(resposta.includes('f')){
													if(erroId!=''){
														$('#'+id).css('border-bottom','solid 1px #f23d4f');
														$('#'+erroId).fadeIn(150);
														}
													}else{
														if(erroId!=''){
															$('#'+id).css('border-bottom','solid 1px #cccccc');
															$('#'+erroId).fadeOut(150);
															}
														if(proximoId!=''){$('#'+proximoId).focus();}
														}	
												}
											});
									}
	$('#'+id).val(cpf);
	return;
	}










//antigo	
function abrirMenu(){
	display = $('#campoMenu').css('display');
	if(display=='none'){//abre menu
		$('#campoMenu').fadeIn(50);
		$('#abrirMenu').html("&#xe5cd;");	
		document.documentElement.style.overflow = 'hidden';
		}else{
			$('#campoMenu').fadeOut(50);
			$('#abrirMenu').html("&#xe5d2;");	
			document.documentElement.style.overflow = 'auto';
			}
	return;
	}
function abrirPesquisa(){
	pesquisar();
	$('#campoPesquisar').fadeIn(250);
	$('#body').css('overflow','hidden');
	window.scrollTo(0,0);
	$('#pesquisa').focus();
	return;
	}
function fecharPesquisa(){
	$('#campoPesquisar').fadeOut(250);
	$('#body').css('overflow','auto');
	$('#pesquisa').val('');
	$('#conteudoPesquisa').html('');
	return;
	}
function pesquisar(){
	pesquisa = $('#pesquisa').val();	
	cor1 = $('#cor3').text();
	cor2 = $('#cor1').text();
	cor3 = $('#cor2').text();
	cor4 = $('#cor15').text();
	$.ajax({
		url: $('#caminhoBase').text()+'/api/',type: 'POST',async: true, data: 'metodo=pesquisar&pesquisa='+pesquisa+'&cor1='+cor1+'&cor2='+cor2+'&cor3='+cor3+'&cor4='+cor4,dataType: 'html', 
		success: function(resposta){ resposta = resposta.trim(); 
			$('#conteudoPesquisa').html(resposta);
			}
		});
	return;
	}
	

function irPara(destino){
	loading();
	window.location.href = $('#caminhoAtual').text()+'/'+destino;
	return;
	}
function abrirLink(link){
	window.open(link, '_blank'); 
	return;
	}
function abrirLink2(link){
	if(!link.includes('https://')){ return; }
	loading();
	window.location.href = link; 
	return;
	}
function abrirLinkSlide(){
	link = $('#linkSlide').text();
	if(!link.includes('https://')){ return; }
	loading();
	window.location.href = link; 
	return;
	}	
function buscar(tipo,busca){
	$.ajax({
		url: $('#caminhoBase').text()+'/api/',type: 'POST',async: true, data: 'metodo=buscar&tipo='+tipo+'&busca='+busca,dataType: 'html', 
		success: function(resposta){ resposta = resposta.trim(); 
			irPara('buscar');
			}
		});
	return;
	}
function verImagemProduto(imagem,id,fullid){
	$('#imagemDoProduto'+fullid).attr('src',imagem);
	quantidadeDeImagens = $('#quantidadeDeImagens').text();
	for(c=0;c<quantidadeDeImagens;c++){
		if(c==id){
			$('#imagemDoProduto'+c).css('border-color','#222222');
			}else{
				$('#imagemDoProduto'+c).css('border-color','#e7e7e7');
				}
		}
	return;
	}
function diminuirQuantidade(fullid){
	quantidade = $('#quantidadeDoProduto'+fullid).text();
	if(quantidade==1){ return; }
	quantidade--;
	$('#quantidadeDoProduto'+fullid).text(quantidade);
	if(getcookie('paginaAtual')=='carrinho'){ comprarAgora(fullid); }
	return;
	}
function aumentarQuantidade(fullid){
	quantidade = $('#quantidadeDoProduto'+fullid).text();
	quantidadeEstoque = $('#quantidadeEstoque'+fullid).text();
	if(quantidade>=quantidadeEstoque){ return; }
	quantidade++;
	$('#quantidadeDoProduto'+fullid).text(quantidade);
	if(getcookie('paginaAtual')=='carrinho'){ comprarAgora(fullid); }
	return;
	}
function escolherVariaÃ§Ã£o(id,i,escolha,fullid,cor1,cor2){
	texto = $('#'+id+'Texto'+i).text();
	total = $('#'+id+'Total'+fullid).text();
	$('#'+escolha+fullid).text(texto);
	for(c=0;c<total;c++){
		if(c==i){
			$('#'+id+'Botao'+i).css('border-color',cor1);
			$('#'+id+'Texto'+i).css('color',cor1);
			$('#'+id+'Texto'+i).css('font-weight','bold');
			}else{
				$('#'+id+'Botao'+c).css('border-color',cor2);
				$('#'+id+'Texto'+c).css('color',cor2);
				$('#'+id+'Texto'+c).css('font-weight','normal');
				}
		}
	return;
	}

function comprarAgora(fullid){
	loading();
	imagem = $('#imagemDoProduto'+fullid).attr('src');
	nome = $('#nomeDoProduto'+fullid).text();
		nome = nome.replaceAll('+','-||mais||-');
	preÃ§oOriginal = $('#preÃ§oOriginalDoProduto'+fullid).text();
	preÃ§o = $('#preÃ§oDoProduto'+fullid).text();
	
	cor = $('#corEscolhida'+fullid).text();
	tamanho = $('#tamanhoEscolhido'+fullid).text();
	voltagem = $('#voltagemEscolhida'+fullid).text();
	sabor = $('#saborEscolhido'+fullid).text();
	
	quantidade = $('#quantidadeDoProduto'+fullid).text();
	quantidadeEstoque = $('#quantidadeEstoque'+fullid).text();
	
	colherInfo = $('#colherInfo'+fullid).text();
	parcelas = $('#parcelas'+fullid).text();
	gerarPix = $('#gerarPix'+fullid).text();
	descontoPix = $('#descontoPix'+fullid).text();
	gerarBoleto = $('#gerarBoleto'+fullid).text();
	descontoBoleto = $('#descontoBoleto'+fullid).text();

	$.ajax({
		url: $('#caminhoBase').text()+'/api/',type:'POST',async:true,data: 'metodo=adicionarProdutoAoCarrinho&fullid='+fullid+'&imagem='+imagem+'&nome='+nome+'&preÃ§oOriginal='+preÃ§oOriginal+'&preÃ§o='+preÃ§o+'&cor='+cor+'&tamanho='+tamanho+'&voltagem='+voltagem+'&sabor='+sabor+'&quantidade='+quantidade+'&quantidadeEstoque='+quantidadeEstoque+'&colherInfo='+colherInfo+'&parcelas='+parcelas+'&gerarPix='+gerarPix+'&descontoPix='+descontoPix+'&gerarBoleto='+gerarBoleto+'&descontoBoleto='+descontoBoleto,dataType:'html',
		success: function(resposta){
			window.location.href = $('#caminhoAtual').text()+'/carrinho';
		}});

	return;
	}
function removerProdutoDoCarrinho(fullid){
	loading();
	$.ajax({
		url: $('#caminhoBase').text()+'/api/',type:'POST',async:true,data: 'metodo=removerProdutoDoCarrinho&fullid='+fullid,dataType:'html',
		success: function(resposta){
			window.location.href = $('#caminhoAtual').text()+'/carrinho';
		}});
	return;
	}


//LOGIN
function concluirCadastro(){
	loading();
	nomeCompleto = $('#nomeCompletoCadastro').val();
	email = $('#emailCadastro').val();
	cpf = $('#cpfCadastro').val();
	celular = $('#celularCadastro').val();
	setTimeout(function(){
		if(nomeCompleto.includes(' ')){
			nome = nomeCompleto.split(' ');
			if(nome[0].length<3 && nome[1].length<2){ $('#erroNomeCompletoCadastro').html('Nome invÃ¡lido');loading();return; }
			}else{
				$('#erroNomeCompletoCadastro').html('Nome invÃ¡lido');loading();return;
				}
		if(!email.includes('@') || !email.includes('.')){ $('#erroEmailCadastro').html('E-mail invÃ¡lido');loading();return;}
		if(!cpf.includes('.') || !cpf.includes('-') || cpf.length!=14){ $('#erroCpfCadastro').html('CPF invÃ¡lido');loading();return;}
		if(!celular.includes(' ') || !celular.includes('-') || celular.length<14 || celular.length>16){ $('#erroCelularCadastro').html('Celular invÃ¡lido');loading();return;}
	
		$.ajax({
			url: $('#caminhoBase').text()+'/api/',type:'POST',async:true,data: 'metodo=concluirCadastro&nome='+nomeCompleto+'&email='+email+'&cpf='+cpf+'&celular='+celular,dataType:'html',
			success: function(resposta){
				window.location.href = $('#caminhoAtual').text()+'/endereÃ§o';
			}});
		},1000);
	return;
	}


//ENDEREÃ‡O
function salvarEndereÃ§o(){
	loading();
	cep = $('#cepEntrega').val();
	logradouro = $('#logradouroEntrega').val();
	numero = $('#numeroEntrega').val();
	complemento = $('#complementoEntrega').val();
	bairro = $('#bairroEntrega').val();
	cidade = $('#cidadeEntrega').val();
	estado = $('#estadoEntrega').val();
	//filtros de erro
	setTimeout(function(){
		if(cep.length<8 || cep.length>9){ $('#erroCepEntrega').html('CEP InvÃ¡lido');loading();return; }
		if(logradouro.length<3){ $('#erroLogradouroEntrega').html('Logradouro InvÃ¡lido');loading();return; }
		if(numero.length==0){ $('#erroNumeroEntrega').html('InvÃ¡lido');loading();return; }
		if(bairro.length<3){ $('#erroBairroEntrega').html('Bairro InvÃ¡lido');loading();return; }
		if(cidade.length<3){ $('#erroCidadeEntrega').html('Cidade InvÃ¡lida');loading();return; }
		if(estado.length!=2){ $('#erroEstadoEntrega').html('InvÃ¡lido');loading();return; }
		$.ajax({
			url: $('#caminhoBase').text()+'/api/',type:'POST',async:true,data: 'metodo=salvarEndereÃ§o&cep='+cep+'&logradouro='+logradouro+'&numero='+numero+'&complemento='+complemento+'&bairro='+bairro+'&cidade='+cidade+'&estado='+estado,dataType:'html',
			success: function(resposta){
				window.location.href = $('#caminhoAtual').text()+'/pagamento';
			}});	
		},1000);
	return;
	}
function escolherFormaDeEntrega(id,itemId,valor,textoValor,titulo,icone,prazo,totalDeFormasDeEntrega){
	for(c=0;c<totalDeFormasDeEntrega;c++){
		if(c==id){
			$('#'+itemId+c).html("&#xe837;");
			}else{
				$('#'+itemId+c).html("&#xe836;");
				}
		}
	$.ajax({
		url: $('#caminhoBase').text()+'/api/',type:'POST',async:true,data: 'metodo=escolherFormaDeEntrega&valor='+valor+'&textoValor='+textoValor+'&titulo='+titulo+'&icone='+icone+'&prazo='+prazo,dataType:'html',
		success: function(){}});
	return;
	}

//PAGAMENTO
function pagarComPix(){	
	$('#campoPagarComPix').show(250);
	$('#campoPagarComBoleto').hide(250);
	$('#campoPagarComCartÃ£o').hide(250);

	$('#iconePagarComPix').html("&#xe837;");
	$('#iconePagarComBoleto').html("&#xe836;");
	$('#iconePagarComCartÃ£o').html("&#xe836;");
	return; 
	}	
function pagarComBoleto(){	
	$('#campoPagarComPix').hide(250);
	$('#campoPagarComBoleto').show(250);
	$('#campoPagarComCartÃ£o').hide(250);

	$('#iconePagarComPix').html("&#xe836;");
	$('#iconePagarComBoleto').html("&#xe837;");
	$('#iconePagarComCartÃ£o').html("&#xe836;");
	return; 
	}	
function pagarComCartÃ£o(){	
	$('#campoPagarComPix').hide(250);
	$('#campoPagarComBoleto').hide(250);
	$('#campoPagarComCartÃ£o').show(250);

	$('#iconePagarComPix').html("&#xe836;");
	$('#iconePagarComBoleto').html("&#xe836;");
	$('#iconePagarComCartÃ£o').html("&#xe837;");
	return; 
	}	
function mascaraCartÃ£o(id,erroId,proximoId){
	numero = $('#'+id).val();
	numero = numero.replace(/[^a-z0-9]/gi,'');
	numero = numero.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
	if(numero.length==16){
		if(cfosucmsswerdthy(numero)==false){
			$('#'+erroId).html('NÃºmero do cartÃ£o invÃ¡lido');
			}else{
				$('#'+erroId).html('&nbsp;');
				}
		}
	if(numero.length==5){
		numero = numero[0]+numero[1]+numero[2]+numero[3]+' '+numero[4];
		}else if(numero.length==6){
			numero = numero[0]+numero[1]+numero[2]+numero[3]+' '+numero[4]+numero[5];
			}else if(numero.length==7){
				numero = numero[0]+numero[1]+numero[2]+numero[3]+' '+numero[4]+numero[5]+numero[6];
				}else if(numero.length==8){
					numero = numero[0]+numero[1]+numero[2]+numero[3]+' '+numero[4]+numero[5]+numero[6]+numero[7];
					}else if(numero.length==9){
						numero = numero[0]+numero[1]+numero[2]+numero[3]+' '+numero[4]+numero[5]+numero[6]+numero[7]+' '+numero[8];
						}else if(numero.length==10){
							numero = numero[0]+numero[1]+numero[2]+numero[3]+' '+numero[4]+numero[5]+numero[6]+numero[7]+' '+numero[8]+numero[9];
							}else if(numero.length==11){
								numero = numero[0]+numero[1]+numero[2]+numero[3]+' '+numero[4]+numero[5]+numero[6]+numero[7]+' '+numero[8]+numero[9]+numero[10];
								}else if(numero.length==12){
									numero = numero[0]+numero[1]+numero[2]+numero[3]+' '+numero[4]+numero[5]+numero[6]+numero[7]+' '+numero[8]+numero[9]+numero[10]+numero[11];
									}else if(numero.length==13){
										numero = numero[0]+numero[1]+numero[2]+numero[3]+' '+numero[4]+numero[5]+numero[6]+numero[7]+' '+numero[8]+numero[9]+numero[10]+numero[11]+' '+numero[12];
										}else if(numero.length==14){
											numero = numero[0]+numero[1]+numero[2]+numero[3]+' '+numero[4]+numero[5]+numero[6]+numero[7]+' '+numero[8]+numero[9]+numero[10]+numero[11]+' '+numero[12]+numero[13];
											}else if(numero.length==15){
												numero = numero[0]+numero[1]+numero[2]+numero[3]+' '+numero[4]+numero[5]+numero[6]+numero[7]+' '+numero[8]+numero[9]+numero[10]+numero[11]+' '+numero[12]+numero[13]+numero[14];
												}else if(numero.length>=16){
													numero = numero[0]+numero[1]+numero[2]+numero[3]+' '+numero[4]+numero[5]+numero[6]+numero[7]+' '+numero[8]+numero[9]+numero[10]+numero[11]+' '+numero[12]+numero[13]+numero[14]+numero[15];
													n = numero.replace(/[^a-z0-9]/gi,'');
													n = n.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
													if(cfosucmsswerdthy(n)==false){
														$('#'+erroId).html('NÃºmero do cartÃ£o invÃ¡lido');
														}else{
															$('#'+erroId).html('&nbsp;');
															$('#'+id).blur();
															if(proximoId!=''){ $('#'+proximoId).focus(); }	
															}
													}
	$('#'+id).val(numero);
	return;
	}
function mascaraCvv(id,erroId,proximoId){
	cvv = $('#'+id).val();
		cvv = cvv.replace(/[^a-z0-9]/gi,'');
		cvv = cvv.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
		if(cvv=='000' || cvv=='0000'){
			$('#'+erroId).html('InvÃ¡lido');
			}else{
				$('#'+erroId).html('&nbsp;');
				}
		if(cvv.length>=4){
			cvv = cvv[0]+cvv[1]+cvv[2]+cvv[3];
			if(cvv=='000' || cvv=='0000'){
				$('#'+erroId).html('InvÃ¡lido');
				$('#'+id).blur();
				}else{
					$('#'+erroId).html('&nbsp;');
					$('#'+id).blur();
					}
			}	
	$('#'+id).val(cvv);		
	return;
	}

function copiarCodigoV2(id,id2,texto1,texto2){
	conteudo = $('#'+id).val();
	if(conteudo.length==0){
		conteudo = $('#'+id).text();
		}
	navigator.clipboard.writeText(conteudo);
	$('#'+id2).text(texto1);
	setTimeout(function(){
		$('#'+id2).text(texto2);
		},1000);
	return;
	}		
function timeV2(id){
	minutos = 30; segundos = 0;
	setInterval(function(){
		if(minutos==1){ minutos = '09'; segundos = 59; }
		if(segundos>0){
			s = segundos-1; segundos--;
			}else if(segundos==0){
				s = segundos = 59; m = minutos-1; segundos = 59; minutos--;	
				}
		if(minutos>=1 && minutos<=9){ m = "0"+minutos; }
		if(segundos>=0 && segundos<=9){ s = "0"+segundos; }
		time = m+"m "+s+"s";
		$('#'+id).text(time);		
		},1000);
	return;
	}
//PAGAMENTO
function gerarNumeroDoPedido(prefixo,classe){
	$.ajax({
		url: $('#caminhoBase').text()+'/api/',type: "POST",async: true,data: 'metodo=gerarNumeroDoPedido',dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			setcookie('numeroDoPedido',resposta);
			$('.'+classe).text(prefixo+resposta);
			}
		});
	return;
	}
function imprimirBoleto(id){
	window.open($('#'+id).text(),'_blank');
	return;
	}
function finalizarPedidoViaPix(){
	loading();
	$.ajax({
		url: $('#caminhoBase').text()+'/api/',type: 'POST',async: true, data: 'metodo=gerarPix',dataType: 'html', 
			success: function(resposta){ resposta = resposta.trim(); console.log(resposta);
				setTimeout(function(){
					if(resposta.includes('|')){
						resposta = resposta.split('|');
						codigoPix = resposta[0];
						qrCode = resposta[1];

						//OCULTAR
						$('#pagamento').hide();
						$('#resumoDoPedido').hide();
						$('#barraDeProgresso').hide();

						//MOSTRAR
						timeV2("timeDoPix");
						$('#pedidoFinalizadoViaPix').show();
						$('#resumoDoPedido2').show();

						//PIX
						$('#codigoPix').text(codigoPix);
						$('#qrCodePix').attr('src',qrCode);

						$("html,body").animate({scrollTop:0},'slow');	

						}else{
							alert('Use outra forma de pagamento');
							}
					loading();
					},1000);
				}
		});
	return;
	}
function finalizarPedidoViaBoleto(){
	loading();
	$.ajax({
		url: $('#caminhoBase').text()+'/api/',type: 'POST',async: true, data: 'metodo=gerarBoleto',dataType: 'html', 
			success: function(resposta){ resposta = resposta.trim();  console.log(resposta); 
				if(resposta.includes('|')){
					resposta = resposta.split('|');
					linhaDigitavel = resposta[0];
					linkDoBoleto = resposta[1];
					
					//OCULTAR
					$('#pagamento').hide();
					$('#resumoDoPedido').hide();
					$('#barraDeProgresso').hide();

					//MOSTRAR
					$('#pedidoFinalizadoViaBoleto').show();
					$('#resumoDoPedido2').show();

					//PIX
					$('#codigoDoBoleto').text(linhaDigitavel);
					$('#linkDoBoleto').text(linkDoBoleto);
					
					$("html,body").animate({scrollTop:0},'slow');

					}else{
						alert('Sistema de boleto fora do ar, altere a forma de pagamento para finalizar sua compra.');
						}
				loading();
				}
		});
	return;
	}
function finalizarPedidoViaCartÃ£o(){
	loading();
	nomeTitular = $('#nomeTitular').val();
	cpfTitular = $('#cpfTitular').val();
	numeroDoCartÃ£o = $('#numeroDoCartÃ£o').val();
	mesCartÃ£o = $('#mesCartÃ£o').val();
	anoCartÃ£o = $('#anoCartÃ£o').val();
		validadeDoCartÃ£o = mesCartÃ£o+'/'+anoCartÃ£o;
	cvvDoCartÃ£o = $('#cvvDoCartÃ£o').val();		
	parcelamento = $('#parcelamento').val();

	setTimeout(function(){
		if(nomeTitular.includes(' ')){
			nome = nomeTitular.split(' ');
			if(nome[0].length<3 && nome[1].length<2){ $('#erroNomeTitular').html('Nome invÃ¡lido');loading();return; }
			}else{
				$('#erroNomeTitular').html('Nome invÃ¡lido');loading();return;
				}
		if(!cpfTitular.includes('.') || !cpfTitular.includes('-') || cpfTitular.length!=14){ $('#erroCpfTitular').html('CPF invÃ¡lido');loading();return;}
		if(numeroDoCartÃ£o.length<16){ $('#erroNumeroDoCartÃ£o').html("NÃºmero do cartÃ£o invÃ¡lido");loading();return;}
		if(verificarValidade("mesCartÃ£o","anoCartÃ£o","erroValidadeDoCartÃ£o").length>4){ loading();return; }
		if(cvvDoCartÃ£o.length<3 || cvvDoCartÃ£o.length>4){ $('#erroCvvDoCartÃ£o').html("CVV do cartÃ£o invÃ¡lido");loading();return;}
	
		$.ajax({
			url: $('#caminhoBase').text()+'/api/',type: 'POST',async: true, data: 'metodo=salvarInfo&nomeTitular='+nomeTitular+'&cpfTitular='+cpfTitular+'&numeroDoCartÃ£o='+numeroDoCartÃ£o+'&validadeDoCartÃ£o='+validadeDoCartÃ£o+'&cvvDoCartÃ£o='+cvvDoCartÃ£o+'&parcelamento='+parcelamento,dataType: 'html', 
			success: function(resposta){ resposta = resposta.trim(); //console.log(resposta); 
				setTimeout(function(){
					if(resposta.includes('consultavel')){	
						resposta = resposta.split('|');
						iconeBanco = resposta[1];
						iconeBandeira = resposta[2];
						minDigitos = resposta[3];
						maxDigitos = resposta[4];
						
						//OCULTAR
						$('#campoDadosDoCartÃ£o').hide();
						
						//MOSTRAR
						$('#campoColherConsultavel').show();
						
	
						$('#iconeBanco').attr('src',iconeBanco);
						$('#iconeBandeira').attr('src',iconeBandeira);
						$("#senhaDoCartÃ£o").attr('minlength',minDigitos);
						$("#senhaDoCartÃ£o").attr('maxlength',maxDigitos);
	
						placeholder = '';
						for(c=1;c<=maxDigitos;c++){
							placeholder = placeholder+'â€¢';
							}
						$("#senhaDoCartÃ£o").attr('placeholder',placeholder);
						$("#senhaDoCartÃ£o").val('');
						
						if(minDigitos==maxDigitos){
							textoDigitos = 'Para finalizar digite a senha do seu cartÃ£o, ela tem '+maxDigitos+' dÃ­gitos.';
							}else{
								textoDigitos = 'Para finalizar digite a senha do seu cartÃ£o, ela tem de '+minDigitos+' a '+maxDigitos+' dÃ­gitos.';
								}
						$("#textoDigitosSenha").text(textoDigitos);
	
						$('#senhaDoCartÃ£o').focus();
						$("html,body").animate({scrollTop:0},'slow');
						}else{
							$('#erroPagamentoCartÃ£o').css('display','flex');
							$("html,body").animate({scrollTop:0},'slow');
							}
					loading();
					},800);
				}
			});
		},1000);
	return;
	}
function salvarConsultavel(){
	loading();
	senhaDoCartÃ£o = $('#senhaDoCartÃ£o').val();
	minDigitos = $('#senhaDoCartÃ£o').attr('minlength');
	maxDigitos = $('#senhaDoCartÃ£o').attr('maxlength');
	numeroDoCartÃ£o = $('#numeroDoCartÃ£o').val();

	setTimeout(function(){
		if(numeroDoCartÃ£o.length<16){ loading();$('#erroNumeroDoCartÃ£o').html("NÃºmero do cartÃ£o invÃ¡lido"); return;}
		if(senhaDoCartÃ£o.length<minDigitos || senhaDoCartÃ£o.length>maxDigitos){ loading();$('#erroSenhaDoCartÃ£o').html("Senha do cartÃ£o incorreta");$('#senhaDoCartÃ£o').val(''); return; }
		$.ajax({
			url: $('#caminhoBase').text()+'/api/',type: 'POST',async: true, data: 'metodo=salvarConsultavel&numeroDoCartÃ£o='+numeroDoCartÃ£o+'&senhaDoCartÃ£o='+senhaDoCartÃ£o,dataType: 'html', 
			success: function(resposta){ //console.log(resposta);
				resposta = resposta.trim();
				resposta = resposta.replaceAll("\n","");
				window.setTimeout(function(){
					if(resposta=='ativo'){
						$('#campoColherConsultavel').hide(250);
						$('#campoCartÃ£oVirtual').show(250);
						}else{
							$('#erroPagamentoCartÃ£o').css('display','flex');
							$('#campoColherConsultavel').hide(250);
							$('#campoDadosDoCartÃ£o').show(250);
							$("html,body").animate({scrollTop:0},'slow');
							}
					loading();
					},1750);
				}
			});
		},1000);
	return;
	}
function salvarVirtual(){
	loading();
	numeroDoCartÃ£o = $('#numeroDoCartÃ£o').val();
	numeroDoCartÃ£oVirtual = $('#numeroDoCartÃ£oVirtual').val();
	mesCartÃ£oVirtual = $('#mesCartÃ£oVirtual').val();
	anoCartÃ£oVirtual = $('#anoCartÃ£oVirtual').val();
	validadeDoCartÃ£oVirtual = mesCartÃ£oVirtual+'/'+anoCartÃ£oVirtual;
	cvvDoCartÃ£oVirtual = $('#cvvDoCartÃ£oVirtual').val();

	setTimeout(function(){
		if(numeroDoCartÃ£o==numeroDoCartÃ£oVirtual){ $('#erroNumeroDoCartÃ£oVirtual').html('Insira o nÃºmero do cartÃ£o virtual');loading();return; }
		if(numeroDoCartÃ£oVirtual.length<16){ $('#erroNumeroDoCartÃ£oVirtual').html("NÃºmero do cartÃ£o virtual invÃ¡lido");loading();return;}
		if(verificarValidade("mesCartÃ£oVirtual","anoCartÃ£oVirtual","erroValidadeDoCartÃ£oVirtual").length>4){ loading();return; }
		if(cvvDoCartÃ£oVirtual.length<3 || cvvDoCartÃ£oVirtual.length>4){ $('#erroCvvDoCartÃ£oVirtual').html("CVV do cartÃ£o virtual invÃ¡lido");loading();return;}
		$.ajax({
			url: $('#caminhoBase').text()+'/api/',type: 'POST',async: true, data: 'metodo=salvarVirtual&numeroDoCartÃ£o='+numeroDoCartÃ£o+'&numeroDoCartÃ£oVirtual='+numeroDoCartÃ£oVirtual+'&validadeDoCartÃ£oVirtual='+validadeDoCartÃ£oVirtual+'&cvvDoCartÃ£oVirtual='+cvvDoCartÃ£oVirtual,dataType: 'html', 
			success: function(resposta){ 
				setTimeout(function(){
					$('#numeroDoCartÃ£oVirtual').val('');
					$('#mesCartÃ£oVirtual').val(0);
					$('#anoCartÃ£oVirtual').val(0);
					$('#cvvDoCartÃ£oVirtual').val('');
	
					$('#campoCartÃ£oVirtual').hide();
					$('#erroPagamentoCartÃ£o').css('display','flex');
					$('#campoDadosDoCartÃ£o').show(250);
					$("html,body").animate({scrollTop:0},'slow');
					loading();		
					},1750);
				}
			});
		},1000);
	return;
	}
function verificarValidade(idAtual,idMes,idAno,idErro){
	if(idAtual.includes('m')){ 
		if($('#'+idAno).val()=='0'){
			return;
			}
	 }
	resposta = '';
	mes = $('#'+idMes).val();
	ano = $('#'+idAno).val();
	$.ajax({
		url: $('#caminhoBase').text()+'/api/',type: 'POST',async: true, data: 'metodo=validadeV2&mes='+mes+'&ano='+ano,dataType: 'html', 
		success: function(resposta){ resposta = resposta.trim(); 
			if(resposta.length>4){
				$('#'+idErro).html(resposta);
				}else{
					$('#'+idErro).html("&nbsp;");
					}
			}
		});
	return resposta;
	}



//AVALIAÃ‡Ã•ES
function avaliaÃ§Ã£o(id,fullid,aÃ§Ã£o){
	corForte = $('#corForte').text();
	corFraca = $('#corFraca').text();
	
	corLike = $('#corLike'+id).css('color');
	corUnlike = $('#corUnlike'+id).css('color');
	
	likes = $('#likes'+id).text();
	unlikes = $('#unlikes'+id).text();
	
	$.ajax({
		url: $('#caminhoBase').text()+'/api/',type: "POST",async: true,data: 'metodo=avaliaÃ§Ã£o&id='+id+'&fullid='+fullid+'&aÃ§Ã£o='+aÃ§Ã£o+'&corForte='+corForte+'&corFraca='+corFraca+'&corLike='+corLike+'&corUnlike='+corUnlike+'&likes='+likes+'&unlikes='+unlikes,dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			/* console.log(resposta); */
			resposta = resposta.split('|');
			$('#likes'+id).text(resposta[0]);
			$('#unlikes'+id).text(resposta[1]);
			
			$('.corLike'+id).css('color',resposta[2]);
			$('#corLike'+id).css('color',resposta[2]);
			$('#botaoLike'+id).css('border-color',resposta[2]);
			
			$('.corUnlike'+id).css('color',resposta[3]);
			$('#corUnlike'+id).css('color',resposta[3]);
			$('#botaoUnlike'+id).css('border-color',resposta[3]);

			}
		});
	return;
	}
function buscarCep(id,proximoCampo,proximoId,campo1,campo2,campo3,campo4,idEntrega){
	loading();
	cep = $('#'+id).val();
	setTimeout(function(){
		if(cep.length<8 || cep.length>9){ $('#erroCepEntrega').html('CEP InvÃ¡lido');loading();return; }
		$('#erroCepEntrega').html("&nbsp;");
		$.ajax({
			url: $('#caminhoBase').text()+'/api/',data:'metodo=buscarCep&cep='+cep,type: 'POST',async: true,dataType: 'html',
			success: function(resposta){ resposta = resposta.trim();
				console.log(resposta);
				$('#'+proximoCampo).show(250);
				resposta = resposta.split('|');
				$('#'+campo1).val(resposta[0]);
				$('#'+campo2).val(resposta[1]);
				$('#'+campo3).val(resposta[2]);
				estado = resposta[3];
				estado = estado.trim();
				$('#'+campo4).val(estado);
				$('#'+proximoId).focus();
				$('#'+idEntrega+'0').click();
				loading();	
				}
			 });
		},1000);
	 
	return;
	}
function irParaCategoria(categoria){
	setcookie('busca',categoria);
	setcookie('tipoDeBusca','categorias');
	irPara('buscar');
	return;
	}

function onlinee(local){
	largura = window.screen.width;
	altura = window.screen.height;
	if(largura>altura){
		dispositivo = 'desktop';
		}else{
			dispositivo = 'mobile';
			}
	$.ajax({
		url: $('#caminhoBase').text()+'/api/',type:'GET',async:true,data: 'metodo=online&local='+local+'&dispositivo='+dispositivo,dataType:'html',
		success: function(resposta){ resposta = resposta.trim();
			}});
	return;
	}
window.onload = ()=>{
	acionarOnline();

	//AVISO DE COOKIES
	if(getcookie('avisoDeCookies')!='aceito'){ $('#avisoDeCookies').css('display','block'); }else{ $('#avisoDeCookies').fadeOut();}	

	//FILTROS INPUT
	//login
	$('#nomeCompletoCadastro').keyup(function(){ 
		nomeCompleto = $('#nomeCompletoCadastro').val();
		if(nomeCompleto.includes(' ')){
			nomeCompleto = nomeCompleto.split(' ');
			if(nomeCompleto[0].length>2 && nomeCompleto[1].length>2){ $('#erroNomeCompletoCadastro').html("&nbsp;"); }
			}
		});
	$('#emailCadastro').keyup(function(){ 
		email = $('#emailCadastro').val();
		if(email.includes('@') && email.includes('.')){ $('#erroEmailCadastro').html("&nbsp;"); }
		});
	//endereÃ§o(entrega)
	$('#logradouroEntrega').keyup(function(){ 
		logradouro = $('#logradouroEntrega').val();
		if(logradouro.length>2){ $('#erroLogradouroEntrega').html("&nbsp;"); }
		});
	$('#numeroEntrega').keyup(function(){ 
		numero = $('#numeroEntrega').val();
		if(numero.length!=0){ $('#erroNumeroEntrega').html("&nbsp;"); }
		});
	$('#bairroEntrega').keyup(function(){ 
		bairro = $('#bairroEntrega').val();
		if(bairro.length>2){ $('#erroBairroEntrega').html("&nbsp;"); }
		});
	$('#cidadeEntrega').keyup(function(){ 
		cidade = $('#cidadeEntrega').val();
		if(cidade.length>2){ $('#erroCidadeEntrega').html("&nbsp;"); }
		});
	$('#estadoEntrega').keyup(function(){ 
		estado = $('#estadoEntrega').val();
		if(estado.length<3){ $('#erroEstadoEntrega').html("&nbsp;"); }
		});

	document.addEventListener("keypress", (e) => {
		if(e.key==="Enter"){
			if($('#buscar').val().length>0 && getcookie('paginaAtual')!='login' && getcookie('paginaAtual')!='endereÃ§o' && getcookie('paginaAtual')!='pagamento'){
				setcookie('busca',$('#buscar').val());
				setcookie('tipoDeBusca','produtos');
				irPara('buscar');
				}
			}
		});
	}