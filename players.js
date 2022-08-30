const loadPlayer = (playerName) =>{
    const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playerName}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPlayer(data.player[0]))
}

const displayPlayer = player =>{
    console.log(player);
    const playerContainer = document.getElementById('player-container');
    playerContainer.innerHTML =`
        <div class="card mb-3 mx-auto" style="max-width: 840px;">
            <div class="row g-0">
            <div class="col-md-5">
                <img src="${player.strThumb}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-7">
                <div class="card-body">
                <h3 class="card-title">${player.strPlayer}</h3>
                <p><b>Date of Birth:</b> ${player.dateBorn}</p>
                <p><b>Gender:</b> ${player.strGender}</p>
                <p><b>Height:</b> ${player.strHeight}</p>
                <p><b>Birth Place:</b> ${player.strBirthLocation}</p>
                <p><b>Nationality: </b> ${player.strNationality}</p>
                <p><b>Player Agent: </b> ${player.strAgent}</p>
                <p><b>Current Team:</b> ${player.strTeam}</p>
                <p><b>Last Trasfer Fee:</b> ${player.strSigning}</p>
                <p><b>Jursey Number:</b> ${player.strNumber}</p>
                <p><b>Playing Position:</b> ${player.strPosition}</p>
                </div>
            </div>
            </div>
        </div>
        <div class="card mb-3 mx-auto" style="max-width: 840px;">
        <div class="row g-0">
        <div class="col-md-12">
            <div class="card-body">
            <p><b>About ${player.strPlayer}:</b> ${player.strDescriptionEN}</p>
            </div>
        </div>
        </div>
    </div>
    `
}

const searchPlayer = () =>{
    const playerField = document.getElementById('player-field');
    const playerFieldText = playerField.value;
    loadPlayer(playerFieldText);
    playerField.value = '';
}
loadPlayer('Lionel Messi');