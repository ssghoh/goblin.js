/**
 * StateManager.js
 * Manage Game State
 * @author Hyunseok Oh
 */
var StateManager = {
	LOGO: 0,
	LOAD: 1,
	LOGIN: 2,
	PLAY: 3,
	current: null,
	old: null,
	state: null,
	initialize: function()	{
		console.log('** Initialize Goblin.StateManager');
		
		this.current = this.LOGO;
		this.old = this.LOGO;
		this.state = new StateLogo(); 
	},
	changeState: function(stateType) {
		this.old = this.current;
		this.current = stateType;
		
		this.state = null;
		switch(stateType) {
			this.LOGO:
				this.state = new StateLogo();
				break;
			this.LOAD:
				this.state = new StateLoad();
				break;
			this.LOGIN:
				this.state = new StateLogin();
				break;
			this.PLAY:
				this.state = new StatePlay();
				break;
		};
	}
};