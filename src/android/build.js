import dotenv from 'dotenv';
import { execSync } from 'node:child_process';
import path from 'path';

dotenv.config();
try {
  execSync(`node_modules/.bin/cap build android \
    --androidreleasetype    APK \
    --keystorepath          ../../../out/android/my.keystore \
    --keystorepass          ${process.env.KEYSTOREPASS} \
    --keystorealias         ${process.env.KEYSTOREALIAS} \
    --keystorealiaspass     ${process.env.KEYSTOREALIASPASS} \
    --signing-type          apksigner
  `, {
    stdio: 'inherit',
  });
  execSync(`mv \
    'out/android/capacitor/app/build/outputs/apk/release/app-release-signed.apk' \
    'out/android/app.apk'
  `);
} catch (err) {
  const message = err.output[1].toString();
  console.log(err);
}
            