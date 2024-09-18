import fetchJson from "$lib/fetch-json"

export async function load() {
const url = 'https://fdnd.directus.app/items/person/?filter[id][_in]=39,11,23,44'

  const persons = await fetchJson(url)

  return {
    persons: persons.data
  }
}