/**
 * StateManager.js
 * Manage Game State
 * @author Hyunseok Oh
 */
var StateType = {
	LOGO: 0,
	LOAD: 1,
	LOGIN: 2,
	PLAY: 3,
};

var StateManager = {
	states: null,
	curState: null,
	oldState: null,
	initialize: function() {
		console.log('** Initialize Goblin.StateManager');
		console.log(StateType.LOOG);
		console.log(StateType.LOAD);
		console.log(StateType.LOGIN);
		console.log(StateType.PLAY);
		this.states = [];
		this.curState = StateType.LOAD;
		this.oldState = StateType.PLAY;
		console.log(this.states);
		console.log(this.curState);
		console.log(this.oldState);
	}
};