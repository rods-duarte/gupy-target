const data = [
    {
        estado: "SP",
        valor: 67836.43
    },
    {
        estado: "RJ",
        valor: 36678.66
    },
    {
        estado: "MG",
        valor: 29229.88
    },
    {
        estado: "ES",
        valor: 27165.48
    },
    {
        estado: "Outros",
        valor: 19849.53
    },
]

function calculatePercentage(data) {
    const totalAmount = data.reduce((total, element) => element.valor + total, 0);
    const billing = [...data];

    for(const element of billing) {
        element.porcentagem = `${(element.valor/totalAmount * 100).toFixed(2)}%`;
    }

    console.log(billing);

    return billing;
}

calculatePercentage(data);