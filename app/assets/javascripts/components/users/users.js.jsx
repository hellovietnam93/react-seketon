var UsersComponent = React.createClass ({
  getInitialState: function () {
    return {users: undefined};
  },

  componentDidMount: function() {
    this.serverRequest = $.getJSON("http://localhost:3000/users.json", function (json) {
      this.setState({
        users: json,
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function () {
    var userNode;
    if (this.state.users != undefined) {
      userNode = this.state.users.map(function (user, index) {
        return (
          <UserComponent user={user} key={index}></UserComponent>
        );
      });
    }

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>{I18n.t("users.headers.name")}</th>
            <th>{I18n.t("users.headers.email")}</th>
          </tr>
        </thead>
        <tbody>
          {userNode}
        </tbody>
      </table>
    );
  }
});


var UserComponent = React.createClass({
  render: function() {
    var user = this.props.user
    return (
      <tr className={"user" + user.id} key={this.props.key}>
        <td>
          <a href={"http://localhost:3000/users/" + user.id}>
            {user.name}
          </a>
        </td>
        <td>{user.email}</td>
      </tr>
    );
  }
});
