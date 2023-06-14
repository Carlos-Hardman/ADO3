"use strict";

// EXERCÍCIO 0 - ANTES DE MAIS NADA, IMPLEMENTE ESTA FUNÇÃO.
/**
 * Função que retorna um Array contendo os nomes dos alunos que fizeram este exercício.
 * @return {string[]} Os nomes dos alunos que fizeram este exercício.
 */
function nomesDosAlunos() {
    return [ "Carlos Hardman" ];
}

// EXERCÍCIO 1.
/**
 * Receba um valor em graus e converta para radianos.
 * @param {number} graus O valor em graus.
 * @return {number} O valor em radianos.
 * @throws ConvertError Se o valor em graus não for um número finito.
 */
function grausParaRadianos(graus) {

if (!isFinite(graus) || isNaN(graus) || graus ===null || graus ==='0' || graus ==='') {
    throw new  ConvertError(' invalid');
  }
  
else{
    var resultado= graus * 3.14159265358979323846 /180;   //grau x pi /180;
	return resultado;}
}

// EXERCÍCIO 2.
/**
 * Receba um valor em radianos e converta para graus.
 * @param {number} graus O valor em radianos.
 * @return {number} O valor em graus.
 * @throws ConvertError Se o valor em radianos não for um número finito.
 */
function radianosParaGraus(radianos) {
if(!isFinite(radianos)|| isNaN(radianos)|| radianos ===null || radianos ==='0' || radianos ===''){
  throw new  ConvertError(' invalid');
}
else{
   return radianos * 180 /3.14159265358979323846 ;}
  
}

// EXERCÍCIO 3.
/**
 * Converta uma temperatura entre 3 possíveis escalas: Celsius, Kelvin e Fahreinheit. As escalas são especificadas pelas strings "C", "F" e "K".
 * Zero graus Celsius é o mesmo que 32 graus Fahreinheit ou 273.15 graus Kelvin.
 * 100 graus Celsius é o mesmo que 212 graus Fahreinheit ou 373.15 graus Kelvin.
 * Os valores resultantes devem ser arredondados em 2 casas decimais. Use a função auxiliar arredondar2Casas para fazer isso.
 * @param {number} valor O valor da temperatura na escala especificada pelo parâmetro "de".
 * @param {string} de A escala da temperatura especificada pelo parâmetro "valor". Pode ser "K" para Kelvin, "C" para Celsius ou "F" para Fahreinheit.
 * @param {string} para A escala da temperatura a ser retornada. Pode ser "K" para Kelvin, "C" para Celsius ou "F" para Fahreinheit.
 * @return {number} O valor da temperatura correspondente.
 * @throw ConvertError Se o valor não for um número finito ou se qualquer uma das escalas for diferente de "C", "F" ou "K".
 */
function converterTemperatura(valor, de, para) {
    if (!isFinite(valor)|| isNaN(valor)|| valor===null || valor ==='0' || valor ==='') {
    throw new ConvertError('O valor deve ser um número finito.');
  }

  // Verificar se as escalas são válidas
  const escalasValidas = ['C', 'F', 'K'];
  if (!escalasValidas.includes(de) || !escalasValidas.includes(para)) {
    throw new ConvertError('As escalas devem ser "C", "F" ou "K".');
  }

  // Converter a temperatura para Celsius
  let temperaturaCelsius;
  if (de === 'C') {
    temperaturaCelsius = valor;
  } else if (de === 'F') {
    temperaturaCelsius = (valor - 32) * 5 / 9;
  } else if (de === 'K') {
    temperaturaCelsius = valor - 273.15;
  }

  // Converter a temperatura para a escala desejada
  let temperaturaFinal;
  if (para === 'C') {
    temperaturaFinal = temperaturaCelsius;
  } else if (para === 'F') {
    temperaturaFinal = temperaturaCelsius * 9 / 5 + 32;
  } else if (para === 'K') {
    temperaturaFinal = temperaturaCelsius + 273.15;
  }

  // Arredondar o valor para 2 casas decimais
  temperaturaFinal = arredondar2Casas(temperaturaFinal);

  return temperaturaFinal;
}

// Função auxiliar para arredondar para 2 casas decimais
function arredondar2Casas(valor) {
  return Math.round(valor * 100) / 100;
}

// EXERCÍCIO 4.
/**
 * Obtenha o fatorial de um número.
 * @param {number} n O valor do qual se deseja obter o fatorial.
 * @return {bigint} O valor de n! expresso em BigInt.
 * @throw ConvertError Se o parâmetro não for um número inteiro ou for menor que zero.
 */
function fatorial(n) {
     // Verifica se o parâmetro é um número inteiro positivo
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new ConvertError('O parâmetro deve ser um número inteiro positivo.');
  }

  // Casos base para 0 e 1
  if (n === 0 || n === 1) {
    return BigInt(1);
  }

  // Calcula o fatorial
  let resultado = BigInt(1);
  for (let i = 2; i <= n; i++) {
    resultado *= BigInt(i);
  }

  return resultado;
}


