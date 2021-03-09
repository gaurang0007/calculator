import React, { Component } from "react";
import "./Display.css";
import Buttons from "./Buttons";

class Display extends Component {
  state = {
    value: "0",
    memory: null,
    operator: null,
  };

  btnHandle = (name) => {
    const num = parseFloat(this.state.value);

    if (name === "AC") {
      this.setState({ value: "0", memory: null, operator: null });
      return;
    }

    if (name === "+/-") {
      this.setState({ value: (num * -1).toString(), operator: null });
      return;
    }

    if (name === "%") {
      this.setState({
        value: (num / 100).toString(),
        operator: null,
        memory: null,
      });
      return;
    }

    if (name === ".") {
      if (this.state.value.includes(".")) return;
      this.setState({ value: this.state.value + "." });
      return;
    }

    if (name === "+") {
      if (this.state.operator !== null) {
        if (this.state.operator === "+") {
          this.setState({
            memory: this.state.memory + parseFloat(this.state.value),
          });
        } else if (this.state.operator === "-") {
          this.setState({
            memory: this.state.memory - parseFloat(this.state.value),
          });
        } else if (this.state.operator === "x") {
          this.setState({
            memory: this.state.memory * parseFloat(this.state.value),
          });
        } else if (this.state.operator === "÷") {
          this.setState({
            memory: this.state.memory / parseFloat(this.state.value),
          });
        }
      } else {
        this.setState({ memory: parseFloat(num) });
      }

      this.setState({ value: "0", operator: "+" });
      return;
    }
    if (name === "-") {
      if (this.state.operator !== null) {
        if (this.state.operator === "+") {
          this.setState({
            memory: this.state.memory + parseFloat(this.state.value),
          });
        } else if (this.state.operator === "-") {
          this.setState({
            memory: this.state.memory - parseFloat(this.state.value),
          });
        } else if (this.state.operator === "x") {
          this.setState({
            memory: this.state.memory * parseFloat(this.state.value),
          });
        } else if (this.state.operator === "÷") {
          this.setState({
            memory: this.state.memory / parseFloat(this.state.value),
          });
        }
      } else {
        this.setState({ memory: parseFloat(num) });
      }

      this.setState({ value: "0", operator: "-" });
      return;
    }

    if (name === "x") {
      if (this.state.operator !== null) {
        if (this.state.operator === "+") {
          this.setState({
            memory: this.state.memory + parseFloat(this.state.value),
          });
        } else if (this.state.operator === "-") {
          this.setState({
            memory: this.state.memory - parseFloat(this.state.value),
          });
        } else if (this.state.operator === "x") {
          this.setState({
            memory: this.state.memory * parseFloat(this.state.value),
          });
        } else if (this.state.operator === "÷") {
          this.setState({
            memory: this.state.memory / parseFloat(this.state.value),
          });
        }
      } else {
        this.setState({ memory: parseFloat(num) });
      }

      this.setState({ value: "0", operator: "x" });
      return;
    }
    if (name === "÷") {
      if (this.state.operator !== null) {
        if (this.state.operator === "+") {
          this.setState({
            memory: this.state.memory + parseFloat(this.state.value),
          });
        } else if (this.state.operator === "-") {
          this.setState({
            memory: this.state.memory - parseFloat(this.state.value),
          });
        } else if (this.state.operator === "x") {
          this.setState({
            memory: this.state.memory * parseFloat(this.state.value),
          });
        } else if (this.state.operator === "÷") {
          this.setState({
            memory: this.state.memory / parseFloat(this.state.value),
          });
        }
      } else {
        this.setState({ memory: parseFloat(num) });
      }

      this.setState({ value: "0", operator: "÷" });
      return;
    }

    if (name === "=") {
      if (!this.state.operator) return;

      if (this.state.operator === "+") {
        this.setState({
          value: (this.state.memory + parseFloat(this.state.value)).toString(),
        });
      } else if (this.state.operator === "-") {
        this.setState({
          value: (this.state.memory - parseFloat(this.state.value)).toString(),
        });
      } else if (this.state.operator === "x") {
        this.setState({
          value: (this.state.memory * parseFloat(this.state.value)).toString(),
        });
      } else if (this.state.operator === "÷") {
        if (this.state.memory === "0" || this.state.value === "0") {
          this.setState({ value: "0" });
        } else {
          this.setState({
            value: (
              this.state.memory / parseFloat(this.state.value)
            ).toString(),
          });
        }
      }

      this.setState({ memory: null, operator: null });
      return;
    }

    if (this.state.value[this.state.value.length - 1] === ".") {
      this.setState({ value: this.state.value + name });
    } else {
      this.setState({ value: parseFloat(num + name).toString() });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="display">
          <div className="result">{this.state.value}</div>
        </div>

        <div className="row">
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="AC" onclick1={this.btnHandle} />
          </div>
          <div className="col-sm- row1 col-md-3 col-lr-3 row1">
            <Buttons name="+/-" onclick1={this.btnHandle} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="%" onclick1={this.btnHandle} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons
              name="÷"
              color="white"
              onclick1={this.btnHandle}
              bgcolor="#F5923E"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="7" onclick1={this.btnHandle} />
          </div>
          <div className="col-sm- row1 col-md-3 col-lr-3 row1">
            <Buttons name="8" onclick1={this.btnHandle} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="9" onclick1={this.btnHandle} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons
              name="x"
              color="white"
              onclick1={this.btnHandle}
              bgcolor="#F5923E"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="4" onclick1={this.btnHandle} />
          </div>
          <div className="col-sm- row1 col-md-3 col-lr-3 row1">
            <Buttons name="5" onclick1={this.btnHandle} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="6" onclick1={this.btnHandle} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons
              name="-"
              color="white"
              onclick1={this.btnHandle}
              bgcolor="#F5923E"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="1" onclick1={this.btnHandle} />
          </div>
          <div className="col-sm- row1 col-md-3 col-lr-3 row1">
            <Buttons name="2" onclick1={this.btnHandle} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="3" onclick1={this.btnHandle} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons
              name="+"
              color="white"
              onclick1={this.btnHandle}
              bgcolor="#F5923E"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-6 col-lr-6 row2">
            <Buttons name="0" onclick1={this.btnHandle} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons name="." onclick1={this.btnHandle} />
          </div>
          <div className="col-sm-3 col-md-3 col-lr-3 row1">
            <Buttons
              name="="
              color="white"
              onclick1={this.btnHandle}
              bgcolor="#F5923E"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
