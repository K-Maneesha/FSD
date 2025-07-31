const tv = [
  "https://m.media-amazon.com/images/M/MV5BZjkxZWJiNTUtYjQwYS00MTBlLTgwODQtM2FkNWMyMjMwOGZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKTG73Z1JLBy1p229aiCYMzO6RA3eHTQ5G4w&s",
  "https://i.pinimg.com/originals/15/58/66/15586618c27db8a5634d7faab6b1d197.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/da/DarkNetflixPosterEnglish.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHtjjfArHKA8CIaYoqTuWD4PGC9pr-Dlp_2Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfpj-FEcamLa1bGXd2bWyt8mgPHYTYr1O8g&s"
];

const movies = [
  "https://upload.wikimedia.org/wikipedia/en/0/07/Infinite_%282021_film%29_release_poster.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFXZx9DOfawxQcow1lB5voZxX50Ae-1jOIw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb27q18Yl4FMbPnB4EjfRDhfqLwQkXg7h3Yg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsApY-xIxr420PuzLsBrlGAAJ2O_QzxyEf1g&s",
  "https://m.media-amazon.com/images/M/MV5BNDAyYjZmNjctOWE2Mi00ZDBiLWE2YjEtMWM1YmM0NmYzOGQwXkEyXkFqcGc@._V1_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgt2pK80whr94_XdRHLBZisneIt4MoMFRAQ&s"
];

let myList = [];

function createCard(url, containerId) {
  const col = document.createElement('div');
  col.className = 'col-6 col-sm-4 col-md-3 col-lg-2';

  const card = document.createElement('div');
  card.className = 'movie-card';

  const img = document.createElement('img');
  img.src = url;

  const btn = document.createElement('button');
  btn.className = 'btn-list';
  btn.textContent = myList.includes(url) ? '❌ Remove' : '➕ Add to My List';

  btn.addEventListener('click', () => {
    if (myList.includes(url)) {
      myList = myList.filter(item => item !== url);
    } else {
      myList.push(url);
    }
    renderList();
  });

  card.appendChild(img);
  card.appendChild(btn);
  col.appendChild(card);

  document.getElementById(containerId).appendChild(col);
}

function renderList() {
  const listContainer = document.getElementById('listRow');
  listContainer.innerHTML = '';
  myList.forEach(url => createCard(url, 'listRow'));
  updateButtons();
}

function updateButtons() {
  document.querySelectorAll('button').forEach(button => {
    const img = button.previousElementSibling;
    if (img && img.tagName === 'IMG') {
      const url = img.src;
      button.textContent = myList.includes(url) ? '❌ Remove' : '➕ Add to My List';
    }
  });
}

tv.forEach(url => createCard(url, 'tvRow'));
movies.forEach(url => createCard(url, 'moviesRow'));
