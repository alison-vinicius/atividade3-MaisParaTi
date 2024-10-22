const times = ["Palmeiras", "Gremio", "Atletico MG", "Flamengo", "Botafogo", "Bragantino", "Fluminense", "Athletico-PR", "Internacional", "Fortaleza", "São Paulo", "Cuaibá", "Corinthians", "Cruzeiro", "Vasco", "Bahia", "Santos", "Goiás", "Coritiba", "America-MG"]
const pontos = [70, 68, 66,66,64,62,56,56,55,54,53,51,50,47,45,44,43,38,30,24]






// let nova_linha = document.createElement('tr')
// let nova_posicao = document.createElement('td')
// nova_posicao.textContent = 1
// nova_linha.appendChild(nova_posicao)
// document.querySelector('table').appendChild(nova_linha)







for(let i = 0; i < times.length; i++){
    let nova_linha = document.createElement('tr')
    let nova_posicao = document.createElement('td')
    nova_posicao.textContent = i+1
    nova_linha.appendChild(nova_posicao)

    let time = document.createElement('td')
    time.textContent = times[i]
    nova_linha.appendChild(time)

    let ponto = document.createElement('td')
    ponto.textContent = pontos[i]
    nova_linha.appendChild(ponto)




    document.querySelector('table').appendChild(nova_linha)
}




