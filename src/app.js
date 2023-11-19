import { getMovie } from './components/getMovie.js'

const form = document.querySelector('form')
const list = document.querySelector('main')

const item = document.createElement('div')
item.classList.add(
  'w-1/4',
  'flex',
  'flex-col',
  'justify-center',
  'items-center',
  'p-5'
)
item.innerHTML = `
  <img src="https://placehold.co/160x240" alt="" class="" />
  <h2>Movie Name 1</h2>
  <p>1991</p>
`

const updateMovie = async movie => {
  const movieData = await getMovie(movie)
  return movieData
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const movie = form.movieSearch.value.trim()
  form.reset()

  console.log(awaupdateMovie(movie))
})

list.appendChild(item)
