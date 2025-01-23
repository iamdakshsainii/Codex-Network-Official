import React, { useState, useEffect } from 'react';
    import RequestNotesSection from './RequestNotesSection';
    import { useNavigate } from 'react-router-dom';

    function StudyMaterialsSection({ className }) {
      const studyMaterials = [
        {
          year: 1,
          semesters: [
            {
              sem: 1,
              subjects: [
                { name: 'Maths', pdfLink: '/resources/y1s1/maths.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Physics', pdfLink: '/resources/y1s1/physics.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Computer Science', pdfLink: '/resources/y1s1/cs.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Engineering Drawing', pdfLink: '/resources/y1s1/ed.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Mechanics', pdfLink: '/resources/y1s1/mechanics.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
              ],
            },
            {
              sem: 2,
              subjects: [
                { name: 'Chemistry', pdfLink: '/resources/y1s2/chemistry.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Biology', pdfLink: '/resources/y1s2/biology.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Electrical', pdfLink: '/resources/y1s2/electrical.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Environmental Science', pdfLink: '/resources/y1s2/es.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Engineering Mechanics', pdfLink: '/resources/y1s2/em.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
              ],
            },
          ],
        },
        {
          year: 2,
          semesters: [
            {
              sem: 1,
              subjects: [
                { name: 'Data Structures', pdfLink: '/resources/y2s1/ds.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Algorithm', pdfLink: '/resources/y2s1/algo.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Electronics', pdfLink: '/resources/y2s1/electronics.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Digital Logic', pdfLink: '/resources/y2s1/dl.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Signals and Systems', pdfLink: '/resources/y2s1/ss.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
              ],
            },
            {
              sem: 2,
              subjects: [
                { name: 'Database', pdfLink: '/resources/y2s2/db.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Operating Systems', pdfLink: '/resources/y2s2/os.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Networking', pdfLink: '/resources/y2s2/networking.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Software Engineering', pdfLink: '/resources/y2s2/se.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Mathematics II', pdfLink: '/resources/y2s2/maths2.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
              ],
            },
          ],
        },
        {
          year: 3,
          semesters: [
            {
              sem: 1,
              subjects: [
                { name: 'Web Development', pdfLink: '/resources/y3s1/webdev.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'AI', pdfLink: '/resources/y3s1/ai.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Software Engineering', pdfLink: '/resources/y3s1/se.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Computer Networks', pdfLink: '/resources/y3s1/cn.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Database Systems', pdfLink: '/resources/y3s1/dbs.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
              ],
            },
            {
              sem: 2,
              subjects: [
                { name: 'Machine Learning', pdfLink: '/resources/y3s2/ml.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Cloud Computing', pdfLink: '/resources/y3s2/cc.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Security', pdfLink: '/resources/y3s2/security.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Cryptography', pdfLink: '/resources/y3s2/crypto.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Mobile Computing', pdfLink: '/resources/y3s2/mc.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
              ],
            },
          ],
        },
        {
          year: 4,
          semesters: [
            {
              sem: 1,
              subjects: [
                { name: 'Advanced Algorithms', pdfLink: '/resources/y4s1/aa.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Big Data', pdfLink: '/resources/y4s1/bd.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'DevOps', pdfLink: '/resources/y4s1/devops.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Blockchain', pdfLink: '/resources/y4s1/blockchain.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Artificial Intelligence', pdfLink: '/resources/y4s1/ai.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
              ],
            },
            {
              sem: 2,
              subjects: [
                { name: 'Blockchain', pdfLink: '/resources/y4s2/blockchain.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'IoT', pdfLink: '/resources/y4s2/iot.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Cybersecurity', pdfLink: '/resources/y4s2/cybersecurity.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Cloud Security', pdfLink: '/resources/y4s2/cloudsecurity.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
                { name: 'Network Security', pdfLink: '/resources/y4s2/networksecurity.pdf', youtubePlaylist: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BWYThyVj7vj9t_1l_1_1_1' },
              ],
            },
          ],
        },
      ];

      const [popup, setPopup] = useState({ isOpen: false, subjects: [], link: '' });
      const [searchQuery, setSearchQuery] = useState('');
      const [favorites, setFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem('favoriteSubjects');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
      });
      const navigate = useNavigate();

      useEffect(() => {
        localStorage.setItem('favoriteSubjects', JSON.stringify(favorites));
      }, [favorites]);

      const handleSemesterClick = (subjects, link) => {
        setPopup({ isOpen: true, subjects, link });
        setSearchQuery('');
      };

      const handlePopupClose = () => {
        setPopup({ isOpen: false, subjects: [], link: '' });
        setSearchQuery('');
      };

      const handleSubjectClick = (subject) => {
        setPopup({ isOpen: false, subjects: [], link: '' });
        navigate(`/favorites?subject=${subject.name}&pdfLink=${subject.pdfLink}&youtubePlaylist=${subject.youtubePlaylist}`);
      };

      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };

      const handleToggleFavorite = (subjectName) => {
        setFavorites(prevFavorites => {
          if (prevFavorites.includes(subjectName)) {
            return prevFavorites.filter(fav => fav !== subjectName);
          } else {
            return [...prevFavorites, subjectName];
          }
        });
      };

      const filteredSubjects = popup.subjects.filter(subject =>
        subject.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return (
        <section id="study-materials" className={`container mx-auto px-4 mb-16 ${className} transition-opacity duration-500`}>
          <h2 className="text-4xl font-bold text-center mb-12">Study Materials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {studyMaterials.map((yearData) => (
              <div key={yearData.year} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-center p-4 border-b border-blue-500/20">Year {yearData.year}</h3>
                <div className="p-4 space-y-4">
                  {yearData.semesters.map((semester) => (
                    <div key={semester.sem} className="bg-gray-700/50 backdrop-blur-sm rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                      <h4 className="text-xl font-semibold p-2 text-center border-b border-blue-500/10">Semester {semester.sem}</h4>
                      <div className="text-center p-2">
                        <button
                          onClick={() => handleSemesterClick(semester.subjects, semester.link)}
                          className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                          View Subjects
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <RequestNotesSection />
          </div>
          {popup.isOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
                <h3 className="text-2xl font-semibold text-center mb-4">Subjects</h3>
                 <input
                    type="text"
                    placeholder="Search subjects..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full p-3 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white mb-4"
                  />
                <ul className="space-y-2">
                  {filteredSubjects.map((subject) => (
                    <li key={subject.name} className="text-gray-300 text-left">
                      <div className="flex items-center justify-between">
                        <span className="mr-2">{subject.name}</span>
                        <div className="flex space-x-2">
                          {subject.pdfLink && (
                            <a href={subject.pdfLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                              PDF
                            </a>
                          )}
                          {subject.youtubePlaylist && (
                            <a href={subject.youtubePlaylist} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                              YouTube
                            </a>
                          )}
                           <button
                              onClick={() => handleToggleFavorite(subject.name)}
                              className={`text-gray-400 hover:text-blue-500 focus:outline-none`}
                            >
                              {favorites.includes(subject.name) ? '❤️' : '🤍'}
                            </button>
                             <button
                              onClick={() => handleSubjectClick(subject)}
                              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all text-xs"
                            >
                              View
                            </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-6">
                  <button
                    onClick={handlePopupClose}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      );
    }

    export default StudyMaterialsSection;
