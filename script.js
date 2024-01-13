function gameBoard(){
    const row = 3;
    const column = 3;
    let board = [];

    for (i = 0; i < row; i++){
        board[i]=[];
        for (j = 0; j < column; j++){
            board[i].push(cell());
        }
    }

    const getBoard = () => board;

    const dropToken = (r, c, player) => {
        if (board[r][c].getValue() == 'A'){
            board[r][c].addToken(player);
        }
        else return ;
    }
    const printBoard = () =>{
        let boradWIthValues = board.map((row) => row.map((cell) => cell.getValue()));
        console.log(boradWIthValues)
    }

    return{
        getBoard,
        dropToken,
        printBoard
    }
}

function cell(){
    let value = 'A';
    const addToken = (player) => {
        value = player;
    }
    const getValue = () => value;

    return{addToken,getValue}
}

function game(){
    player = [
        {
            name: 'playerX',
            value: 'X',
        },
        {
            name: 'playerO',
            value: 'O',
        }
    ]

    const board = gameBoard();

    let activePlayer = player[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer == player[0] ? player[1] : player[0];
    };

    const getActivePlayer = () => activePlayer;

    const printNewBoard = () => {
        board.printBoard();
    };

    const playRound = (row, column) => {
        board.dropToken(row, column, getActivePlayer().value);
        switchPlayerTurn();
        board.getBoard();
        printNewBoard();
        console.log(row, column, getActivePlayer().value)
    };
    return{
        playRound,
        printNewBoard,
        getActivePlayer,
    }

}


game().playRound(2,2);