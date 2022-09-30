import Pix from "./Pix.js";
import QRCode from "react-qr-code";

const pix = new Pix("fbffcc8b-04a6-4fed-a86f-98207b116a4a");
const pixCode = pix.getPayload();
console.log(pixCode);

function App() {
  return (
    <div>
      <QRCode 
        size={256}
        value={pixCode}
      />
    </div>
  );
}

export default App;
