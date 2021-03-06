const {
  TextField,
  RaisedButton,
  Paper
} = mui;

SignUp = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  _handleSubmit(event) {
    event.preventDefault();

    let userName = this.refs.userName.getValue();
    let password = this.refs.password.getValue();
    //accounts api
    Accounts.createUser({
      username: userName,
      password: password,
    }, (error) => {
      if (error) {
        console.log(error);
        return;
      }
      this.context.router.push('/account');
    });
  },

  getStyles() {
    return {
      textField: {
        display: 'block',
        width: '100%'
      },
      floatingLabel: {
        fontSize: '20px'
      },
      label: {
        fontWeight: '600',
        fontSize: '20px'
      },
      button: {
        height: '50px',
        width: '200px',
        marginTop: '50px',
        marginBottom: '15px'
      }
    };
  },

  render() {
    let styles = this.getStyles();
    return (
      <div className="signup">
      <Paper zDepth={2} className="paper">
        <form onSubmit={ this._handleSubmit }>

          <TextField
            ref="userName"
            style={styles.textField}
            floatingLabelText="用户名"
            floatingLabelStyle={styles.floatingLabel} />

          <TextField
            ref="password"
            style={styles.textField}
            floatingLabelText="密码"
            floatingLabelStyle={styles.floatingLabel}
            type="password" />

          <RaisedButton
            style={styles.button}
            labelStyle={styles.label}
            type="submit"
            label="注册"
            primary={true} />
        </form>
      </Paper>
      </div>
    );
  }
});