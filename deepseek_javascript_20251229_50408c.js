document.addEventListener('DOMContentLoaded', function() {
    // Данные песен Vocaloid
    const songs = [
        {
            id: 1,
            title: "World is Mine",
            artist: "ryo (supercell)",
            characters: ["hatsune"],
            year: 2007,
            duration: "4:15",
            color: "#39C5BB",
            audioUrl: "audio/world_is_mine.mp3"
        },
        {
            id: 2,
            title: "Senbonzakura",
            artist: "Kurousa-P",
            characters: ["hatsune", "rin", "len"],
            year: 2011,
            duration: "4:20",
            color: "#FF4D8D",
            audioUrl: "audio/senbonzakura.mp3"
        },
        {
            id: 3,
            title: "Roki",
            artist: "Mikito-P",
            characters: ["hatsune"],
            year: 2014,
            duration: "3:45",
            color: "#00B4D8",
            audioUrl: "audio/roki.mp3"
        },
        {
            id: 4,
            title: "Melt",
            artist: "ryo (supercell)",
            characters: ["hatsune"],
            year: 2007,
            duration: "4:10",
            color: "#FF6B6B",
            audioUrl: "audio/melt.mp3"
        },
        {
            id: 5,
            title: "千本桜",
            artist: "黒うさP",
            characters: ["hatsune", "rin", "len", "luka"],
            year: 2011,
            duration: "4:32",
            color: "#9D4EDD",
            audioUrl: "audio/senbonzakura_full.mp3"
        },
        {
            id: 6,
            title: "Alice in Musicland",
            artist: "OSTER project",
            characters: ["hatsune", "rin", "len"],
            year: 2012,
            duration: "5:18",
            color: "#FF9E00",
            audioUrl: "audio/alice.mp3"
        },
        {
            id: 7,
            title: "Daughter of Evil",
            artist: "mothy",
            characters: ["meiko", "kaito"],
            year: 2008,
            duration: "3:52",
            color: "#4361EE",
            audioUrl: "audio/daughter_of_evil.mp3"
        },
        {
            id: 8,
            title: "Servant of Evil",
            artist: "mothy",
            characters: ["meiko", "kaito"],
            year: 2008,
            duration: "4:05",
            color: "#7209B7",
            audioUrl: "audio/servant_of_evil.mp3"
        },
        {
            id: 9,
            title: "Miku Miku ni Shite Ageru",
            artist: "ika",
            characters: ["hatsune"],
            year: 2007,
            duration: "3:29",
            color: "#4CC9F0",
            audioUrl: "audio/miku_miku.mp3"
        },
        {
            id: 10,
            title: "Kokoro",
            artist: "Toraboruta-P",
            characters: ["kagamine"],
            year: 2008,
            duration: "4:48",
            color: "#F72585",
            audioUrl: "audio/kokoro.mp3"
        },
        {
            id: 11,
            title: "Romeo and Cinderella",
            artist: "doriko",
            characters: ["hatsune"],
            year: 2009,
            duration: "4:32",
            color: "#3A86FF",
            audioUrl: "audio/romeo.mp3"
        },
        {
            id: 12,
            title: "Kagerou Daze",
            artist: "Jin",
            characters: ["hatsune"],
            year: 2012,
            duration: "3:58",
            color: "#FB5607",
            audioUrl: "audio/kagerou.mp3"
        },
        {
            id: 13,
            title: "Electric Angel",
            artist: "yasuo",
            characters: ["hatsune"],
            year: 2009,
            duration: "3:45",
            color: "#8338EC",
            audioUrl: "audio/electric_angel.mp3"
        },
        {
            id: 14,
            title: "Meltdown",
            artist: "iroha(sasaki)",
            characters: ["hatsune", "rin"],
            year: 2010,
            duration: "4:15",
            color: "#FF006E",
            audioUrl: "audio/meltdown.mp3"
        },
        {
            id: 15,
            title: "Blackjack",
            artist: "yucha",
            characters: ["hatsune", "gumi"],
            year: 2012,
            duration: "3:40",
            color: "#3A86FF",
            audioUrl: "audio/blackjack.mp3"
        },
        {
            id: 16,
            title: "Weekender Girl",
            artist: "kz",
            characters: ["hatsune"],
            year: 2012,
            duration: "4:05",
            color: "#FFBE0B",
            audioUrl: "audio/weekender.mp3"
        },
        {
            id: 17,
            title: "Freely Tomorrow",
            artist: "Mitchie M",
            characters: ["hatsune"],
            year: 2012,
            duration: "4:22",
            color: "#06D6A0",
            audioUrl: "audio/freely_tomorrow.mp3"
        },
        {
            id: 18,
            title: "Nebula",
            artist: "Tripshots",
            characters: ["hatsune"],
            year: 2013,
            duration: "5:10",
            color: "#7209B7",
            audioUrl: "audio/nebula.mp3"
        },
        {
            id: 19,
            title: "Remote Control",
            artist: "Wonderful☆Opportunity",
            characters: ["hatsune", "rin", "len"],
            year: 2010,
            duration: "3:55",
            color: "#F15BB5",
            audioUrl: "audio/remote_control.mp3"
        },
        {
            id: 20,
            title: "Yellow",
            artist: "kz",
            characters: ["hatsune"],
            year: 2009,
            duration: "4:18",
            color: "#FFD60A",
            audioUrl: "audio/yellow.mp3"
        },
        {
            id: 21,
            title: "Matryoshka",
            artist: "Hachi",
            characters: ["hatsune", "gumi"],
            year: 2010,
            duration: "3:48",
            color: "#E63946",
            audioUrl: "audio/matryoshka.mp3"
        },
        {
            id: 22,
            title: "The Disappearance of Hatsune Miku",
            artist: "cosMo@暴走P",
            characters: ["hatsune"],
            year: 2009,
            duration: "3:28",
            color: "#A8DADC",
            audioUrl: "audio/disappearance.mp3"
        },
        {
            id: 23,
            title: "LOL -lots of laugh-",
            artist: "sasakure.UK",
            characters: ["hatsune"],
            year: 2012,
            duration: "4:05",
            color: "#FF6D00",
            audioUrl: "audio/lol.mp3"
        },
        {
            id: 24,
            title: "Dreaming Leaf",
            artist: "uji",
            characters: ["hatsune"],
            year: 2010,
            duration: "4:50",
            color: "#52B788",
            audioUrl: "audio/dreaming_leaf.mp3"
        },
        {
            id: 25,
            title: "Mosaic Roll",
            artist: "DECO*27",
            characters: ["hatsune"],
            year: 2012,
            duration: "3:35",
            color: "#FF477E",
            audioUrl: "audio/mosaic_roll.mp3"
        },
        {
            id: 26,
            title: "Two-Faced Lovers",
            artist: "wowaka",
            characters: ["hatsune"],
            year: 2010,
            duration: "3:52",
            color: "#4361EE",
            audioUrl: "audio/two_faced.mp3"
        },
        {
            id: 27,
            title: "ODDS & ENDS",
            artist: "ryo (supercell)",
            characters: ["hatsune"],
            year: 2012,
            duration: "5:15",
            color: "#7209B7",
            audioUrl: "audio/odds_ends.mp3"
        },
        {
            id: 28,
            title: "39",
            artist: "sasakure.UK",
            characters: ["hatsune"],
            year: 2016,
            duration: "4:39",
            color: "#4CC9F0",
            audioUrl: "audio/39.mp3"
        },
        {
            id: 29,
            title: "Sand Planet",
            artist: "Hachi",
            characters: ["hatsune"],
            year: 2017,
            duration: "4:25",
            color: "#F4A261",
            audioUrl: "audio/sand_planet.mp3"
        },
        {
            id: 30,
            title: "Ghost Rule",
            artist: "DECO*27",
            characters: ["hatsune"],
            year: 2016,
            duration: "3:50",
            color: "#E63946",
            audioUrl: "audio/ghost_rule.mp3"
        },
        {
            id: 31,
            title: "Teo",
            artist: "Omoi",
            characters: ["hatsune"],
            year: 2019,
            duration: "3:35",
            color: "#2A9D8F",
            audioUrl: "audio/teo.mp3"
        },
        {
            id: 32,
            title: "KING",
            artist: "Kanaria",
            characters: ["hatsune"],
            year: 2020,
            duration: "2:58",
            color: "#E9C46A",
            audioUrl: "audio/king.mp3"
        }
    ];

    // Элементы DOM
    const songsContainer = document.getElementById('songsContainer');
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const currentTitle = document.getElementById('currentTitle');
    const currentArtist = document.getElementById('currentArtist');
    const currentCover = document.getElementById('currentCover');
    const searchInput = document.getElementById('searchInput');
    const characterFilter = document.getElementById('characterFilter');
    const yearFilter = document.getElementById('yearFilter');
    const totalSongs = document.getElementById('totalSongs');

    // Текущее состояние
    let currentSongIndex = 0;
    let isPlaying = false;
    let filteredSongs = [...songs];

    // Имена персонажей
    const characterNames = {
        hatsune: "Хацунэ Мику",
        kaito: "КАИТО",
        rin: "Кагаминэ Рин",
        len: "Кагаминэ Лен",
        luka: "Мегуринэ Лука",
        meiko: "Мейко",
        gumi: "GUMI",
        kagamine: "Кагаминэ"
    };

    // Отображение песен
    function displaySongs(songsArray) {
        songsContainer.innerHTML = '';
        totalSongs.textContent = songsArray.length;
        
        songsArray.forEach((song, index) => {
            const songCard = document.createElement('div');
            songCard.className = 'song-card';
            songCard.dataset.index = index;
            
            const charactersHTML = song.characters.map(char => 
                `<span class="character-tag">${characterNames[char] || char}</span>`
            ).join('');
            
            songCard.innerHTML = `
                <div class="song-header">
                    <div class="cover-container">
                        <div class="song-cover" style="background: ${song.color}">
                            <i class="fas fa-music"></i>
                        </div>
                        <div class="play-overlay">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                    <div class="song-info">
                        <h3 class="song-title">${song.title}</h3>
                        <p class="song-artist">${song.artist}</p>
                        <div class="song-characters">
                            ${charactersHTML}
                        </div>
                    </div>
                </div>
                <div class="song-details">
                    <span><i class="far fa-calendar"></i> ${song.year}</span>
                    <span><i class="far fa-clock"></i> ${song.duration}</span>
                    <span><i class="fas fa-play-circle"></i> Воспроизвести</span>
                </div>
            `;
            
            songCard.addEventListener('click', () => {
                playSong(index, songsArray);
            });
            
            songsContainer.appendChild(songCard);
        });
    }

    // Воспроизведение песни
    function playSong(index, songsArray = filteredSongs) {
        currentSongIndex = index;
        const song = songsArray[index];
        
        audioPlayer.src = song.audioUrl;
        currentTitle.textContent = song.title;
        currentArtist.textContent = song.artist;
        currentCover.style.background = song.color;
        currentCover.innerHTML = `<i class="fas fa-music"></i>`;
        
        playAudio();
        
        // Обновление активной карточки
        document.querySelectorAll('.song-card').forEach(card => {
            card.classList.remove('playing');
        });
        
        if (songsContainer.children[index]) {
            songsContainer.children[index].classList.add('playing');
        }
    }

    // Управление воспроизведением
    function playAudio() {
        audioPlayer.play();
        isPlaying = true;
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        playBtn.classList.add('playing');
    }

    function pauseAudio() {
        audioPlayer.pause();
        isPlaying = false;
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        playBtn.classList.remove('playing');
    }

    // Обновление прогресса
    function updateProgress() {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100 || 0;
        progressBar.value = percent;
        
        currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
        durationEl.textContent = formatTime(audioPlayer.duration);
    }

    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Фильтрация песен
    function filterSongs() {
        const searchTerm = searchInput.value.toLowerCase();
        const character = characterFilter.value;
        const year = yearFilter.value;
        
        filteredSongs = songs.filter(song => {
            const matchesSearch = song.title.toLowerCase().includes(searchTerm) ||
                                song.artist.toLowerCase().includes(searchTerm);
            const matchesCharacter = !character || song.characters.includes