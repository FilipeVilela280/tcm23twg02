function loadData() {
    var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    function reportStatus() {
        console.log(oXHR.readyState);
        if (oXHR.readyState == 4)               // REQUEST COMPLETED.
            console.log(this.responseXML);
        showTheList(this.responseXML);      // ALL SET. NOW SHOW XML DATA.
    }

    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "library_Televisores.xml", true);        // true = ASYNCHRONOUS REQUEST (DESIRABLE), false = SYNCHRONOUS REQUEST.
    oXHR.send();
}




function showTheList(xml) {
    var divProdutos = document.getElementById('contentorProdutos');       
    var produto_List = xml.getElementsByTagName('Produto');       
    
    function createProduto(Produto) {
 //-----div caixaProduto-----------
    let divCaixaproduto = document.createElement("div"); 
    divCaixaproduto.className="caixa-produto";
    //---------------------------
    //-----descriçãoProduto-----------
    var divDescriçãoProduto=document.createElement("div");
    divDescriçãoProduto.className="descriçao-produto";
    var img=document.createElement("img");
    img.src=Produto.getElementsByTagName("imagem")[0].childNodes[0].nodeValue;
    var strongNome=document.createElement("strong");
    strongNome.className="nome-produto";
strongNome.innerHTML=Produto.getElementsByTagName("nome")[0].childNodes[0].nodeValue;
divDescriçãoProduto.appendChild(img);
divDescriçãoProduto.appendChild(strongNome);
    
    //----------------------------------
    
    //---------informação Produto-----------
    var divInformaçãoProduto=document.createElement("div");
    divInformaçãoProduto.className="informação-produto";
    var descriçao=document.createElement("p");
descriçao.className="descriçao-produto";
descriçao.innerHTML=produto_List[i].getElementsByTagName("descrição")[0].childNodes[0].nodeValue;
divInformaçãoProduto.appendChild(descriçao);

var divLinks=document.createElement("div");
divLinks.className="links-produto";
var vídeo = document.createElement("a");
vídeo.className="video";
vídeo.href = Produto.getElementsByTagName("vídeo")[0].childNodes[0].nodeValue;
vídeo.textContent = 'Vídeo Review';
vídeo.target="_blank";
var adicionarCarro = document.createElement("a");
adicionarCarro.className="adicionar-carro";
adicionarCarro.textContent = 'Adicionar';
divLinks.appendChild(vídeo);
divLinks.appendChild(adicionarCarro)

divInformaçãoProduto.appendChild(divLinks);



  //----------------------------------
  //-------- div preco--------------
  var divPreco=document.createElement('div');
divPreco.className="preço";
var strongPreco=document.createElement('strong');
strongPreco.className="preço-atual";
strongPreco.innerHTML=Produto.getElementsByTagName("preco")[0].childNodes[0].nodeValue;
divPreco.appendChild(strongPreco);
//--------------------------------

divCaixaproduto.appendChild(divDescriçãoProduto);
divCaixaproduto.appendChild(divInformaçãoProduto);
divCaixaproduto.appendChild(divLinks);
divCaixaproduto.appendChild(divPreco);
//-----fim caixa produto---------
  
return divCaixaproduto;

}

  
    for (var i=0;i<produto_List.length;i++) {
        divProdutos.appendChild(createProduto(produto_List[i])).firstChild.nodeValue;
        
    }
   
}
