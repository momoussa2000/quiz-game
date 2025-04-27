// Quiz Questions Database
const quizQuestions = {
    general: [
        {
            question: "What is the capital of France?",
            answers: ["Paris", "London", "Berlin", "Madrid"],
            correctAnswer: 0
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: ["Venus", "Jupiter", "Mars", "Saturn"],
            correctAnswer: 2
        },
        {
            question: "Who painted the Mona Lisa?",
            answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            correctAnswer: 2
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: 3
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            answers: ["Gold", "Oxygen", "Osmium", "Oganesson"],
            correctAnswer: 1
        },
        {
            question: "How many sides does a hexagon have?",
            answers: ["5", "6", "7", "8"],
            correctAnswer: 1
        },
        {
            question: "What is the largest mammal in the world?",
            answers: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
            correctAnswer: 1
        },
        {
            question: "Which country is home to the kangaroo?",
            answers: ["New Zealand", "South Africa", "Australia", "Brazil"],
            correctAnswer: 2
        },
        {
            question: "What is the currency of Japan?",
            answers: ["Yuan", "Won", "Yen", "Ringgit"],
            correctAnswer: 2
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            answers: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correctAnswer: 1
        },
        {
            question: "What is the smallest bone in the human body?",
            answers: ["Femur", "Stapes", "Radius", "Tibia"],
            correctAnswer: 1
        },
        {
            question: "Which famous scientist developed the theory of evolution by natural selection?",
            answers: ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Galileo Galilei"],
            correctAnswer: 2
        },
        {
            question: "What is the chemical symbol for silver?",
            answers: ["Si", "Sv", "Ag", "Au"],
            correctAnswer: 2
        },
        {
            question: "Which instrument has 88 keys?",
            answers: ["Guitar", "Violin", "Piano", "Flute"],
            correctAnswer: 2
        },
        {
            question: "What is the main ingredient in guacamole?",
            answers: ["Tomato", "Avocado", "Onion", "Lime"],
            correctAnswer: 1
        },
        {
            question: "Which famous ship sank on its maiden voyage in 1912?",
            answers: ["Lusitania", "Titanic", "Queen Mary", "Bismarck"],
            correctAnswer: 1
        },
        {
            question: "What is the largest species of big cat in the world?",
            answers: ["Lion", "Leopard", "Jaguar", "Tiger"],
            correctAnswer: 3
        },
        {
            question: "Which country is known as the Land of the Midnight Sun?",
            answers: ["Russia", "Canada", "Norway", "Finland"],
            correctAnswer: 2
        },
        {
            question: "What is the hardest natural substance on Earth?",
            answers: ["Diamond", "Titanium", "Platinum", "Quartz"],
            correctAnswer: 0
        },
        {
            question: "Which famous physicist wrote 'A Brief History of Time'?",
            answers: ["Richard Feynman", "Stephen Hawking", "Neil deGrasse Tyson", "Brian Cox"],
            correctAnswer: 1
        },
        {
            question: "What is the national animal of Scotland?",
            answers: ["Lion", "Unicorn", "Eagle", "Bear"],
            correctAnswer: 1
        },
        {
            question: "Which famous detective was created by Arthur Conan Doyle?",
            answers: ["Hercule Poirot", "Sherlock Holmes", "Miss Marple", "Inspector Morse"],
            correctAnswer: 1
        },
        {
            question: "What is the tallest mountain in North America?",
            answers: ["Mount McKinley (Denali)", "Mount Whitney", "Mount Rainier", "Mount St. Helens"],
            correctAnswer: 0
        },
        {
            question: "Which animal can be seen on the Porsche logo?",
            answers: ["Lion", "Bull", "Horse", "Jaguar"],
            correctAnswer: 2
        },
        {
            question: "What is the name of the longest river in South America?",
            answers: ["Amazon", "Orinoco", "Paraná", "Magdalena"],
            correctAnswer: 0
        },
        {
            question: "Which country produces the most coffee in the world?",
            answers: ["Colombia", "Vietnam", "Ethiopia", "Brazil"],
            correctAnswer: 3
        },
        {
            question: "What is the most widely spoken language in the world?",
            answers: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
            correctAnswer: 2
        },
        {
            question: "Which vitamin is produced by the body when exposed to sunlight?",
            answers: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
            correctAnswer: 2
        },
        {
            question: "What is the capital of New Zealand?",
            answers: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
            correctAnswer: 1
        },
        {
            question: "Which of these is not a primary color?",
            answers: ["Red", "Blue", "Green", "Yellow"],
            correctAnswer: 3
        }
    ],
    "science": [
        {
            question: "What is the chemical symbol for gold?",
            answers: ["Go", "Gd", "Au", "Ag"],
            correctAnswer: 2
        },
        {
            question: "What is the hardest natural substance on Earth?",
            answers: ["Diamond", "Platinum", "Titanium", "Quartz"],
            correctAnswer: 0
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correctAnswer: 2
        },
        {
            question: "What is the smallest unit of matter?",
            answers: ["Atom", "Molecule", "Cell", "Electron"],
            correctAnswer: 0
        },
        {
            question: "What is the speed of light in a vacuum?",
            answers: ["299,792 km/s", "300,000 km/s", "199,792 km/s", "250,000 km/s"],
            correctAnswer: 0
        },
        {
            question: "Which planet has the most moons?",
            answers: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            correctAnswer: 1
        },
        {
            question: "What is the process by which plants make their own food?",
            answers: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
            correctAnswer: 0
        },
        {
            question: "What is the main component of the Sun?",
            answers: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
            correctAnswer: 3
        },
        {
            question: "Which scientist proposed the theory of relativity?",
            answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
            correctAnswer: 1
        },
        {
            question: "What is the human body's largest organ?",
            answers: ["Heart", "Liver", "Brain", "Skin"],
            correctAnswer: 3
        },
        {
            question: "What is the chemical symbol for water?",
            answers: ["WA", "H2O", "W", "HO"],
            correctAnswer: 1
        },
        {
            question: "Which planet is known as the 'Morning Star'?",
            answers: ["Mars", "Jupiter", "Venus", "Mercury"],
            correctAnswer: 2
        },
        {
            question: "What is the study of fossils called?",
            answers: ["Archaeology", "Paleontology", "Geology", "Anthropology"],
            correctAnswer: 1
        },
        {
            question: "Which element has the atomic number 1?",
            answers: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
            correctAnswer: 3
        },
        {
            question: "What is the unit of electrical resistance?",
            answers: ["Watt", "Ampere", "Ohm", "Volt"],
            correctAnswer: 2
        },
        {
            question: "Which of these is not a type of blood cell?",
            answers: ["Red blood cell", "White blood cell", "Platelet", "Neuron"],
            correctAnswer: 3
        },
        {
            question: "What is the closest star to Earth?",
            answers: ["Proxima Centauri", "Alpha Centauri", "Polaris", "The Sun"],
            correctAnswer: 3
        },
        {
            question: "Which scientist discovered penicillin?",
            answers: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Robert Koch"],
            correctAnswer: 1
        },
        {
            question: "What is the largest species of shark?",
            answers: ["Great White Shark", "Whale Shark", "Hammerhead Shark", "Tiger Shark"],
            correctAnswer: 1
        },
        {
            question: "Which of these is not a state of matter?",
            answers: ["Solid", "Liquid", "Gas", "Mineral"],
            correctAnswer: 3
        }
    ],
    history: [
        {
            question: "In which year did World War II end?",
            answers: ["1943", "1944", "1945", "1946"],
            correctAnswer: 2
        },
        {
            question: "Who was the first President of the United States?",
            answers: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
            correctAnswer: 2
        },
        {
            question: "Which ancient civilization built the pyramids of Giza?",
            answers: ["Mayans", "Romans", "Greeks", "Egyptians"],
            correctAnswer: 3
        },
        {
            question: "When did the French Revolution begin?",
            answers: ["1789", "1776", "1804", "1812"],
            correctAnswer: 0
        },
        {
            question: "Who was the first woman to win a Nobel Prize?",
            answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Dorothy Hodgkin"],
            correctAnswer: 0
        },
        {
            question: "Which empire was ruled by Genghis Khan?",
            answers: ["Roman Empire", "Ottoman Empire", "Mongol Empire", "Byzantine Empire"],
            correctAnswer: 2
        },
        {
            question: "In which year did the Titanic sink?",
            answers: ["1910", "1912", "1915", "1918"],
            correctAnswer: 1
        },
        {
            question: "Who discovered penicillin?",
            answers: ["Louis Pasteur", "Alexander Fleming", "Joseph Lister", "Robert Koch"],
            correctAnswer: 1
        },
        {
            question: "Which country was the first to send a human to space?",
            answers: ["United States", "China", "Soviet Union", "United Kingdom"],
            correctAnswer: 2
        },
        {
            question: "When did the Berlin Wall fall?",
            answers: ["1987", "1989", "1991", "1993"],
            correctAnswer: 1
        },
        {
            question: "Who was the first Emperor of Rome?",
            answers: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
            correctAnswer: 1
        },
        {
            question: "In which year did Christopher Columbus first reach the Americas?",
            answers: ["1492", "1498", "1512", "1520"],
            correctAnswer: 0
        },
        {
            question: "Which U.S. President was in office during the Cuban Missile Crisis?",
            answers: ["Lyndon B. Johnson", "Richard Nixon", "John F. Kennedy", "Dwight D. Eisenhower"],
            correctAnswer: 2
        },
        {
            question: "Who was the leader of the Soviet Union during World War II?",
            answers: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Leon Trotsky"],
            correctAnswer: 1
        },
        {
            question: "Which ancient wonder was located in Alexandria, Egypt?",
            answers: ["Hanging Gardens", "Colossus of Rhodes", "Lighthouse (Pharos)", "Temple of Artemis"],
            correctAnswer: 2
        },
        {
            question: "When was the Declaration of Independence signed?",
            answers: ["1776", "1781", "1783", "1787"],
            correctAnswer: 0
        },
        {
            question: "Who was the first woman to fly solo across the Atlantic Ocean?",
            answers: ["Bessie Coleman", "Amelia Earhart", "Harriet Quimby", "Jacqueline Cochran"],
            correctAnswer: 1
        },
        {
            question: "Which civilization built Machu Picchu?",
            answers: ["Aztec", "Maya", "Inca", "Olmec"],
            correctAnswer: 2
        },
        {
            question: "Who wrote 'The Communist Manifesto'?",
            answers: ["Vladimir Lenin", "Karl Marx and Friedrich Engels", "Leon Trotsky", "Joseph Stalin"],
            correctAnswer: 1
        },
        {
            question: "Which battle marked the end of Napoleon's rule in 1815?",
            answers: ["Battle of Austerlitz", "Battle of Trafalgar", "Battle of Waterloo", "Battle of Borodino"],
            correctAnswer: 2
        }
    ],
    geography: [
        {
            question: "Which is the largest continent by land area?",
            answers: ["North America", "Africa", "Europe", "Asia"],
            correctAnswer: 3
        },
        {
            question: "What is the longest river in the world?",
            answers: ["Amazon", "Nile", "Mississippi", "Yangtze"],
            correctAnswer: 1
        },
        {
            question: "Which country has the largest population?",
            answers: ["India", "United States", "China", "Indonesia"],
            correctAnswer: 2
        },
        {
            question: "What is the capital of Australia?",
            answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
            correctAnswer: 2
        },
        {
            question: "Which mountain is the tallest in the world?",
            answers: ["K2", "Mount Kilimanjaro", "Mount Everest", "Makalu"],
            correctAnswer: 2
        },
        {
            question: "Which desert is the largest in the world?",
            answers: ["Gobi Desert", "Kalahari Desert", "Sahara Desert", "Antarctic Desert"],
            correctAnswer: 3
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            answers: ["China", "Thailand", "South Korea", "Japan"],
            correctAnswer: 3
        },
        {
            question: "Which of these cities is not in Europe?",
            answers: ["Prague", "Vienna", "Cairo", "Barcelona"],
            correctAnswer: 2
        },
        {
            question: "Which ocean is the smallest in the world?",
            answers: ["Indian Ocean", "Arctic Ocean", "Atlantic Ocean", "Southern Ocean"],
            correctAnswer: 1
        },
        {
            question: "Which country is home to the Great Barrier Reef?",
            answers: ["New Zealand", "Indonesia", "Australia", "Philippines"],
            correctAnswer: 2
        },
        {
            question: "What is the capital of Canada?",
            answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
            correctAnswer: 3
        },
        {
            question: "Which country is known as the Land of Fire and Ice?",
            answers: ["Norway", "Iceland", "Greenland", "Finland"],
            correctAnswer: 1
        },
        {
            question: "What is the largest island in the world?",
            answers: ["Madagascar", "Borneo", "Greenland", "New Guinea"],
            correctAnswer: 2
        },
        {
            question: "Which of these countries is landlocked?",
            answers: ["Vietnam", "Bolivia", "Portugal", "Thailand"],
            correctAnswer: 1
        },
        {
            question: "What is the capital of South Korea?",
            answers: ["Seoul", "Busan", "Pyongyang", "Tokyo"],
            correctAnswer: 0
        },
        {
            question: "Which mountain range runs through Switzerland?",
            answers: ["Andes", "Rockies", "Alps", "Himalayas"],
            correctAnswer: 2
        },
        {
            question: "Which African country was formerly known as Abyssinia?",
            answers: ["Egypt", "Ethiopia", "Nigeria", "Kenya"],
            correctAnswer: 1
        },
        {
            question: "What is the largest lake in Africa?",
            answers: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
            correctAnswer: 0
        },
        {
            question: "Which country has the most natural lakes?",
            answers: ["United States", "Russia", "Canada", "Finland"],
            correctAnswer: 2
        },
        {
            question: "What is the capital of Argentina?",
            answers: ["Santiago", "Lima", "Buenos Aires", "Rio de Janeiro"],
            correctAnswer: 2
        }
    ],
    entertainment: [
        {
            question: "Who played Iron Man in the Marvel Cinematic Universe?",
            answers: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
            correctAnswer: 1
        },
        {
            question: "Which band performed the song 'Bohemian Rhapsody'?",
            answers: ["The Beatles", "Led Zeppelin", "Queen", "The Rolling Stones"],
            correctAnswer: 2
        },
        {
            question: "What was the highest-grossing film of all time before adjusting for inflation?",
            answers: ["Titanic", "Star Wars", "Avatar", "Avengers: Endgame"],
            correctAnswer: 3
        },
        {
            question: "Who is the author of the Harry Potter book series?",
            answers: ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "George R.R. Martin"],
            correctAnswer: 1
        },
        {
            question: "Which TV show features characters named Ross, Rachel, Monica, Chandler, Joey, and Phoebe?",
            answers: ["How I Met Your Mother", "The Big Bang Theory", "Friends", "Seinfeld"],
            correctAnswer: 2
        },
        {
            question: "Who directed the movie 'Jurassic Park'?",
            answers: ["James Cameron", "George Lucas", "Steven Spielberg", "Christopher Nolan"],
            correctAnswer: 2
        },
        {
            question: "Which singer is known as the 'Queen of Pop'?",
            answers: ["Beyoncé", "Madonna", "Lady Gaga", "Whitney Houston"],
            correctAnswer: 1
        },
        {
            question: "What is the name of the main protagonist in the 'The Legend of Zelda' video game series?",
            answers: ["Zelda", "Link", "Ganon", "Mario"],
            correctAnswer: 1
        },
        {
            question: "Which animated movie features a character named Simba?",
            answers: ["Finding Nemo", "Shrek", "The Lion King", "Toy Story"],
            correctAnswer: 2
        },
        {
            question: "Who played the character of Jack in the movie 'Titanic'?",
            answers: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Johnny Depp"],
            correctAnswer: 1
        },
        {
            question: "Which movie features a character named Forrest Gump?",
            answers: ["The Green Mile", "Forrest Gump", "Cast Away", "Saving Private Ryan"],
            correctAnswer: 1
        },
        {
            question: "Who created the cartoon character Mickey Mouse?",
            answers: ["Hanna-Barbera", "Walt Disney", "Chuck Jones", "Seth MacFarlane"],
            correctAnswer: 1
        },
        {
            question: "Which actor played the character of Harry Potter in the film series?",
            answers: ["Rupert Grint", "Tom Felton", "Daniel Radcliffe", "Matthew Lewis"],
            correctAnswer: 2
        },
        {
            question: "What is the name of the fictional city where Batman operates?",
            answers: ["Metropolis", "Star City", "Central City", "Gotham City"],
            correctAnswer: 3
        },
        {
            question: "Which band released the album 'Abbey Road'?",
            answers: ["The Rolling Stones", "The Beatles", "Led Zeppelin", "Pink Floyd"],
            correctAnswer: 1
        },
        {
            question: "Who is known as the 'King of Pop'?",
            answers: ["Prince", "Michael Jackson", "Elvis Presley", "Justin Timberlake"],
            correctAnswer: 1
        },
        {
            question: "Which TV series is set in the fictional continent of Westeros?",
            answers: ["The Witcher", "Game of Thrones", "Lord of the Rings", "The Wheel of Time"],
            correctAnswer: 1
        },
        {
            question: "Who directed the movie 'The Shawshank Redemption'?",
            answers: ["Martin Scorsese", "Frank Darabont", "Quentin Tarantino", "Christopher Nolan"],
            correctAnswer: 1
        },
        {
            question: "Which actress played Hermione Granger in the Harry Potter films?",
            answers: ["Emma Watson", "Emma Stone", "Emma Thompson", "Jennifer Lawrence"],
            correctAnswer: 0
        },
        {
            question: "What was the first feature-length animated film ever released?",
            answers: ["Pinocchio", "Bambi", "Snow White and the Seven Dwarfs", "Fantasia"],
            correctAnswer: 2
        }
    ],
    sports: [
        {
            question: "Which country won the FIFA World Cup in 2018?",
            answers: ["Brazil", "Germany", "Argentina", "France"],
            correctAnswer: 3
        },
        {
            question: "In which sport would you perform a slam dunk?",
            answers: ["Volleyball", "Basketball", "Tennis", "Football"],
            correctAnswer: 1
        },
        {
            question: "How many players are there in a standard soccer team on the field?",
            answers: ["9", "10", "11", "12"],
            correctAnswer: 2
        },
        {
            question: "Which city hosted the 2016 Summer Olympics?",
            answers: ["London", "Beijing", "Rio de Janeiro", "Tokyo"],
            correctAnswer: 2
        },
        {
            question: "Who has won the most Grand Slam tennis tournaments in men's singles?",
            answers: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
            correctAnswer: 2
        },
        {
            question: "In which sport is the Stanley Cup awarded?",
            answers: ["Basketball", "Baseball", "Ice Hockey", "American Football"],
            correctAnswer: 2
        },
        {
            question: "How many rings are on the Olympic flag?",
            answers: ["4", "5", "6", "7"],
            correctAnswer: 1
        },
        {
            question: "Which country is known for inventing the sport of cricket?",
            answers: ["India", "Australia", "South Africa", "England"],
            correctAnswer: 3
        },
        {
            question: "In which sport would you use a 'puck'?",
            answers: ["Golf", "Ice Hockey", "Tennis", "Badminton"],
            correctAnswer: 1
        },
        {
            question: "Who is often referred to as 'The Greatest' in boxing?",
            answers: ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather", "Manny Pacquiao"],
            correctAnswer: 1
        },
        {
            question: "Which sport is played at Wimbledon?",
            answers: ["Golf", "Tennis", "Cricket", "Polo"],
            correctAnswer: 1
        },
        {
            question: "How many points is a touchdown worth in American football?",
            answers: ["3", "6", "7", "9"],
            correctAnswer: 1
        },
        {
            question: "Which country hosted the 2022 FIFA World Cup?",
            answers: ["Russia", "Brazil", "Qatar", "United States"],
            correctAnswer: 2
        },
        {
            question: "In which Olympic sport would you perform a vault?",
            answers: ["Swimming", "Gymnastics", "Track and Field", "Diving"],
            correctAnswer: 1
        },
        {
            question: "Which NBA team has won the most championships?",
            answers: ["Los Angeles Lakers", "Chicago Bulls", "Boston Celtics", "Golden State Warriors"],
            correctAnswer: 2
        },
        {
            question: "What is the diameter of a basketball hoop in inches?",
            answers: ["16", "18", "20", "24"],
            correctAnswer: 1
        },
        {
            question: "Which sport uses the terms 'strike' and 'spare'?",
            answers: ["Baseball", "Bowling", "Golf", "Tennis"],
            correctAnswer: 1
        },
        {
            question: "How many players are on a standard volleyball team?",
            answers: ["4", "5", "6", "7"],
            correctAnswer: 2
        },
        {
            question: "Which country won the most gold medals at the 2020 Tokyo Olympics?",
            answers: ["China", "Japan", "Russia", "United States"],
            correctAnswer: 3
        },
        {
            question: "In which sport would you perform a 'hole in one'?",
            answers: ["Golf", "Bowling", "Pool", "Archery"],
            correctAnswer: 0
        }
    ],
    technology: [
        {
            question: "Who is the co-founder of Microsoft alongside Bill Gates?",
            answers: ["Steve Jobs", "Paul Allen", "Mark Zuckerberg", "Larry Page"],
            correctAnswer: 1
        },
        {
            question: "What does CPU stand for?",
            answers: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"],
            correctAnswer: 0
        },
        {
            question: "Which company developed the first iPhone?",
            answers: ["Samsung", "Nokia", "Apple", "Motorola"],
            correctAnswer: 2
        },
        {
            question: "What year was the World Wide Web invented?",
            answers: ["1989", "1991", "1995", "2000"],
            correctAnswer: 0
        },
        {
            question: "Which programming language was developed by James Gosling at Sun Microsystems?",
            answers: ["Python", "Java", "C++", "Ruby"],
            correctAnswer: 1
        },
        {
            question: "What does HTML stand for?",
            answers: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
            correctAnswer: 0
        },
        {
            question: "Which social media platform was founded by Mark Zuckerberg?",
            answers: ["Twitter", "Instagram", "Facebook", "LinkedIn"],
            correctAnswer: 2
        },
        {
            question: "What is the name of Amazon's virtual assistant?",
            answers: ["Siri", "Alexa", "Cortana", "Google Assistant"],
            correctAnswer: 1
        },
        {
            question: "Which company owns Android?",
            answers: ["Apple", "Microsoft", "Samsung", "Google"],
            correctAnswer: 3
        },
        {
            question: "What does Wi-Fi stand for?",
            answers: ["Wireless Fidelity", "Wireless Fiber", "Wireless Finder", "Wired Fiber"],
            correctAnswer: 0
        }
    ]}