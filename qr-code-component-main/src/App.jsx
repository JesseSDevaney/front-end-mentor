import qrCode from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-content">
            <a href="https://frontendmentor.io" target="_blank">
              <img src={qrCode} className="qr-code" alt="QR Code" />
            </a>
            <div className="content">
              <p className="title">
                Improve your front-end skills by building projects
              </p>
              <p className="description">
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/jessesdevaney" target="_blank">
          Jesse Devaney
        </a>
        .
      </div>
    </div>
  );
}

export default App;
