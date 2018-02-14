"use strict";

const player = require("play-sound")();
const cron = require("cron").CronJob

function chime (){
  player.play("./chime.mp3",err =>{
    if (err)throw err;
  });
}

  new cron('0 30 9 * * *', function () {
      chime()
  }).start();
  new cron('0 30 10 * * *', function () {
    chime()
  }).start();
  new cron('0 40 10 * * *', function () {
    chime()
  }).start();
  new cron('0 30 11 * * *', function () {
    chime()
  }).start();
  new cron('0 40 11 * * *', function () {
    chime()
  }).start();
  new cron('0 30 12 * * *', function () {
    chime()
  }).start();
  new cron('0 10 13 * * *', function () {
    chime()
  }).start();
  new cron('0 40 13 * * *', function () {
    chime()
  }).start();
  new cron('0 50 13 * * *', function () {
    chime()
  }).start();
  new cron('0 40 14 * * *', function () {
    chime()
  }).start();
  new cron('0 50 14 * * *', function () {
    chime()
  }).start();
  new cron('0 40 15 * * *', function () {
    chime()
  }).start();

