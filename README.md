# min-cap

minimum viable product for a cross-platform app with Capacitor and Electron.

## requirements

- bun
- podman-compose (for android builds)

## setup

```bash
bun install
```

## test in browser

```bash
bun build
bun serve
```

## build Electron app

```bash
bun run electron-build
```

## build Android app

copy *sample.env* to *.env* and fill it in. make up any passwords you want for apk signing.

```bash
bun run android-setup
bun run android-build
```

## thoughts

It's **shameful** how much junk gets pre-generated for both electron and for android apps. I've swept a whole 979 MB of Android build stuff under the rug, just to get a 3 MB apk file. And Capacitor generates about twenty files that you will never need to edit, and by default it dumps them in the src directory. You don't need to edit these! They're build artifacts! They should go in a temporary folder and then be discarded!! I've moved them to *out/android/capacitor* so I never have to look at them.

Electron is a little less bad but hoo boy I do not recommend Electron Forge, it clutters the repo with at least 6 new dependencies which it automatically inserts into your package.json at the top level. Those are sub-dependencies! They go in your package.json, not mine!! I've opted to use electron-builder instead which has a slightly saner approach to this. Also: this should be built into electron! I should be able to run `electron build appimage` and it should just *do* that.

The app itself is extremely minimalist because this is a proof of concept, normally you'd also want to set up some sort of build system for React or TypeScript or similar. I haven't tried to bundle any javascript dependcies because frankly I'm not sure I want them, but if you're trying to use this, my assumption is that your app builds a website into *out/app* before you try to build for Android or Electron.
