const axios = require('axios');
const fs = require('fs')
var json2 = require('./küfür.json');
var json3 = require('./laflar.json')


var haber_bus = []
axios.get('https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=ff749befe2264b2883f0c3de199367aa')
  .then(function (response6) {
    // handle success
    var datalar1 = response6.data.articles;
    var haber1_bus_isim = datalar1[6].source.name;
    var haber1_bus_tit = datalar1[6].title;
    var haber1_bus_des = datalar1[6].description;
    var haber1_bus_url = datalar1[6].url;
    var haber1_bus_img = datalar1[6].urlToImage;


    haber_bus.push(haber1_bus_isim, haber1_bus_tit, haber1_bus_des, haber1_bus_url, haber1_bus_img)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

var haber_eg = []

axios.get('https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=ff749befe2264b2883f0c3de199367aa')
  .then(function (response5) {
    // handle success
    var datalar2 = response5.data.articles;
    var haber1_eg_isim = datalar2[6].source.name;
    var haber1_eg_tit = datalar2[6].title;
    var haber1_eg_des = datalar2[6].description;
    var haber1_eg_url = datalar2[6].url;
    var haber1_eg_img = datalar2[6].urlToImage;


    haber_eg.push(haber1_eg_isim, haber1_eg_tit, haber1_eg_url, haber1_eg_img)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

var haber_sag = []

axios.get('https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=ff749befe2264b2883f0c3de199367aa')
  .then(function (response4) {
    // handle success
    var datalar3 = response4.data.articles;
    var haber1_sag_isim = datalar3[6].source.name;
    var haber1_sag_tit = datalar3[6].title;

    var haber1_sag_url = datalar3[6].url;
    var haber1_sag_img = datalar3[6].urlToImage;

    haber_sag.push(haber1_sag_isim, haber1_sag_tit, haber1_sag_url, haber1_sag_img)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
var haber_bil = []

axios.get('https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey=ff749befe2264b2883f0c3de199367aa')
  .then(function (response3) {
    // handle success
    var datalar4 = response3.data.articles;
    var haber1_bil_isim = datalar4[6].source.name;
    var haber1_bil_tit = datalar4[6].title;

    var haber1_bil_url = datalar4[6].url;
    var haber1_bil_img = datalar4[6].urlToImage;
    haber_bil.push(haber1_bil_isim, haber1_bil_tit, haber1_bil_url, haber1_bil_img)


  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

var haber_spor = []
axios.get('https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=ff749befe2264b2883f0c3de199367aa')
  .then(function (response2) {
    // handle success
    var datalar5 = response2.data.articles;
    var haber1_spor_isim = datalar5[6].source.name;
    var haber1_spor_tit = datalar5[6].title;

    var haber1_spor_url = datalar5[6].url;
    var haber1_spor_img = datalar5[6].urlToImage;

    haber_spor.push(haber1_spor_isim, haber1_spor_tit, haber1_spor_url, haber1_spor_img)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


const tmi = require('tmi.js');
const { username, channel } = require('tmi.js/lib/utils');

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: 'fghsdafgh',
    password: 'h9n8rp8xac66i44ntlyu8uez2t8myx'
  },
  channels: ['fghsdafgh']
});

client.connect();
const { v4: uuidv4 } = require('uuid');
const { clear } = require('tmi.js/lib/commands');
var sil_uuid = uuidv4();
console.log(sil_uuid)


client.on('message', (channel, tags, message, self,userstate) => {

  for (let i = 0; i < json2.length; i++) {

    if (message === json2[i]) {
      
      client.say(channel, `@${tags.username}, ( böyle bir mesaj attın  ${message} ) , Küfür Yasak!! İsmin ve Mesajın Kayıt Altında  `)
      const screenshot = require('screenshot-stream');
     
      const stream = screenshot('https://www.twitch.tv/fghsdafgh', '1024x768', {crop: true});
            var d = Math.floor(Math.random() * 3);
      var k = json3[d]
      console.log(k)
  
      client.say(channel, `@${tags.username} :( ${k}`);
      stream.pipe(fs.createWriteStream('t.jpg'));
      client.say(channel,"Hakaret suçu 125. maddesinde; “(1) Bir kimseye onur, şeref ve saygınlığını rencide edebilecek nitelikte somut bir fiil veya olgu isnat eden veya sövmek suretiyle bir kimsenin onur, şeref ve saygınlığına saldıran kişi, üç aydan iki yıla kadar hapis veya adlî para cezası ile cezalandırılır.")
      fs.appendFile('Küfüredenler.txt', `@${tags.username}  ${message} İncele`+"\n", function (err, data) {
      });

    }}})

client.on('message', (channel, tags, message, self) => {
  if (self) return;
  setInterval(() => {
    if (message.length > 1) {
      client.say(channel, `Kullanabileceğiniz Komutlar !haberler !instagram  `);
    }
  }, 100000);

  // var json = require('./sözler.json');

  // setInterval(() => {
  //   if (message.length > 1) {
  //     var d = Math.floor(Math.random() * 182);
  //     var k = json[d].quote
  //     client.say(channel, `${k}`);

  //   }
  // }, 120000);

  if (message.toLowerCase() === '!haberler') {
    client.say(channel, "TheMail | Tarafsız Yenilikçi Haber Platformu")
    for (let i = 0; i < 3; i++) {
      try {
        client.say(channel, ` ${"1) SPOR " + haber_spor[i] + "\n\n 2) EĞLENCE  " + haber_eg[i] + "\n\n 3) BİLİM  " + haber_bil[i]}`);

      } catch (error) {
        client.say(channel, "Bir Hata Oluştu Ekibimiz Hemen Düzeltiyor :)")
      }
    }

  }


  if (message.toLowerCase() === '!instagram') {

    client.say(channel, `https://www.instagram.com/themailturkce/`)
  }




});

