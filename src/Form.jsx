import React, { Commponent } from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      globalTitle: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  validate = e => {
    e.preventDefault();
    this.setState({
      globalTitle: "My Form - " + this.state.title
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.validate}>
          <label htmlFor="title">Form</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
          />
          <input type="submit" value="Validate" />
        </form>

        <div>Value on the form: {this.state.title}</div>
      </div>
    );
  }

  componentDidMount() {
    console.log("Rendered Form");
  }

  componentDidUpdate() {
    document.title = this.state.globalTitle;
    console.log("Title changed");
  }
}

export default Form;

/*

let c = new C() // constructor
c.render() // render()
c.componentDidMouunt();


c.shouldComponentUpdate()
c.render() // render()
componentDidUpdate();


*/
