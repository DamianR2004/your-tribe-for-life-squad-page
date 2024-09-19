import fetchJson from "$lib/fetch-json"

export async function load({params}) {
  console.log('PARAMS', params)
  const url = `https://fdnd.directus.app/items/person/${params.id}`

  const person = await fetchJson(url)

  return {
    person: person.data
  }
}