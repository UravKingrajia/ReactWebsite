import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { HackClubImg } from "./Images/image.js";
import "./Images/image.css";
import { Para } from "./Textbodies/textbodies.js";
import { Button } from "./Button/button.js";

class SectionOne extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <HackClubImg />
            </td>
            <td> Mason Hack Camp 2018 </td>
            <td>
              <HackClubImg />
            </td>
          </tr>
        </table>
        <br />
        <Para />
      </div>
    );
  }
}

class SectionTwo extends React.Component {
  render() {
    return (
      <div>
        <Button />
      </div>
    );
  }
}

class WholePage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <SectionOne />
        </div>
        <div>
          <h1>---</h1>
        </div>
        <div>
          <SectionTwo />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<WholePage />, document.getElementById("root"));
