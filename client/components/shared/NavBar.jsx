const { Tabs, Tab, IconButton } = mui;

NavBar = React.createClass({
	getInitialState() {
	    return {
		tabIndex: ''	          
	    };
	},

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	componentWillMount() {
	    this.setState({
	    	tabIndex: this._getSelectedIndex(),
	    });
	},
	componentWillReceiveProps(nextProps) {
	      this.setState({
	      	tabIndex: this._getSelectedIndex(),
	      });
	},
	_handleTabsChange(value) {
		this.context.router.push(value);
		this.setState({tabIndex: this._getSelectedIndex()});
	},

_getSelectedIndex() {
     return this.context.router.isActive('/home') ? '/home' :
       this.context.router.isActive('/signup') ? '/signup' :
       this.context.router.isActive('/account') ? '/account' :
       this.context.router.isActive('/chat') ? '/chat' :
       this.context.router.isActive('/login') ? '/login' : '';
   },

	render() {
		let style = {
			tabs: {
				  width: '390px',
			         position: 'absolute',
			         right: '60px',
			         textTransform: 'uppercase',
			},
			tab: {
				height: '64px',
				color: '#fff',
			},
			inkBar: {
				height: '4px',
				marginTop: '-4px',
			},
		};

		let currentUser = this.props.currentUser;
		let logOutMenu;
		if(currentUser) {
			logOutMenu = (
				<LogOutMenu currentUser={currentUser} />
				);
		} else {
			logOutMenu = '';
		}

		return (
			<div className="app-header">
				<Tabs 
					style={style.tabs}
					tabItemContainerStyle={{backgroundColor: 'transparent'}}
					value={this.state.tabIndex}
					onChange={this._handleTabsChange}>
					<Tab 
						label='Home'
						value='/home'
						style={style.tab} />
					<Tab 
						label={ currentUser ? 'account' : 'signup' }
						value={ currentUser ? '/account' : '/signup' }
						style={style.tab} />
					<Tab 
						label={ currentUser ? 'chat' : 'login' }
						value={ currentUser ? '/chat' : '/login' }
						style={style.tab} />
				</Tabs>
				{ logOutMenu }
			</div>
			);
	}
});