// EXERCÍCIO 5.
/**
 * Obtenha o n-ésimo número de Fibonacci.
 *
 * Dica:
 * Cuidado ao implementar essa função! A implementação mais direta pode demorar séculos para fornecer
 * o resultado de um número de Fibonacci grande. Mas uma implementação um pouco mais inteligente que
 * memorize resultados já anteriormente computados trás o mesmo resultado em microssegundos.
 *
 * @param {number} n O valor do qual se deseja obter o número de Fibonacci correspondente.
 * @return {bigint} n O n-ésimo número de Fibonacci expresso em BigInt.
 * @throw ConvertError Se o parâmetro não for um número inteiro ou for menor que zero.
 */
function fibonacci(n) {
    if (!Number.isInteger(n) || isNaN(n) || n ===-1) {
    throw new ConvertError('Invalid');
  }

  const memo = new Map();

  function fib(n) {
    if (n === 0) return 0n;
    if (n === 1) return 1n;

    if (memo.has(n)) {
      return memo.get(n);
    }

    const result = fib(n - 1) + fib(n - 2);
    memo.set(n, result);

    return result;
  }

  return fib(n);
}

// EXERCÍCIO 6.
/**
 * Obtenha o n-ésimo número triangular.
 *
 * @param {n} n O valor do qual se deseja obter o número triangular correspondente.
 * @return {bigint} n O n-ésimo número triangular expresso em BigInt.
 * @throw ConvertError Se o parâmetro não for um número inteiro ou for menor que zero.
 */
function triangular(n) {
  naoFizIssoAinda();
}





// EXERCÍCIO 7.
/**
 * Retorne uma expressão regular que valide um CEP da seguinte forma:
 * Cinco dígitos, talvez um hífen, mais três dígitos.
 * É importante que a expressão regular tenha menos que 25 caracteres de comprimento!
 * @return {RegExp} Uma expressão regular.
 */
function cepRegex() {
  return /^\d{5}-?\d{3}$/;
}

// EXERCÍCIO 8.
/**
 * Retorne uma expressão regular que valide um número de DDD brasileiro.
 * É importante que a expressão regular tenha menos que 60 caracteres de comprimento!
 * @return {RegExp} Uma expressão regular.
 */
function dddRegex() {
  return /^(?:1[1-9]|[2-9][1-9])$/;
}

// EXERCÍCIO 9.
/**
 * Utilizando AJAX ou fetch API, pesquise por um CEP na URL http://viacep.com.br/ws/XXXXX-XXX/json/,
 * onde XXXXX-XXX é o CEP a ser pesquisado.
 * @param {string} cep O CEP a ser pesquisado.
 * @return {Endereco} Uma instância da classe Endereco contendo o logradouro, bairro, localidade (cidade) e UF do CEP pesquisado.
 * @throws ConvertError Se o CEP a ser pesquisado não for uma string ou não tiver o formato correto de um CEP.
 * @throws PesquisaCepError Se o CEP não for encontrado.
 */
async function pesquisarCep(cep) {
    naoFizIssoAinda();
}

// EXERCÍCIO 10.
/**
 * Faça o formulário na tela de pesquisa de CEP. Você o encontra facilmente no HTML.
 *
 * No campo do resultado do CEP, você deve colocar as informações do CEP encontrado
 * (converta a instância de Endereco encontrada em string para fazer isso). Se ocorrer
 * algum erro na busca, coloque a mensagem de erro lá também (use o try-catch para isso).
 */
async function pesquisarCepDOM() {
    naoFizIssoAinda();
}

// EXERCÍCIO 11.
/**
 * Utilizando AJAX ou fetch API, pesquise por um CEP na URL https://pokeapi.co/api/v2/pokemon/NNNNNN,
 * onde NNNNNN é o número ou nome de um pokémon a ser pesquisado.
 * @param {number | string} chave O número ou nome do pokémon a ser pesquisado.
 * @return {Pokemon} Uma instância da classe Pokemon contendo o nome, o número e a URL da foto da arte oficial do pokémon visto de frente.
 * @throws PokemonNaoEncontradoError Se não existir pokémon com o nome ou número dado.
 */
async function pesquisarPokemon(chave) {
    naoFizIssoAinda();
}

// EXERCÍCIO 12.
/**
 * Faça o formulário na tela de pesquisa de pokémon. Você o encontra facilmente no HTML.
 *
 * Há três campos para os resultados: O nome do pokémon, o número e uma imagem.
 * Se ocorrer algum erro na busca, coloque a mensagem de erro no campo do nome e coloque
 * o link https://cdn-icons-png.flaticon.com/256/4467/4467515.png na foto (use o try-catch).
 */
async function pesquisarPokemonDOM() {
    naoFizIssoAinda();
}