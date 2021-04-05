const { request, response } = require('express');
const express = require('express');
const petshop = require('./petshop');

const app = express();

app.use(express.json());

app.get('/pets', (request, response) => {
    return response.send(petshop.listarPets());
});

app.get('/pets/:nome', (request, response) => {
    const { nome } = request.params;
    const buscarpet = petshop.buscarPet(nome);

    if (!buscarpet) {
        return response.status(404).json({ error: 'Pet não encontrado' });
    }

    return response.json(buscarpet);
});

app.post('/pets', (request, response) => {
    const { nome, tipo, idade, raca, peso, tutor, contato } = request.body;
    const pet = {
        nome,
        tipo,
        idade,
        raca,
        peso,
        tutor,
        contato,
        vacinado: false,
        servicos: [],
    };
    petshop.adicionarPet(pet);
    return response.json(pet);
});

app.put('/pets/:nome', (request, response) => {
    const params = request.params;
    const { nome, tipo, idade, raca, peso, tutor, contato } = request.body;

    const indexPet = pet.findIndex(pet => pet.params === params);

    if (findPet < 0) {
        return response.status(400).json({ error: 'Projeto não foi encontrado' });
    }

    const atualizarPet = {
        nome,
        tipo,
        idade,
        raca,
        peso,
        tutor,
        contato
    }

    pet[indexPet] = atualizarPet;


    return response.json(atualizarPet);
});

app.listen(3000, () => {
    console.log('Servidor rodando!')
});
