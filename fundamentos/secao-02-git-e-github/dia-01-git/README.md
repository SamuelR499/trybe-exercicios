---
theme: 'night'
transition: 'slide'
title:  'Git Oque é e para que serve'
enableMenu: false
enableSearch: false
enableChalkboard: false
highlightTheme: 'monokai'
progressBar: true
---

## Aula 2.1

- Crie uma pasta no seu computador;
- Acesse a pasta que você acabou de criar;

--


### Inicianto um versionamento

Iniciamos um versionamento a partir de 
```sh
$ git init
```

--

Abra a pasta no _VsCode_
```sh
$ code .
```
---
> Crie um arquivo chamado README.md


--

- Adicione o arquivo novo em staging e realize um commit
>EXEMPLO
```sh
$ git add .
$ git commit -m "Descreva a alteração realizada"
```

--

> Crie uma nova `branch` com o comando:

```sh
$ git checkout -b <nome-da-branch>
 ```

 - Faça uma alteração no README.me e retorne para a branch main e realize o `merge` das alterações com o comando
   
```sh
$ git merge <nome-da-branch>
```
 --

---

## Aula 2.1 parte 2

> Agora que você já criou a pasta e mergeou as alterações, vamos avançar e criar novas branches!

--

1. Acesse a `branch` main e crie uma branch nova chamada `'atualiza-readme'` e acesse a branch;

```sh
$ git checkout main
$ git checkout -b atualiza-readme
```

--

2. Crie um arquivo chamado infos.txt;

```sh
$ touch infos.txt
```

--

3. Adicione novamente as alterações em staging e realize um commit;

```sh
$ git add .
$ git commit -m "Descreva a alteração realizada"
```

--

4. Crie uma `branch` nova a partir da branch atualiza-readme. A nova branch deve se chamar `'adiciona-infos'`;

```sh
$ git checkout -b adiciona-infos
```

--

5. Retorne para a branch main e realize o merge das alterações.

```sh
$ git checkout main
$ git merge adiciona-infos
```
--

---

## Por hoje é só !

![alt text](./images/e-por-hoje-e-so-pessoal.jpg)




