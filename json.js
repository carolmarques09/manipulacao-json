// Criação do objeto 'aluno' com as informações
const aluno = [
    {
        nome: "Carol",
        idade: 19,
        curso: "Ciências da Computação",
        notas: [9.0, 6.0, 7.0]
    }
]

// Acessando propriedades e exibindo o nome do aluno e a primeira nota
console.log(aluno[0].nome, aluno[0].notas)

// Adicionar uma nova nota ao array de notas
aluno[0].notas.unshift(10.0)

// Exibir as notas
console.log(aluno[0].notas)

// Atualizar a idade do aluno para 22 anos
for (let i = 0; i < aluno.length; i++) {
    if (aluno[i].nome === "Carol") {
        aluno[i].idade = 22;
        break;
    }
}

// Exibir a idade atualizada
console.log(aluno[0].idade)

// Converter o objeto 'aluno' em uma string com o JSON.stringify
const alunoJSON = JSON.stringify(aluno)
console.log(alunoJSON)

// Converter uma string de volta para um objeto
const jsonString = '{"nome": "Carol", "idade": 22, "curso": "Ciências da Computação", "notas": "10.0, 9.0, 6.0, 7.0"}'

const objeto = JSON.parse(jsonString)

console.log(objeto.nome)
console.log(objeto.idade)
console.log(objeto.curso)
console.log(objeto.notas)

// Iteração das propriedades usando o loop for-in
// Uma nova variável foi declarada, porque não se pode repetir algo já declarado
const alunoNovo = {
    nome: "Carol",
    idade: 22,
    curso: "Ciências da Computação",
    notas: [10.0, 9.0, 6.0, 7.0]
};
  
  for (let propriedade in alunoNovo) {
    console.log(propriedade + ": " + alunoNovo[propriedade]);
}

// Cálculo da média das notas
const notasAluno = {
    nome: "Carol",
    notas: [10.0, 9.0, 6.0, 7.0]
};

// Função que calcula a média das notas
function calcularMedia(notasAluno) {
    const soma = notasAluno.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = soma / notasAluno.notas.length;
    return media;
}

// Chamar a função e exibir a média
const media = calcularMedia(notasAluno);
console.log(`A média das notas do(a) aluno(a) ${notasAluno.nome} é: ${media}`);

// Criação de um objeto JSON aninhado
let newAluno = {
    nome: "Yoona",
    idade: 21,
    curso: "Música"
};

// Adicionando a propriedade endereço, como um objeto JSON aninhado
newAluno.endereco = {
    rua: "Av. Ayrton Senna",
    cidade: "Floptropica",
    estado: "SP"
}

// Agora podemos exibir no console o objeto aluno com a nova propriedade já adicionada
console.log(newAluno);

// Exibindo no console a cidade e o estado do aluno
console.log(newAluno.endereco.cidade, newAluno.endereco.estado);

// Criando um array novo de objetos JSON chamado alunos
const alunoO = {
    nome: "Caetano",
    idade: 32,
    nota: 8.7,
    matrícula: 356387
};

// Criando array vazio pra armazenar os alunos
const alunos = [];

// Criando novos alunos e adicionando ao array
const novoAluno1 = {...alunoO, nome: "Flávio Venturini", idade: 23};
const novoAluno2 = {...alunoO, nome: "Yama", idade: 20};

alunos.push(novoAluno1);
alunos.push(novoAluno2);

// Usando um loop para adicionar mais alunos
// Para o índice 'i', que começa com zero, e vai até três novas variáveis
for (let i = 0; i < 3; i++) {
    alunos.push({
        nome: `Aluno ${i+3}`,
        idade: 18 + i,
        nota: Math.random() * 10,
        matricula: 564987 + i
    });
}

// Usando o método Math.random para gerar um número aleatório, que representa a idade 
console.log(alunos);

// Usando o método filter para criar um novo array, e filtrar apenas os que tiraram 8 na média de notas
const students = [
    { nome: "Joana", notass: [7, 9, 6] },
    { nome: "Mariane", notass: [6, 9, 10]},
    { nome: "Robert", notass: [5, 9, 10]}
];

const alunosAcima8 = students.filter(alunoo => {
    const mediaa = alunoo.notass.reduce((acc, nota) => acc + nota, 0) / alunoo.notass.length;
    return mediaa > 8;
});

console.log(alunosAcima8);