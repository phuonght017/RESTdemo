const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
var input = process.argv[2];
console.log(lngDetector.detect(input ,2));
