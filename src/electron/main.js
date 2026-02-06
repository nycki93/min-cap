import { app, BrowserWindow } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;
function initWindow() {
  mainWindow = new BrowserWindow({
    width: 360,
    height: 640,
  });
  mainWindow.loadFile(path.join(__dirname, '../../out/app/index.html'));
}

app.whenReady().then(initWindow);

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
