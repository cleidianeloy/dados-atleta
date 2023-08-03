class Atleta{
    constructor(nome,idade,peso,altura,notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
        this.categoria = this.calcularCategoria();

        console.log(
            ` \n
             Nome: ${this.obtemNomeAtleta()} \n
             Idade: ${this.obtemIdadeAtleta()} \n
             Peso: ${this.obtemPesoAtleta()} \n
             Altura: ${this.obtemAlturaAtleta()} \n
             Notas: ${this.obtemNotasAtleta().join(',')} \n
             Categoria: ${this.obtemCategoria()} \n
             IMC: ${this.obtemIMC()} \n
             Media válida: ${this.obtemMediaValida()}
            `
        )
    }
    calcularCategoria(){
        if(this.idade >= 9 && this.idade <= 11){
            return "Infantil";
        }else 
        if(this.idade >= 12 && this.idade <= 13){
            return "Juvenil";
        }else
        if(this.idade >= 14 && this.idade <= 15){
            return "Intermediário";
        }else
        if(this.idade >= 16 && this.idade <= 30){
            return "Adulto";
        }
        return "Sem categoria";
    }
    calculaIMC(){
        return this.peso / (this.altura * this.altura);
    }
    calculaMediaValida(){
        let soma = 0;
        this.notas.sort(function (a , b){
            if(a > b){
                return 1; 
            }else if(a < b){
                return -1;
            }
            return 0;
        })
        this.notas.forEach((nota, index) =>{
            if(index !== 0 && index !== ( this.notas.length - 1 )){
                soma += nota;
            }
        })
        return soma / (this.notas.length - 2);
    }
    obtemNomeAtleta(){
        return this.nome;
    }
    obtemIdadeAtleta(){
        return this.idade;
    }
    obtemPesoAtleta(){
        return this.peso;
    }
    obtemAlturaAtleta(){
        return this.altura;
    }
    obtemNotasAtleta(){
        return this.notas;
    }
    obtemCategoria(){
        return this.categoria;
    }
    obtemIMC(){
        return this.calculaIMC();
    }
    obtemMediaValida(){
        return this.calculaMediaValida();
    }
}

const atleta  =  new Atleta(
    "Cesar Abascal",
    30, 
    80,
    1.70,
    [10, 9.34, 8.42, 10, 7.88]
)