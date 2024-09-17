function addrow() {

    let tabela = document.querySelector('#infoTable')
    let row = document.createElement('tr')
    let col01 = document.createElement('td')
    let col02 = document.createElement('td')
    col01.textContent = 'João'
    col02.textContent = '25'
    row.appendChild(col01)
    row.appendChild(col02)
    tabela.appendChild(row)
}
