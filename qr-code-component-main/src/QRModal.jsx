import qrCode from "./assets/image-qr-code.png";
import "./QRModal.css";

function QRModal() {
  return (
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
  );
}

export default QRModal;
