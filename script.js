let woodStock = [];

document.getElementById('addWoodButton').addEventListener('click', function() {
    const woodTypeInput = document.getElementById('woodTypeInput');
    const woodQuantityInput = document.getElementById('woodQuantityInput');
    const woodType = woodTypeInput.value.trim();
    const woodQuantity = parseInt(woodQuantityInput.value);

    if (woodType === '' || isNaN(woodQuantity) || woodQuantity <= 0) {
        alert('Por favor, insira um tipo de madeira e uma quantidade válida.');
        return;
    }

    const newWood = {
        type: woodType,
        quantity: woodQuantity
    };

    woodStock.push(newWood);

    updateWoodList();

    // Limpa os campos de entrada
    woodTypeInput.value = '';
    woodQuantityInput.value = '';
});

function updateWoodList() {
    const woodList = document.getElementById('woodList');
    woodList.innerHTML = '';

    woodStock.forEach((wood, index) => {
        const li = document.createElement('li');
        li.textContent = `${wood.type} - ${wood.quantity} unidades`;

        // Botão para remover a madeira do estoque
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', function() {
            woodStock.splice(index, 1);
            updateWoodList();
        });

        li.appendChild(removeButton);
        woodList.appendChild(li);
    });
}