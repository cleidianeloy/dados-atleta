<h1>Projeto para certificação do DEVSTART</h2>
<h2>O desafio consiste em:</h2>
<p>
    Você deverá criar uma classe Atleta para concentrar os atributos e métodos dos atletas.
</p>
<p>
    A classe deverá receber os seguintes atributos:
</p>
<ul>
    <li>nome</li>
    <li>idade</li>
    <li>peso</li>
    <li>altura</li>
    <li>notas</li>
</ul>

<p>
    A classe deverá possuir os seguintes métodos:
</p>
<ul>
    <li>
        calculaCategoria(), para calcular a categoria do atleta;
    </li>
    <li>
        calculaIMC(), para calcular o IMC do atleta;
    </li>
    <li>
        calculaMediaValida(), para calcular a média válida do atleta.
    </li>
    <li>
        obtemNomeAtleta(), que retorna o nome do atleta
    </li>
    <li>
        obtemIdadeAtleta(), que retorna a idade do atleta
    </li>
    <li>
        obtemPesoAtleta(), que retorna o peso do atleta
    </li>
    <li>
        obtemNotasAtleta(), que retorna as notas do atleta
    </li>
    <li>
        obtemCategoria(), que retorna a categoria do atleta
    </li>
    <li>
        obtemIMC(), que retorna o IMC do atleta
    </li>
    <li>
        obtemMediaValida(), que retorna a média válida do atleta
    </li>
</ul>
<p>
    Utilize as seguintes regras:
</p>
<ol>
    <li>Para calcular a categoria
        <ul>
            <li>Infantil: 9 a 11 anos</li>
            <li>Juvenil: 12 e 13 anos</li>
            <li>Intermediário: 14 e 15 anos</li>
            <li>Adulto: 16 a 30 anos</li>
            <li>Sem categoria: demais idades</li>
        </ul>
    </li>
    <li>
        Para calcular o IMC
        <ul>
            <li>
                Fórmula: imc = peso / (altura x altura)
            </li>
        </ul>
    </li>
    <li>
        Para calcular a média válida
        <ul>
            <li>
            Método: Utilize o metodologia abordada no 
            <a href="https://github.com/cleidianeloy/notas-atletas">
                Projeto de Certificação 1.
            </a>
            </li>
        </ul>
    </li>
</ol>
<p>
    Exemplo de entrada
</p>

    // Declara o atleta
    const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

<p>
Exemplo de saída
</p>

    Nome: Cesar Abascal
    Idade: 30
    Peso: 80
    Altura: 1.7
    Notas: 10,9.34,8.42,10,7.88
    Categoria: Adulto
    IMC: 27.68166089965398
    Média válida: 9.2533333333








