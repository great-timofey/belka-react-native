how to build debug APK:
1. root dir: react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res
2. cd ./android && ./gradlew assembleDebug
3. pick up debug APK in ./app/build/outputs/apk/debug
