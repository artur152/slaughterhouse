"use strict";

document.addEventListener("DOMContentLoaded", function() {

  if ( document.querySelector(".palylist-items") ) {
    video();
  }

  function video() {
    /** Video: Settings when page loaded */
    function videoSets() {
      const videos = document.getElementsByClassName("video");
      const muteButton = document.getElementsByClassName("volume-block");

      for (let muted = 0; muted < muteButton.length; muted++) {
        muteButton[muted].classList.add('muted_js');
      }
      for (let vid = 0; vid < videos.length; vid++) {
        videos[vid].muted = true;
      }
    }
    videoSets();

    /** Video: Video trigger **/
    function forPlay() {
      const videos = document.getElementsByClassName("video");
      const videos_wrap = document.querySelector(".palylist-items");

      videos_wrap.addEventListener("click", function(e) {
        playCustom(e.target);
        playNative(e.target);
      });

      for (let v = 0; v < videos.length; v++) {
        /* Time events */
        videos[v].addEventListener('loadeddata', function (e) {
          let hrs = e.target.parentNode.querySelector('.hours');
          let min = e.target.parentNode.querySelector('.minutes');
          let sec = e.target.parentNode.querySelector('.seconds');
          let videoDuration = parseFloat(e.target.duration).toFixed(2);

          //const currentTimer = e.target.parentNode.querySelector('.current-time');
          //const durationTimer = e.target.parentNode.querySelector('.duration-time');
          // currentTimer.textContent = parseFloat(e.target.currentTime).toFixed(2);
          // durationTimer.textContent = (videoDuration / 60).toFixed(2);

          HHmmss(hrs, min, sec, videoDuration);
        });

        videos[v].addEventListener('timeupdate', function (e) {
          let currentTimer = e.target.parentNode.querySelector('.current-time');
          let time = (e.target.currentTime).toFixed(2);

          //let hrs_curr = e.target.parentNode.querySelector('.hours-curr');
          //let min_curr = e.target.parentNode.querySelector('.minutes-curr');
          //let sec_curr = e.target.parentNode.querySelector('.seconds-curr');
          //let seekBarCurrent = e.target.parentNode.querySelector('.btn--seek-bar');
          //seekBarCurrent.value = (100 / e.target.duration) * e.target.currentTime;

          if (time > 60) {
            time = (e.target.currentTime / 60).toFixed(2);
          }
          ckeckTimeLine(currentTimer, time);

          // let videoDuration = parseFloat(e.target.duration).toFixed(2);
          // HHmmss_backwards(hrs_curr, min_curr, sec_curr, videoDuration);
        });
      }
    }
    forPlay();


    /** Video: Play trigger **/
    function forPlayCustom() {
      const playButton = document.getElementsByClassName("btn--play-pause");

      for (let play_custom = 0; play_custom < playButton.length; play_custom++) {
        playButton[play_custom].onclick = function (e) {
          let targetParent = findParent(e.target, '.playlist-video');
          let targetVideo = targetParent.querySelector('.video');
          playVideo(targetVideo);
        };
      }
    }
    forPlayCustom();


    /** Video: Mute trigger **/
    function forMuteCustom() {
      const muteButton = document.getElementsByClassName("btn--mute");

      for (let mute_custom = 0; mute_custom < muteButton.length; mute_custom++) {
        muteButton[mute_custom].onclick = function (e) {
          let targetParent = findParent(e.target, '.playlist-video');
          let targetVideo = targetParent.querySelector('.video');
          let targetMute = targetParent.querySelector('.btn--volume-bar');
          let muteParent = e.target.parentNode;

          muteVideo(targetVideo, muteParent, targetMute);
        };
      }
    }
    forMuteCustom();


    /** Video: Full Screen **/
    function forFullscrCustom() {
      const fullScreenButton = document.getElementsByClassName("btn--full-screen");

      for(let fullscr_custom = 0; fullscr_custom < fullScreenButton.length; fullscr_custom++) {
        fullScreenButton[fullscr_custom].onclick = function (e) {

          let targetParent = findParent(e.target, '.playlist-video');
          let targetVideo = targetParent.querySelector('.video');

          fullscreenToggle(targetVideo);
          fullscreenChange(targetParent);
        }
      }
    }
    forFullscrCustom();


    /** Video: Seekbar **/
    function forSeekTime() {
      const seekBar = document.getElementsByClassName("btn--seek-bar");

      for(let seekTime = 0; seekTime < seekBar.length; seekTime++) {
        seekBar[seekTime].addEventListener('change', function (e) {

          let targetParent = findParent(e.target, '.playlist-video');
          let targetVideo = targetParent.querySelector('.video');
          let time;

          time = (e.target.value / 100) * targetVideo.duration;
          targetVideo.currentTime = time;
        });
      }
    }
    forSeekTime();


    /** Video: Volumebar **/
    function forVolumeBar() {
      const volumeBar = document.getElementsByClassName("btn--volume-bar");

      for (let vol = 0; vol < volumeBar.length; vol++) {
        volumeBar[vol].addEventListener("change", function (e) {

          let targetParent = findParent(e.target, '.playlist-video');
          let targetVideo = targetParent.querySelector('.video');
          let targetMute = e.target.parentNode;

          if (e.target.value >= 0.01) {
            targetMute.classList.remove('muted_js');
            targetVideo.muted = false;
          } else {
            targetMute.classList.add('muted_js');
            targetVideo.muted = true;
            targetVideo.volume = e.target.value;
          }

          targetVideo.volume = e.target.value;
        });
      }
    }
    forVolumeBar();


    /** Video Functions **/
    /** Video: HHmmss **/
    function HHmmss(hours, minutes, seconds, videoTime) {
      let sec_n = videoTime;
      let h = Math.floor(sec_n / 3600);
      let m = Math.floor( (sec_n - (h * 3600)) / 60);
      let s = ( sec_n - (h * 3600) - (m * 60) ).toFixed(2);

      if(h < 10) {
        hours.textContent = '0' + h;
      }
      else {
        hours.textContent = h;
      }

      if(m < 10) {
        minutes.textContent = '0' + m;
      }
      else {
        minutes.textContent = m;
      }

      if(s < 10) {
        seconds.textContent = '0' + s;
      }
      else {
        seconds.textContent = s;
      }
    }

    function HHmmss_backwards(hours, minutes, seconds, videoTime) {
      let sec_n = parseInt(videoTime, 10);
      let h = Math.floor(sec_n / 3600);
      let m = Math.floor( (sec_n - (h * 3600)) / 60);
      let s = sec_n - (h * 3600) - (m * 60);

      setInterval( function() {
        // hours.textContent = '0' + h;
        // minutes.textContent = m;
        // seconds.textContent = s--;
      }, 1000);
    }


    /** Video: Check timeline **/
    function ckeckTimeLine(el, t) {
      if( el.textContent < 10) {
        el.textContent = '0' + t;
      } else if (el.textContent < 1 ) {
        el.textContent = '00';
      }
      else {
        el.textContent = t;
      }
    }

    /** Video: Fullscreen Toggle **/
    function fullscreenToggle(elem) {
      elem = elem || document.documentElement;
      if ( !document.fullscreenElement && !document.mozFullScreenElement &&
          !document.webkitFullscreenElement && !document.msFullscreenElement ) {

        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        }
        else if (elem.parentNode.mozRequestFullScreen) {
          elem.parentNode.mozRequestFullScreen();
        }
        else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        }
        else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        }
      }
      else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    }

    function listenerToggle(el) {
      if (document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen ||
          document.msFullscreenElement || document.fullscreenElement) {
        el.classList.add('fullscreen_js');
        console.log('Enter Full Screen');
      } else {
        el.classList.remove('fullscreen_js');
        console.log('Exit Full Screen');
      }
    }


    /** Video: Fullscreen Change  **/
    function fullscreenChange(elParent) {
      document.addEventListener('fullscreenchange', function () {
        listenerToggle(elParent);
      }, false);

      document.addEventListener("mozfullscreenchange", function () {
        listenerToggle(elParent);
      }, false);

      document.addEventListener('webkitfullscreenchange', function () {
        listenerToggle(elParent);
      }, false);

      document.addEventListener('MSFullscreenChange', function () {
        listenerToggle(elParent);
      }, false);
    }


    /*** Video: Native Controls ***/
    function playNative(el) {
      el.addEventListener("pause", function (e) {
        this.parentNode.classList.remove('play_js');
        this.pause();
      }, true);

      el.addEventListener("play", function (e) {
        this.parentNode.classList.add('play_js');
        this.play();
      }, true);
    }


    /*** Video: Custom Controls ***/
    /** Video: Play / Pause **/
    function playCustom(video_playCustom) {
      if ( video_playCustom.paused ) {
        video_playCustom.parentNode.classList.add('play_js');
        video_playCustom.play();
      }
      else if ( video_playCustom.play ) {
        video_playCustom.parentNode.classList.remove('play_js');
        video_playCustom.pause();
      }
    }

    function playVideo(el) {
      if (el.paused) {
        el.play();
      } else {
        el.pause();
      }
    }


    /** Video: Mute **/
    function muteVideo(el, el2, el3) {
      if (el.muted === true || el3.value === 0) {
        el2.classList.remove('muted_js');
        el.muted = false;
        el3.value = el.volume = 1;
      } else {
        el2.classList.add('muted_js');
        el.muted = true;
        el3.value = el.volume = 0;
      }
    }
  }

});
