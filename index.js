"use strict";
//モジュール登録
const fs = require("fs");
const player = require("play-sound")();
const cron = require("cron").CronJob

//GPIOとかセットアップ
//status=0-授業中gpioOff
//status=1-休時間gpioOn
let status = 0;
let pin = 2;
//すでにセットアップデータがあると死ぬのでtry-catch必須
try{
  fs.writeFileSync('/sys/class/gpio/export', pin);
  fs.writeFileSync('/sys/class/gpio/gpio' + pin + '/direction', 'out');  
}catch(e){
}

//チャイム鳴らすタイミングで実行する関数
function chime (){
  player.play("./chime.mp3",err =>{
    if (err)throw err;
  });
  fs.writeFileSync('/sys/class/gpio/gpio' + pin + '/value', status);
}

  new cron('0 30 9 * * *', function () {
    status = 0;
    chime();
  }).start();
  new cron('0 30 10 * * *', function () {
    status = 1;
    chime();
  }).start();
  new cron('0 40 10 * * *', function () {
    status = 0;
    chime();
  }).start();
  new cron('0 30 11 * * *', function () {
    status = 1;
    chime();
  }).start();
  new cron('0 40 11 * * *', function () {
    status = 0;
    chime();
  }).start();
  new cron('0 30 12 * * *', function () {
    status = 1;
    chime();
  }).start();
  new cron('0 10 13 * * *', function () {
    status = 0;
    chime();
  }).start();
  new cron('0 40 13 * * *', function () {
    status = 1;
    chime();
  }).start();
  new cron('0 50 13 * * *', function () {
    status = 0;
    chime();
  }).start();
  new cron('0 40 14 * * *', function () {
    status = 1;
    chime();
  }).start();
  new cron('0 50 14 * * *', function () {
    status = 0;
    chime();
  }).start();
  new cron('0 40 15 * * *', function () {
    status = 1;
    chime();
  }).start();
  new cron('0 0 18 * * *', function () {
    status = 0;
    chime();
  }).start();

