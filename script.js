(function (window, videojs) {
  var player = (window.player = videojs("videojs-vr-player"));
  player.mediainfo = player.mediainfo || {};
  player.mediainfo.projection = "360";

  var vr = (window.vr = player.vr({
    projection: "AUTO",
    debug: true,
    forceCardboard: false,
  }));
})(window, window.videojs);
