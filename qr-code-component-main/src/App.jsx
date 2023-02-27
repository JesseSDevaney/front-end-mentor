import qrCode from "./assets/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://frontendmentor.io" target="_blank">
          <img src={qrCode} className="" alt="QR Code" />
        </a>
        {/* Improve your front-end skills by building projects Scan the QR code to visit
    Frontend Mentor and take your coding skills to the next level

    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Your Name Here</a>.
    </div> */}
      </div>
    </div>
  );
}

export default App;
