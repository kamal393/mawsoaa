import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function Library() {
  const recordings = [
    {
      id: 1,
      title: 'سورة الفاتحة',
      reciter: 'الشيخ عمر القزابري',
      url: 'https://server9.mp3quran.net/omar_warsh/001.mp3',
      thumbnail: 'https://images.unsplash.com/photo-1591281700819-438cee7a1ad3?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'سورة البقرة',
      reciter: 'ال Sheikh عمر القزابري',
      url: 'https://server9.mp3quran.net/omar_warsh/002.mp3',
      thumbnail: 'https://images.unsplash.com/photo-1591281700819-438cee7a1ad3?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'سورة آل عمران',
      reciter: 'الشيخ عمر القزابري',
      url: 'https://server9.mp3quran.net/omar_warsh/003.mp3',
      thumbnail: 'https://images.unsplash.com/photo-1591281700819-438cee7a1ad3?auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'سورة الفاتحة',
      reciter: 'الشيخ محمد الكنتاوي',
      url: 'https://server12.mp3quran.net/maher/001.mp3',
      thumbnail: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'سورة البقرة',
      reciter: 'الشيخ محمد الكنتاوي',
      url: 'https://server12.mp3quran.net/maher/002.mp3',
      thumbnail: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80'
    }
  ];

  const playlists = [
    {
      id: 1,
      title: 'دروس الشيخ محمد المكي الناصري',
      url: 'https://www.youtube.com/watch?v=videoseries?list=PLBWqVRGr8kJ5SB8Tj9TbL5q7Nw0pBsvma',
      description: 'مجموعة من الدروس والمحاضرات القيمة للشيخ محمد المكي الناصري في الفقه المالكي والأصول'
    }
  ];

  const reciters = [
    { id: 1, name: 'الشيخ عمر القزابري' },
    { id: 2, name: 'الشيخ محمد الكنتاوي' }
  ];

  const surahs = [
    { id: 1, name: 'سورة الفاتحة' },
    { id: 2, name: 'سورة البقرة' },
    { id: 3, name: 'سورة آل عمران' }
  ];

  // Gestion des états pour les filtres
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReciter, setSelectedReciter] = useState('');
  const [selectedSurah, setSelectedSurah] = useState('');

  // Filtrer les enregistrements selon les critères choisis
  const filteredRecordings = recordings.filter(recording => {
    const matchesSearchTerm = recording.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              recording.reciter.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesReciter = selectedReciter === '' || recording.reciter === selectedReciter;
    const matchesSurah = selectedSurah === '' || recording.title === selectedSurah;

    return matchesSearchTerm && matchesReciter && matchesSurah;
  });

  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold mb-8 text-center">المكتبة السمعية والبصرية</h1>
      {/* Playlists YouTube */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-emerald-800">دروس ومحاضرات العلماء</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {playlists.map(playlist => (
            <div key={playlist.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative pt-[56.25%]">
                <ReactPlayer
                  url={playlist.url}
                  width="100%"
                  height="100%"
                  controls
                  className="absolute top-0 left-0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{playlist.title}</h3>
                <p className="text-gray-600 leading-relaxed">{playlist.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Filters */}
      <div className="mb-8 bg-white p-4 rounded-lg shadow">
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="ابحث عن تلاوة..."
            className="border rounded p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border rounded p-2"
            value={selectedReciter}
            onChange={(e) => setSelectedReciter(e.target.value)}
          >
            <option value="">جميع القراء</option>
            {reciters.map(reciter => (
              <option key={reciter.id} value={reciter.name}>
                {reciter.name}
              </option>
            ))}
          </select>
          <select
            className="border rounded p-2"
            value={selectedSurah}
            onChange={(e) => setSelectedSurah(e.target.value)}
          >
            <option value="">جميع السور</option>
            {surahs.map(surah => (
              <option key={surah.id} value={surah.name}>
                {surah.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Recordings Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecordings.length > 0 ? (
          filteredRecordings.map(recording => (
            <div key={recording.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-4">{recording.title}</h3>
                <p className="text-gray-600 mb-4">{recording.reciter}</p>
                <audio
                  controls
                  className="w-full"
                  src={recording.url}
                  preload="none"
                >
                  Votre navigateur ne supporte pas l'élément audio.
                </audio>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">لا توجد تسجيلات تطابق معايير البحث.</p>
        )}
      </div>
    </div>
  );
}

export default Library;