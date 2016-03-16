$(document).ready(function () {
  var HelloComponent = React.createClass ({
    dosomething: function () {
      alert("The text display is: " + this.props.children);
    },
    render: function () {
      return (
        <div>
          <h1>Hello {this.props.username}</h1>
          <a onClick={this.dosomething} href="#">Click me</a>
        </div>
      );
    }
  });

  ReactDOM.render(
    <div>
      <HelloComponent username="A">Welcome A</HelloComponent>
      <HelloComponent username="B">Welcome B</HelloComponent>
      <HelloComponent username="C">Welcome C</HelloComponent>
      <HelloComponent username="D">Welcome D</HelloComponent>
    </div>,
    document.getElementById("content"));
});
