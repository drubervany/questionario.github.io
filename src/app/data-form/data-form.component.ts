import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  questoes = [
              {"titulo":"Hábitos","perguntas":[{"questao":"Atualmente, você considera sua qualidade de vida","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"Excelente"},{"codigo":"1","descricao":"Boa"},{"codigo":"1","descricao":"Regular"},{"codigo":"1","descricao":"Ruim"},{"codigo":"1","descricao":"Muito Ruim"},{"codigo":"1","descricao":"Outro (especifique)"}]},{"questao":"Quantos dias por semana você costuma consumir frutas (naturais ou desidratadas) ou sucos naturais (direto da fruta ou polpa congelada)?","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"1 a 2 dias por semana"},{"codigo":"1","descricao":"3 a 4 dias por semana"},{"codigo":"1","descricao":"5 a 6 dias por semana"},{"codigo":"1","descricao":"Raramente ou nunca"},{"codigo":"1","descricao":"Todos os dias (inclusive sábado e domingo)"},{"codigo":"1","descricao":"Não informado"}]},{"questao":"E quantas porções você consome nesses dias?","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"1"},{"codigo":"2","descricao":"2"},{"codigo":"3","descricao":"3"},{"codigo":"4","descricao":"4"},{"codigo":"5","descricao":"5"},{"codigo":"6","descricao":"6 ou mais"}]},{"questao":"Quantos dias por semana você costuma comer pelo menos um tipo de verdura ou legume (NÃO considere: milho, batata, mandioca/aipim/macaxeira, mandioquinha/batata baroa, cará ou inhame)?","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"1 a 2 dias por semana"},{"codigo":"2","descricao":"3 a 4 dias por semana"},{"codigo":"3","descricao":"5 a 6 dias por semana"},{"codigo":"4","descricao":"Raramente ou nunca"},{"codigo":"5","descricao":"Todos os dias (inclusive sábado e domingo)"}]},{"questao":"E quantas porções você consome nesses dias?","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"1 prato grande ou mais"},{"codigo":"2","descricao":"1/2 prato grande"},{"codigo":"3","descricao":"1/3 do prato grande"},{"codigo":"4","descricao":"1/4 do prato grande"}]},{"questao":"Em geral, as verduras/legumes são consumidos em qual refeição?","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"Só almoço"},{"codigo":"2","descricao":"Só janta"},{"codigo":"3","descricao":"Almoço ou Jantar"},{"codigo":"4","descricao":"Almoço e Jantar"}]},{"questao":"Em geral, as verduras/legumes são consumidos em qual refeição?","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"Só almoço"},{"codigo":"2","descricao":"Só janta"},{"codigo":"3","descricao":"Almoço ou Jantar"},{"codigo":"4","descricao":"Almoço e Jantar"}]},{"questao":"Quantas porções* de carne vermelha você consome NA SEMANA (carne de vaca, porco, cordeiro e cabra, incluindo  embutidos)?","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"1"},{"codigo":"2","descricao":"2"},{"codigo":"3","descricao":"3"},{"codigo":"4","descricao":"4"},{"codigo":"5","descricao":"5 a 6"},{"codigo":"6","descricao":"7 ou mais"},{"codigo":"7","descricao":"Nenhuma ou raramente"}]},{"questao":"Nos dias em que você consome açúcares e/ou doces*, normalmente são quantas porções? ","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"Até 1 porção"},{"codigo":"2","descricao":"2 porções"},{"codigo":"3","descricao":"3 porções"},{"codigo":"4","descricao":"4 ou mais porções"},{"codigo":"5","descricao":"Não consome"}]},{"questao":"Quantos dias por semana você costuma tomar refrigerante ou suco artificial em pó ou de caixinha com açúcar? NÃO considere opções light, diet ou zero.","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"1 ou 2 dias por semana"},{"codigo":"2","descricao":"3 a 4 dias por semana"},{"codigo":"3","descricao":"5 a 6 dias por semana"},{"codigo":"4","descricao":"Raramente ou nunca"},{"codigo":"5","descricao":"Todos os dias (inclusive sábado e domingo)"}]},{"questao":"Quanto você consome de água por dia? (Considere 1 copo de plástico = 200ml ou 1 garrafinha = 500ml)","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"1 a 4 copos (entre 0,5 e 1L)"},{"codigo":"2","descricao":"5 a 7 copos (entre 1 e 1,5L)"},{"codigo":"3","descricao":"8 a 9 copos (entre 1,5 e 2L)"},{"codigo":"4","descricao":"10 ou mais copos (2L ou mais)"},{"codigo":"5","descricao":"Nada ou pouco (menos de 0,5L)"}]},{"questao":"Quantas doses de bebida alcoólica você costuma consumir durante a semana?","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"1 a 2"},{"codigo":"2","descricao":"3 a 4"},{"codigo":"3","descricao":"5 a 6"},{"codigo":"4","descricao":"7 a 9"},{"codigo":"5","descricao":"10 ou mais"}]},{"questao":"Em relação ao cigarro, você:","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"Fuma Atualmente"},{"codigo":"2","descricao":"Fumou, mas parou há mais de 1 ano"},{"codigo":"3","descricao":"Fumou, mas parou há menos de 1 ano"},{"codigo":"4","descricao":"Nunca fumou"}]},{"questao":"Você pratica alguma atividade física?","tipo":"Binária","respostas":[{"codigo":"S","descricao":"Sim"},{"codigo":"N","descricao":"Não"}]}]}
             ,{"titulo":"Por favor, assinale os esportes que pratica, frequência e duração de cada atividade:","perguntas":[{"questao":"Atividade 1 - Qual Atividade física?","tipo":"Seleção","respostas":[{"codigo":"1","descricao":"Alongamento"},{"codigo":"2","descricao":"Basquete"},{"codigo":"3","descricao":"Bicicleta ergométrica"},{"codigo":"4","descricao":"Bilhar"},{"codigo":"5","descricao":"Bodypump"},{"codigo":"6","descricao":"Boliche"},{"codigo":"7","descricao":"Boxe"},{"codigo":"8","descricao":"Caminhada intensa (com cargas em subidas -ritimo rápido)"},{"codigo":"9","descricao":"Caminhada leve (descarregando carros- andar em casa-plano)"},{"codigo":"10","descricao":"Caminhada moderada (trilhas -caminhada como exercicio)"},{"codigo":"11","descricao":"capoeira"},{"codigo":"12","descricao":"Cicilismo (como laser -lento-esforço leve)"},{"codigo":"13","descricao":"Ciclismo (como lazer ou esforço moderado)"},{"codigo":"14","descricao":"Ciclismo (corrida -rápido -esforço, vigoroso)"},{"codigo":"15","descricao":"Correr"},{"codigo":"16","descricao":"Dança de salão( rítimo musical agitado)"},{"codigo":"17","descricao":"Dança de salão( rítimo musical lento)"},{"codigo":"18","descricao":"Dançar"},{"codigo":"19","descricao":"Escalar(rocha/rapel)"},{"codigo":"20","descricao":"Esteira"},{"codigo":"21","descricao":"Fresbe"},{"codigo":"22","descricao":"Futebol"},{"codigo":"23","descricao":"Golfe"},{"codigo":"24","descricao":"Hidroginástica"},{"codigo":"25","descricao":"Jumpo"},{"codigo":"26","descricao":"Lutas"},{"codigo":"27","descricao":"Musculação"},{"codigo":"28","descricao":"Natação"},{"codigo":"29","descricao":"Patinação"},{"codigo":"30","descricao":"Pesca"},{"codigo":"31","descricao":"Pilates"},{"codigo":"32","descricao":"Rugby"},{"codigo":"33","descricao":"Skate"},{"codigo":"34","descricao":"Step"},{"codigo":"35","descricao":"Tai Chi Chuan"},{"codigo":"36","descricao":"Tênis"},{"codigo":"37","descricao":"Tênis em dupla"},{"codigo":"38","descricao":"Transport"},{"codigo":"39","descricao":"Volei"},{"codigo":"40","descricao":"Yoga/Hatha"}]},{"questao":"Atividade 1 - Quantas vezes na semana","tipo":"Seleção","respostas":[{"codigo":"1","descricao":"1"},{"codigo":"2","descricao":"2"},{"codigo":"3","descricao":"3"},{"codigo":"4","descricao":"4"},{"codigo":"5","descricao":"5"},{"codigo":"6","descricao":"6"},{"codigo":"7","descricao":"7"}]},{"questao":"Atividade 1 - Duração (cada vez)","tipo":"Seleção","respostas":[{"codigo":"1","descricao":"10 Minutos"},{"codigo":"2","descricao":"15 Minutos"},{"codigo":"3","descricao":"20 Minutos"},{"codigo":"4","descricao":"25 Minutos"},{"codigo":"5","descricao":"30 Minutos"},{"codigo":"6","descricao":"35 Minutos"},{"codigo":"7","descricao":"40 Minutos"},{"codigo":"8","descricao":"45 Minutos"},{"codigo":"9","descricao":"50 Minutos"},{"codigo":"10","descricao":"55 Minutos"},{"codigo":"11","descricao":"60 Minutos"},{"codigo":"12","descricao":"65 Minutos"},{"codigo":"13","descricao":"70 Minutos"},{"codigo":"14","descricao":"75 Minutos"},{"codigo":"15","descricao":"80 Minutos"},{"codigo":"16","descricao":"85 Minutos"},{"codigo":"17","descricao":"90 Minutos"},{"codigo":"18","descricao":"95 Minutos"},{"codigo":"19","descricao":"100 Minutos"},{"codigo":"20","descricao":"105 Minutos"},{"codigo":"21","descricao":"110 Minutos"},{"codigo":"22","descricao":"115 Minutos"},{"codigo":"23","descricao":"120 Minutos"},{"codigo":"24","descricao":"125 Minutos"},{"codigo":"25","descricao":"130 Minutos"},{"codigo":"26","descricao":"135 Minutos"},{"codigo":"27","descricao":"140 Minutos"}]}]}
             ,{"titulo":"Você esta gravida ?","perguntas":[{"questao":"Você é uma gestante?","tipo":"Binária","respostas":[{"codigo":"S","descricao":"Sim"},{"codigo":"N","descricao":"Não"}]},{"questao":"Qual a medida da circunferência da sua cintura? MASC","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"< 94 cm"},{"codigo":"2","descricao":"94 a 102"},{"codigo":"3","descricao":"> 102 cm"},{"codigo":"4","descricao":"posição sinequanon se for homem, na base cadastro"}]},{"questao":"Qual a medida da circunferência da sua cintura FEM","tipo":"Alternativa","respostas":[{"codigo":"1","descricao":"< 80 cm"},{"codigo":"2","descricao":"80 a 88"},{"codigo":"3","descricao":"> 88"},{"codigo":"4","descricao":"posição sinequanon se for mulher na base cadastro"}]},{"questao":"Qual é o seu peso?","tipo":"Valor"},{"questao":"Qual a sua altura? (formato de exemplo: 1.70)","tipo":"Valor"},{"questao":"IMC","tipo":"Fórmula","formula":"através do peso e altura ( IMC = Peso/(altura x altura )","respostas":[{"codigo":"1","descricao":"Baixo Peso"},{"codigo":"2","descricao":"Eutrófico"},{"codigo":"3","descricao":"Sobrepeso"},{"codigo":"4","descricao":"Obesidade Grau I"},{"codigo":"5","descricao":"Obesidade Grau II"},{"codigo":"6","descricao":"Obesidade Grau III"}]}]}
             ]
  
  questionario: any = [];
  pergunta: any = [];
 
  exibirForm = false;
  proximaPergunta = 0;

  grupoQuestao = 0;
  totalGrupo = 0;
  totalQuestoesGrupo = 0;
  

  constructor() { 



  }

  ngOnInit() {

    this.totalGrupo = this.questoes.length-1;
    console.log(this.totalGrupo);

    this.questionario = this.questoes[0];
    console.log(this.questionario);

    this.totalQuestoesGrupo = this.questionario.perguntas.length-1;
    console.log(this.totalQuestoesGrupo);

    this.pergunta = this.questionario.perguntas[this.proximaPergunta];
    console.log(this.pergunta);


    

  }

  proxima(){
    console.log("Proxima...");
    this.exibirForm = !this.exibirForm;

    console.log(this.proximaPergunta);
    console.log(this.totalQuestoesGrupo);
    if (this.proximaPergunta >= this.totalQuestoesGrupo){
      console.log("Alterar grupo");
      this.grupoQuestao++;
      console.log(this.grupoQuestao);
      this.proximaPergunta = -1;

      this.questionario = this.questoes[this.grupoQuestao];
      console.log(this.questionario);
      
      this.totalQuestoesGrupo = this.questionario.perguntas.length-1;
      console.log(this.totalQuestoesGrupo);
    }

    this.pergunta = this.questionario.perguntas[++this.proximaPergunta];
    console.log(this.pergunta);
  }

  anterior(){
    console.log("Anterior...");
    this.exibirForm = !this.exibirForm;

    if (this.proximaPergunta <= 0){
      this.grupoQuestao--;
    }

    this.questionario = this.questoes[0];
    console.log(this.questionario);
    this.pergunta = this.questionario.perguntas[--this.proximaPergunta];
    console.log(this.pergunta);
  }

}
