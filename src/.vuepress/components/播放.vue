<template>
  <div class="music-player">
    <div v-if="currentTrack" class="player-container">
      <img :src="currentTrack.pic" alt="专辑封面" class="album-art" />
      <div class="track-info">
        <h2>{{ currentTrack.name }}</h2>
        <p>艺术家：{{ currentTrack.artist }}</p>
      </div>
      <audio ref="audioPlayer" :src="currentTrack.url" @play="onPlay" @pause="onPause" @ended="onEnd"></audio>
      <div class="controls">
        <button @click="playPrevious" class="control-button">
          <i class="fas fa-backward"></i>
        </button>
        <button @click="togglePlay" class="control-button play-pause-button">
          <i v-if="isPlaying" class="fas fa-pause"></i>
          <i v-else class="fas fa-play"></i>
        </button>
        <button @click="playNext" class="control-button">
          <i class="fas fa-forward"></i>
        </button>
      </div>
    </div>
    <div v-else>
      <p>暂无歌曲</p>
    </div>
    <button @click="toggleTrackList" class="track-list-button">
      {{ isTrackListVisible ? '隐藏歌曲列表' : '显示歌曲列表' }}
    </button>
    <div v-if="isTrackListVisible" class="track-list">
      <ul>
        <li v-for="(track, index) in tracks" :key="track.id" @click="selectTrack(index)" :class="{ active: index === currentTrackIndex }">
          {{ track.name }} - {{ track.artist }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'MusicPlayer',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      tracks: [],
      currentTrackIndex: 0,
      isPlaying: false,
      isTrackListVisible: false // 控制歌曲列表显示
    };
  },
  computed: {
    currentTrack() {
      return this.tracks[this.currentTrackIndex];
    }
  },
  methods: {
    fetchPlaylist() {
      fetch('https://meting-api.u2sb.com/?type=playlist&id=2619366284')
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data) && data.length > 0) {
            this.tracks = data;
            this.playCurrentTrack();
          } else {
            console.log('No tracks found in the response');
          }
        })
        .catch(error => {
          console.error('Error fetching playlist:', error);
        });
    },
    playCurrentTrack() {
      if (this.currentTrack) {
        this.$refs.audioPlayer.src = this.currentTrack.url;
        this.$refs.audioPlayer.play();
        this.isPlaying = true;
      }
    },
    playPrevious() {
      this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
      this.playCurrentTrack();
    },
    playNext() {
      this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
      this.playCurrentTrack();
    },
    togglePlay() {
      if (this.$refs.audioPlayer) {
        if (this.isPlaying) {
          this.$refs.audioPlayer.pause();
          this.isPlaying = false;
        } else {
          this.$refs.audioPlayer.play();
          this.isPlaying = true;
        }
      }
    },
    onPlay() {
      this.isPlaying = true;
    },
    onPause() {
      this.isPlaying = false;
    },
    onEnd() {
      this.playNext();
    },
    toggleTrackList() {
      this.isTrackListVisible = !this.isTrackListVisible;
    },
    selectTrack(index) {
      this.currentTrackIndex = index;
      this.playCurrentTrack();
      this.toggleTrackList(); // 选择歌曲后隐藏列表
    }
  },
  mounted() {
    this.fetchPlaylist();
  }
};
</script>

<style scoped>
.music-player {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.player-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.album-art {
  width: 100%;
  max-width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
}

.track-info h2 {
  margin: 10px 0;
  font-size: 24px;
}

.track-info p {
  margin: 5px 0;
  font-size: 18px;
  color: #666;
}

.controls {
  display: flex;
  gap: 10px;
}

.control-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
}

.play-pause-button {
  font-size: 32px;
}

.track-list-button {
  cursor: pointer;
  padding: 10px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

.track-list ul {
  list-style: none;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
}

.track-list li {
  cursor: pointer;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
}

.track-list li:hover {
  background-color: #f0f0f0;
}

.track-list li.active {
  background-color: #d0d0d0;
}
</style>
