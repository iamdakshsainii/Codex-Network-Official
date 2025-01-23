import React, { useState } from 'react';
    import { Search, Bookmark, BookmarkMinus } from 'lucide-react';
    import { Link } from 'react-router-dom';
    import DigitalClockPage from '../../stepwise-implementation/DigitalClockPage';
    import URLShortenerPage from '../../stepwise-implementation/URLShortenerPage';
    import MarkdownPreviewerPage from '../../stepwise-implementation/MarkdownPreviewerPage';
    import MovieSearchPage from '../../stepwise-implementation/MovieSearchPage';
    import ResponsiveImageSliderPage from '../../stepwise-implementation/ResponsiveImageSliderPage';
    import RandomJokeGeneratorPage from '../../stepwise-implementation/RandomJokeGeneratorPage';
    import StopwatchPage from '../../stepwise-implementation/StopwatchPage';
    import FormValidationPage from '../../stepwise-implementation/FormValidationPage';
    import QRCodeGeneratorPage from '../../stepwise-implementation/QRCodeGeneratorPage';
    import WeatherDashboardPage from '../../stepwise-implementation/WeatherDashboardPage';
    import PomodoroTimerPage from '../../stepwise-implementation/PomodoroTimerPage';
    import QuizAppPage from '../../stepwise-implementation/QuizAppPage';
    import EcommerceProductFilterPage from '../../stepwise-implementation/EcommerceProductFilterPage';
    import ExpenseTrackerPage from '../../stepwise-implementation/ExpenseTrackerPage';
    import AgeCalculatorPage from '../../stepwise-implementation/AgeCalculatorPage';
    import SearchBarPage from '../../stepwise-implementation/SearchBarPage';
    import ImageSliderPage from '../../stepwise-implementation/ImageSliderPage';
    import TodoListPage from '../../stepwise-implementation/TodoListPage';
    import CurrencyConverterPage from '../../stepwise-implementation/CurrencyConverterPage';
    import RecipeFinderPage from '../../stepwise-implementation/RecipeFinderPage';
    import SimpleCalculatorPage from '../../stepwise-implementation/SimpleCalculatorPage';
    import WeatherAppPage from '../../stepwise-implementation/WeatherAppPage';

    const challenges = [
      {
        id: 1,
        title: 'Age Calculator',
        description: 'Build a tool to calculate age based on inputted date of birth.',
        difficulty: 'Beginner',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://placekitten.com/150/100',
        category: 'Beginner',
        component: AgeCalculatorPage,
      },
      {
        id: 2,
        title: 'Search Bar',
        description: 'Create a functional search bar with autocomplete suggestions.',
        difficulty: 'Intermediate',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://placekitten.com/150/101',
        category: 'Intermediate',
        component: SearchBarPage,
      },
      {
        id: 3,
        title: 'To-Do List App',
        description: 'Build a simple to-do list application with add, delete, and complete features.',
        difficulty: 'Intermediate',
        tags: ['React', 'JavaScript'],
        image: 'https://placekitten.com/150/102',
        category: 'Intermediate',
        component: TodoListPage,
      },
      {
        id: 4,
        title: 'Image Slider',
        description: 'Create an image slider with navigation buttons.',
        difficulty: 'Beginner',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://placekitten.com/150/103',
        category: 'Beginner',
        component: ImageSliderPage,
      },
      {
        id: 5,
        title: 'Simple Calculator',
        description: 'Build a basic calculator with addition, subtraction, multiplication, and division.',
        difficulty: 'Beginner',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://placekitten.com/150/104',
        category: 'Beginner',
        component: SimpleCalculatorPage,
      },
      {
        id: 6,
        title: 'Weather App',
        description: 'Create a weather app that fetches data from an API.',
        difficulty: 'Advanced',
        tags: ['React', 'API', 'JavaScript'],
        image: 'https://placekitten.com/150/105',
        category: 'Advanced',
        component: WeatherAppPage,
      },
      {
        id: 7,
        title: 'Currency Converter',
        description: 'Build a tool to convert currencies using a live exchange rate API.',
        difficulty: 'Advanced',
        tags: ['HTML', 'CSS', 'JavaScript', 'API'],
        image: 'https://placekitten.com/150/106',
        category: 'Advanced',
        component: CurrencyConverterPage,
      },
      {
        id: 8,
        title: 'Recipe Finder App',
        description: 'Create an app to search for recipes using an API.',
        difficulty: 'Advanced',
        tags: ['HTML', 'CSS', 'JavaScript', 'React', 'API'],
        image: 'https://placekitten.com/150/107',
        category: 'Advanced',
        component: RecipeFinderPage,
      },
      {
        id: 9,
        title: 'Expense Tracker',
        description: 'Build a tool to track personal expenses and incomes.',
        difficulty: 'Intermediate',
        tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
        image: 'https://placekitten.com/150/108',
        category: 'Intermediate',
        component: ExpenseTrackerPage,
      },
      {
        id: 10,
        title: 'E-Commerce Product Filter',
        description: 'Create a product listing page with sorting and filtering features.',
        difficulty: 'Intermediate',
        tags: ['HTML', 'CSS', 'JavaScript', 'React'],
        image: 'https://placekitten.com/150/109',
        category: 'Intermediate',
        component: EcommerceProductFilterPage,
      },
      {
        id: 11,
        title: 'Quiz App',
        description: 'Develop a quiz application with a timer and score tracking.',
        difficulty: 'Advanced',
        tags: ['HTML', 'CSS', 'JavaScript', 'API', 'React'],
        image: 'https://placekitten.com/150/110',
        category: 'Advanced',
        component: QuizAppPage,
      },
      {
        id: 12,
        title: 'Pomodoro Timer',
        description: 'Build a productivity timer that follows the Pomodoro technique.',
        difficulty: 'Beginner',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://placekitten.com/150/111',
        category: 'Beginner',
        component: PomodoroTimerPage,
      },
      {
        id: 13,
        title: 'Weather Dashboard',
        description: 'Create a weather app that displays current weather and a 7-day forecast.',
        difficulty: 'Advanced',
        tags: ['HTML', 'CSS', 'JavaScript', 'API'],
        image: 'https://placekitten.com/150/112',
        category: 'Advanced',
        component: WeatherDashboardPage,
      },
      {
        id: 14,
        title: 'QR Code Generator',
        description: 'Generate QR codes based on user input (e.g., text or URL).',
        difficulty: 'Intermediate',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://placekitten.com/150/113',
        category: 'Intermediate',
        component: QRCodeGeneratorPage,
      },
      {
        id: 15,
        title: 'Form Validation',
        description: 'Validate user inputs in a form dynamically.',
        difficulty: 'Intermediate',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://placekitten.com/150/114',
        category: 'Intermediate',
        component: FormValidationPage,
      },
      {
        id: 16,
        title: 'Stopwatch',
        description: 'A simple stopwatch to track time with start, stop, and reset functionality.',
        difficulty: 'Beginner',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://placekitten.com/150/115',
        category: 'Beginner',
        component: StopwatchPage,
      },
      {
        id: 17,
        title: 'Random Joke Generator',
        description: 'Fetch random jokes from an API like JokeAPI and display them.',
        difficulty: 'Beginner',
        tags: ['HTML', 'CSS', 'JavaScript', 'API'],
        image: 'https://placekitten.com/150/116',
        category: 'Beginner',
        component: RandomJokeGeneratorPage,
      },
      {
        id: 18,
        title: 'Digital Clock',
        description: 'Build a real-time digital clock with date and time.',
        difficulty: 'Beginner',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://placekitten.com/150/117',
        category: 'Beginner',
        component: DigitalClockPage,
      },
      {
        id: 19,
        title: 'Movie Search App',
        description: 'Build an app to search for movies using an API like OMDB.',
        difficulty: 'Intermediate',
        tags: ['HTML', 'CSS', 'JavaScript', 'API'],
        image: 'https://placekitten.com/150/118',
        category: 'Intermediate',
        component: MovieSearchPage,
      },
      {
        id: 20,
        title: 'Markdown Previewer',
        description: 'Create a tool to convert markdown syntax to HTML.',
        difficulty: 'Intermediate',
        tags: ['HTML', 'CSS', 'JavaScript', 'React'],
        image: 'https://placekitten.com/150/119',
        category: 'Intermediate',
        component: MarkdownPreviewerPage,
      },
      {
        id: 21,
        title: 'URL Shortener',
        description: 'Build a tool to shorten long URLs using an API like Bitly.',
        difficulty: 'Intermediate',
        tags: ['HTML', 'CSS', 'JavaScript', 'API'],
        image: 'https://placekitten.com/150/120',
        category: 'Intermediate',
        component: URLShortenerPage,
      },
      {
        id: 22,
        title: 'Responsive Image Slider',
        description: 'Create a responsive image carousel or slider.',
        difficulty: 'Intermediate',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://placekitten.com/150/121',
        category: 'Intermediate',
        component: ResponsiveImageSliderPage,
      },
      {
        id: 23,
        title: 'Search Bar',
        description: 'Create a functional search bar with autocomplete suggestions.',
        difficulty: 'Beginner',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://placekitten.com/150/101',
        category: 'Intermediate',
      },
      {
        id: 24,
        title: 'To-Do List App',
        description: 'Build a simple to-do list application with add, delete, and complete features.',
        difficulty: 'Intermediate',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://placekitten.com/150/102',
        category: 'Intermediate',
        component: TodoListPage,
      },
      {
        id: 25,
        title: 'Currency Converter',
        description: 'Build a tool to convert currencies using a live exchange rate API.',
        difficulty: 'Intermediate',
        tags: ['HTML', 'CSS', 'JavaScript', 'API'],
        image: 'https://placekitten.com/150/106',
        category: 'Advanced',
        component: CurrencyConverterPage,
      },
       {
        id: 26,
        title: 'Movie Search App',
        description: 'Build an app to search for movies using an API like OMDB.',
        difficulty: 'Intermediate',
        tags: ['HTML', 'CSS', 'JavaScript', 'API'],
        image: 'https://placekitten.com/150/118',
        category: 'Intermediate',
      },
      {
        id: 27,
        title: 'E-Commerce Product Filter',
        description: 'Create a product listing page with sorting and filtering features.',
        difficulty: 'Intermediate',
        tags: ['HTML', 'CSS', 'JavaScript', 'React'],
        image: 'https://placekitten.com/150/109',
        category: 'Intermediate',
      },
       {
        id: 28,
        title: 'Simple Calculator',
        description: 'Build a basic calculator with addition, subtraction, multiplication, and division.',
        difficulty: 'Beginner',
        tags: ['HTML', 'CSS', 'JavaScript'],
        image: 'https://placekitten.com/150/104',
        category: 'Beginner',
        component: SimpleCalculatorPage,
      },
      {
        id: 29,
        title: 'Weather App',
        description: 'Create a weather app that fetches data from an API.',
        difficulty: 'Advanced',
        tags: ['React', 'API', 'JavaScript'],
        image: 'https://placekitten.com/150/105',
        category: 'Advanced',
        component: WeatherAppPage,
      },
    ];

    function DevelopmentChallengesPage() {
      const [searchQuery, setSearchQuery] = useState('');
      const [filterCategory, setFilterCategory] = useState('');
      const [filterTags, setFilterTags] = useState([]);
      const [bookmarkedChallenges, setBookmarkedChallenges] = useState([]);
      const [sortOption, setSortOption] = useState('newest');

      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };

      const handleCategoryChange = (e) => {
        setFilterCategory(e.target.value);
      };

      const handleTagChange = (e) => {
        const tag = e.target.value;
        setFilterTags(prevTags =>
          prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
        );
      };

      const handleBookmarkToggle = (challengeId) => {
        setBookmarkedChallenges(prevBookmarks =>
          prevBookmarks.includes(challengeId)
            ? prevBookmarks.filter(id => id !== challengeId)
            : [...prevBookmarks, challengeId]
        );
      };

      const handleSortChange = (e) => {
        setSortOption(e.target.value);
      };

      const filteredChallenges = [...challenges].filter(challenge => {
        const searchMatch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          challenge.description.toLowerCase().includes(searchQuery.toLowerCase());
        const categoryMatch = filterCategory === '' || challenge.difficulty === filterCategory;
        const tagMatch = filterTags.length === 0 || filterTags.every(tag => challenge.tags.includes(tag));
        return searchMatch && categoryMatch && tagMatch;
      }).sort((a, b) => {
        if (sortOption === 'newest') {
          return b.id - a.id;
        } else if (sortOption === 'difficulty') {
          const difficultyOrder = { 'Beginner': 1, 'Intermediate': 2, 'Advanced': 3 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        }
        return 0;
      });

      return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
          <aside className="w-64 bg-gray-800/50 backdrop-blur-sm border-r border-blue-500/20 overflow-y-auto">
            <div className="p-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search challenges..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full p-2 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search className="h-4 w-4" />
                </div>
              </div>
              <nav className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Categories</h4>
                  <select
                    value={filterCategory}
                    onChange={handleCategoryChange}
                    className="w-full p-2 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                  >
                    <option value="">All</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'JavaScript', 'React', 'API', 'LocalStorage'].map(tag => (
                      <label key={tag} className="flex items-center space-x-1">
                        <input
                          type="checkbox"
                          value={tag}
                          checked={filterTags.includes(tag)}
                          onChange={handleTagChange}
                          className="rounded border border-blue-500/20 focus:ring-blue-500 text-blue-500 bg-gray-700"
                        />
                        <span className="text-gray-300 text-sm">{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Bookmarks</h4>
                  <ul className="space-y-1">
                    {filteredChallenges.filter(challenge => bookmarkedChallenges.includes(challenge.id)).map(challenge => (
                      <li key={challenge.id} className="text-gray-300 text-sm">
                        {challenge.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Sort By</h4>
                  <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="w-full p-2 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                  >
                    <option value="newest">Newest First</option>
                    <option value="difficulty">By Difficulty</option>
                  </select>
                </div>
              </nav>
            </div>
          </aside>
          <main className="flex-1 p-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredChallenges.map((challenge) => (
                <Link
                  key={challenge.id}
                  to={`/tutorials/development-challenges/${challenge.title.toLowerCase().replace(/ /g, '-')}`}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 overflow-hidden
                         hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1
                         hover:shadow-lg hover:shadow-blue-500/20 flex flex-col"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={challenge.image}
                      alt={challenge.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{challenge.title}</h3>
                        <p className="text-gray-400 text-sm">{challenge.description}</p>
                      </div>
                      <button
                        onClick={() => handleBookmarkToggle(challenge.id)}
                        className="text-gray-400 hover:text-blue-500 focus:outline-none"
                      >
                        {bookmarkedChallenges.includes(challenge.id) ? <BookmarkMinus className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
                      </button>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <span className="mr-2">Difficulty: {challenge.difficulty}</span>
                      <span className="flex flex-wrap gap-1">
                        {challenge.tags.map(tag => (
                          <span key={tag} className="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded">{tag}</span>
                        ))}
                      </span>
                    </div>
                    <div className="text-center mt-auto">
                      <button
                        className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600
                                 transition-colors duration-200 transform hover:-translate-y-1"
                      >
                        Start Challenge
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      );
    }

    export default DevelopmentChallengesPage;
