import dotenv from 'dotenv';
import { execSync } from 'node:child_process';
import { renameSync } from 'node:fs';
import path from 'path';

dotenv.config();
execSync(`${path.join('./node_modules', '.bin', 'cap')} build android \
    --androidreleasetype    APK \
    --keystorepath          ../../../out/android/my.keystore \
    --keystorepass          ${process.env.KEYSTOREPASS} \
    --keystorealias         ${process.env.KEYSTOREALIAS} \
    --keystorealiaspass     ${process.env.KEYSTOREALIASPASS} \
    --signing-type          apksigner
`, {
    stdio: 'inherit',
});
renameSync(
    'src/android/capacitor/app/build/outputs/apk/release/app-release-signed.apk',
    'out/android/app.apk',
);
