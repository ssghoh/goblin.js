/**
 * StateManager.js
 * Manage Game State
 * @author Hyunseok Oh
 */

/**
 * Assign STATE Constant Assign
 * Developer add each state
 */
var STATE = {
	LOGO: 0,
	LOAD: 1,
	LOGIN: 2,
	PLAY: 3
	/* To add new user defined state */
};

var StateManager = {
	state: null,
	curState: null,
	oldState: null,
	/**
 	 * Initialize StateManager
 	 */
	initialize: function() {
		console.log('** Initialize Goblin.StateManager');
		this.curState = STATE.LOGO;
		this.oldState = STATE.LOGO;
		this.transition(STATE.LOGO);
	},
	/**
 	 * Run State
 	 * @param {STATE.Type} Type : (LOGO or 0, LOAD or 1, LOGIN or 2, PLAY or 2)
 	 */
	transition: function(state) {
		this.state = null;
		this.oldState = this.curState;
		this.curState = state;
		switch(state) {
			case STATE.LOGO: this.state = new StateLogo(SCENE.IMG);	break;
			case STATE.LOAD: this.state = new StateLoad(SCENE.ANI); break;
			case STATE.LOGIN: this.state = new StateLogin(SCENE.APP); break;
			case STATE.PLAY: this.state = new StatePlay(SCENE.GAME); break;
		};
	}
};
