const TicTacToe = {
	player1: 'Player 1',
	player2: 'Player 2',
	board1: [],
	board2: [],
	turn: true,
	winConditions: [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7],
	],

	determineMark(e) {
		if (e.target.innerHTML !== '') return //If the clicked box already contains a string aka(X or O) do not overwrite. 

		this.turn === true
			? this.board1.push(Number(e.target.dataset.square))
			: this.board2.push(Number(e.target.dataset.square))
		this.turn === true ? (e.target.innerHTML = 'X') : (e.target.innerHTML = 'O')
		let playerBoard
		this.turn === true
			? (playerBoard = this.board1)
			: (playerBoard = this.board2)
		this.determineWin(playerBoard)
	},

	addEventToSquares() {
		document.querySelectorAll('.square').forEach((item) =>
			item.addEventListener('click', (e) => {
				TicTacToe.determineMark(e)
				this.turn = !this.turn
			}),
		)
	},

	determineWin(board) {
		let check1
    // Moved the every and includes methods into a function and it works!
		const isSubset = (array1, array2) =>
			array2.every((element) => array1.includes(element))
		this.winConditions.forEach(
			(subArray) => {
				check1 = isSubset(board, subArray)
				if (check1) {
					this.turn ? (player = this.player1) : this.player2
					document.querySelector('h1').innerHTML = `You win ${player}`
				}
			},)
	},
}

TicTacToe.addEventToSquares()





// const board = {
    


 

// }


// document.querySelectorAll('.square').forEach(square => {
//     square.addEventListener('click', selectSquare)
// })

// function selectSquare(e){
//     if (e.target.innerText !== '') return //If a string ('x' or 'o') has already been passed in, do not overwrite it.
//     e.target.innerText = 'x'   
// }