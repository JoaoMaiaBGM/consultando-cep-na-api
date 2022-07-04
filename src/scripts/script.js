const cepForm = document.getElementById('cep-form');
cepForm.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  
  event.preventDefault();

  const input = cepForm[0];
  const inputValue = input.value;
  let result = {
    logradouro: '',
    bairro: '',
    uf:''
  };

  const response = await fetch(`http://viacep.com.br/ws/${inputValue}/json`)
  .then((response) => response.json())
  .then((response) => result = {
    logradouro: response.logradouro,
    bairro: response.bairro,
    uf: response.uf
  })
  .catch((err) => console.log(`Erro ${err}`))

  console.log(response);

}