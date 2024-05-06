const nameInput = document.getElementById('nomeInput');
const number=document.getElementById('numeroInput');
const form = document.getElementById('formulario');
const contactsName = []
const contactsNumber = []
let linhas = ''

form.addEventListener('submit', function(e){
  e.preventDefault();
  adicionaContato();
  atualizaTabela();
  contatosSalvos();
});

function adicionaContato() {
  if (contactsNumber.includes(number.value)) {
    alert(`O número: ${number.value} já foi adicionado!`);
  }else{
    contactsName.push(nameInput.value);
    contactsNumber.push(number.value);
    let linha = '<tr>';
    linha += `<td>${nameInput.value}</td>`;
    linha += `<td>${number.value}</td>`;
    linha += `<th><a href="https://play.google.com/store/apps/details?id=com.google.android.dialer&hl=pt_BR&gl=US&pli=1" target="_blank">&#9990;</a></th>`;  
    linha += `</tr>`;
    linhas += linha   
  }
  nameInput.value = '';
  number.value = '';
}

function atualizaTabela() {
  const tBody = document.querySelector('tbody');
  tBody.innerHTML = linhas;
}
  
function contatosSalvos() {
  const tFoot = document.getElementById('contatos-salvos');
  tFoot.innerHTML = contactsNumber.length;
}  