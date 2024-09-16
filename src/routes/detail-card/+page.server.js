import fetchJson from "$lib/fetch-json"

export async function load() {
  const url = 'https://fdnd.directus.app/items/person'

  const persons = await fetchJson(url)

  return {
    persons: persons.data
  }
}