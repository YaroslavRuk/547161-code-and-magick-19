'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - 120;

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var congratulationTextX = CLOUD_X + GAP * 3;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', congratulationTextX, CLOUD_Y * 4);
  ctx.fillText('Список результатов:', congratulationTextX, CLOUD_Y * 6);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var randomBarHeight = (barHeight * times[i]) / maxTime;
    var gapAndBarWidth = (GAP * 5 + BAR_WIDTH) * i;
    var gapBetweenColumns = CLOUD_X + GAP + FONT_GAP + gapAndBarWidth;
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], gapBetweenColumns, CLOUD_HEIGHT);
    ctx.fillText(Math.round(times[i]), gapBetweenColumns, CLOUD_HEIGHT - FONT_GAP * 2 - randomBarHeight);
    ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(255, ' + getRandomInt(0, 100) + '%, 50%)';
    ctx.fillRect(CLOUD_X + GAP * 2 + gapAndBarWidth, CLOUD_HEIGHT - GAP * 2, BAR_WIDTH, (1 - randomBarHeight));
  }
};
