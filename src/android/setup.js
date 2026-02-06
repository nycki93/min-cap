import dotenv from 'dotenv';
import { execSync } from 'node:child_process';

dotenv.config();
try {
  execSync(`mkdir -p out/android`);
  execSync(`node_modules/.bin/cap add android`);
  execSync(`yes | sdkmanager --licenses`);
  execSync(`keytool -genkey -v \
    -dname "cn=., ou=., o=., c=." \
    -keypass ${process.env.KEYSTOREPASS} \
    -storepass ${process.env.KEYSTOREPASS} \
    -keystore ./out/android/my.keystore \
    -alias repokey \
    -keyalg RSA \
    -keysize 2048 \
    -validity 10000
  `);
} catch (err) {
  const message = err.output[1].toString();
  console.log(message);
}