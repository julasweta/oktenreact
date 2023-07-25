# Okten React 
[Лекції REACT](https://github.com/IhorKurylov/OktenReakt/branches)
[Завдання](https://github.com/GrayHead/js_demos/tree/master/react/2023)
[Розбір домашок](https://github.com/GrayHead/march-2023-react-hw)


# hw-5 axios useForm Joi 
Реалізувати, використовуючи useForm хук, а також сервіс axios наступне. Всі запити винести в сервісний рівень
### 1.
Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
###  2.
Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
###  3.
http://owu.linkpc.net/carsAPI/v1/doc
Реалізувати створення, видалення та оновлення машин

# hw-6 routing useLocation useParams
## Реалізувати 3 маршрути
### todos 
- при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos

### albums 
- при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums

### comments 
- при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
при натисканні на комментар тягнеться пост, до якого належіить цей коментар. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
id поста взяти з коментаря (postId)

відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.

# Control Work
The Movies app
1. mockup download https://cssauthor.com/pinball-responsive-grid-style-blog-psd/
 2. Movies Database. Register here:
https://www.themoviedb.org/documentation/api 
3. to find your api key and token:
4. API is here:
https://developers.themoviedb.org/3/discover/movie-discover
5. Some API info is here: 
https://www.themoviedb.org/settings/api
6. в помощь по визуализации компонентов они есть как для реакта так и для 
ангулара (не по прямым ссылкам представленным здесь, можете не 
использовать их если не хотите)
Components:
stars:
https://codepen.io/benjaminreid/pen/vNVwPW
https://www.npmjs.com/package/react-star-ratings
badge for genres:
https://reactstrap.github.io/components/badge/
Концепция общего вида (вид не должен быть такой же! Вы не верстальщики. 
ЭТО КОНЦЕПЦИЯ размещения элементов. Если конечно сделаете так же , то это 
будет овер круто)
https://dribbble.com/shots/6461891-Media-store-idea-Movies
https://dribbble.com/shots/6090855-Raymov-Website-streaming-movie
https://dribbble.com/search/movies%20web%20app
7. по структуре проекта:
1) основные действия 
- getMovies
- getGenres
2) Если вы используете react : в redux store должны лежать список фильмов, 
жанры (должны быть соответствующие редьюсеры). Если ангулар, то на ваше 
усмотрение
3) Components:
 - Header
 - MoviesList (renders MoviesListCards)
 - MoviesListCard (contain all movie information)
 - PosterPreview (movie image)
 - StarsRating 
 - MovieInfo (contains label, description, badges)
 - GenreBadge
 - UserInfo (just hardcoded small circle and name)
4) Containers:
 - MoviesPage основное задание:
5) пагинация
6) вторая (следующая) страница с расширеным описанием фильма 
(подразумевается роутинг). она должна открываться если пользователь кликнул 
на карточку с фильмом
реализовать страницу со списком фильмов, сделать свитчер темной/светлой 
темы стиля, сделать запросы на серве


