import { getMovie } from './components/getMovie.js'

const form = document.querySelector('form')
const list = document.querySelector('main')

form.addEventListener('submit', async e => {
  e.preventDefault()
  const input = form.movieSearch.value.trim()
  form.reset()

  const moviesResponse = await getMovie(input)

  for (let movie of moviesResponse.Search) {
    console.log(movie)

    const item = document.createElement('div')
    item.classList.add(
      'w-1/4',
      'flex',
      'flex-col',
      'justify-start',
      'items-center',
      'p-5',
      '[&>*+*]:mt-2'
    )
    item.innerHTML = `
      <img src="${movie.Poster}" alt="${movie.Title}" class="object-cover w-full h-[200px]" />
      <h2 class="text-center">${movie.Title}</h2>
      <p text-neutral-600>${movie.Year}</p>
    `

    list.appendChild(item)
  }
})
