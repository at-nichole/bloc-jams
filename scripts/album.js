var createSongRow = function(songNumber, songName, songLength) {
    var template =
        '<tr class="album-view-song-item">'
      + '   <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '   <td class="song-item-title">' + songName + '</td>'
      + '   <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;

    var $row = $(template);

    var clickHandler = function() {
        var songNumber = parseInt($(this).attr('data-song-number'));

         if (currentlyPlayingSongNumber !== null) {
          var currentlyPlayingCell = getSongNumberCell(currentlyPlayingSongNumber);
            currentlyPlayingCell.html(currentlyPlayingSongNumber);
            updatePlayerBarSong();
        }
           if (currentlyPlayingSongNumber !== songNumber) {
             $(this).html(pauseButtonTemplate);
             setSong(songNumber);
             updatePlayerBarSong();
          }

           else if (currentlyPlayingSongNumber === songNumber) {
              $(this).html(playButtonTemplate);
              setSong(null);
          }
    };


    var onHover = function(event) {
        var $songNumberCell = $(this).find('.song-item-number');
        var songNumber =  parseInt($songNumberCell.attr('data-song-number'));

        if (songNumber !== currentlyPlayingSongNumber) {
            $songNumberCell.html(playButtonTemplate);
        }
    };

    var offHover = function(event) {
        var $songNumberCell = $(this).find('.song-item-number');
        var songNumber = parseInt($songNumberCell.attr('data-song-number'));

            if (songNumber !== currentlyPlayingSongNumber) {
              $songNumberCell.html(songNumber);
        }

    };

    $row.find('.song-item-number').click(clickHandler);
    $row.hover(onHover, offHover);

    return $row;
};

var setSong = function(songNumber){
  currentlyPlayingSongNumber = parseInt(songNumber);
  currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
};

var getSongNumberCell = function(number) {
  return $('.song-item-number[data-song-number="' + number + '"]');
};

var setCurrentAlbum = function(album) {

    currentAlbum = album;

    var $albumTitle = $('.album-view-title');
    var $albumArtist = $('.album-view-artist');
    var $albumReleaseInfo = $('.album-view-release-info');
    var $albumImage = $('.album-cover-art');
    var $albumSongList = $('.album-view-song-list');

    $albumTitle.text(album.title);
    $albumArtist.text(album.artist);
    $albumReleaseInfo.text(album.year + " " + album.label);
    $albumImage.attr('src', album.albumArtUrl);
    $albumSongList.empty();

    for(var i = 0; i < album.songs.length; i++) {
        var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
        $albumSongList.append($newRow);

    }
};


var trackIndex = function(album, song) {
     return album.songs.indexOf(song);
 };

var updatePlayerBarSong = function() {

    $('.currently-playing .song-name').text(currentSongFromAlbum.title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.artist);
    $('.main-controls .play-pause').html(playerBarPauseButton);
};


 var nextSong = function() {
     var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
     currentSongIndex++;
       if (currentSongIndex >= currentAlbum.songs.length) {
           currentSongIndex = 0;
       }

    var lastSongNumber = currentlyPlayingSongNumber;
      setSong(currentSongIndex + 1);
      updatePlayerBarSong();

    var $nextSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
    var $lastSongNumberCell = getSongNumberCell(lastSongNumber);

     $nextSongNumberCell.html(pauseButtonTemplate);
     $lastSongNumberCell.html(lastSongNumber);
 };

 var previousSong = function() {
     var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
     currentSongIndex--;

     if (currentSongIndex < 0 ) {
         currentSongIndex = currentAlbum.songs.length - 1;
     }

     var lastSongNumber = currentlyPlayingSongNumber;
        setSong(currentSongIndex + 1);
        updatePlayerBarSong();
        $('.main-controls .play-pause').html(playerBarPauseButton);

        var $nextSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber);
        var $lastSongNumberCell = getSongNumberCell(lastSongNumber);

        $nextSongNumberCell.html(pauseButtonTemplate);
        $lastSongNumberCell.html(lastSongNumber);
    };
    var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
    var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
    var playerBarPlayButton = '<span class="ion-play"></span>';
    var playerBarPauseButton = '<span class="ion-pause"></span>';

    var currentAlbum = null;
    var currentlyPlayingSongNumber = null;
    var currentSongFromAlbum = null;

    var $previousButton = $('.main-controls .previous');
    var $nextButton = $('.main-controls .next');



$(document).ready(function() {
    setCurrentAlbum(albumPicasso);
    $previousButton.click(previousSong);
    $nextButton.click(nextSong);
});

/* -- Code to toggle albums by clicking on album image --
var albums = [albumPicasso, albumMarconi, albumWarhol];
var index = 0;
var $albumImage = $('.album-cover-art');
$(albumImage).click(function() {
  setCurrentAlbum(albums[index]);
  index++;
  if (index > albums.length) {
    index = 0;
  }
});

//FindParentByClassName

/* var findParentByClassName = function(class) {
    while(this.className !== class && this.parentElement !== null) {
        this = this.parentElement.nodeName;
    }
    return this;
};
*/
