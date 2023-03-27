import { useState, useEffect, Dispatch, SetStateAction } from 'react'

/* a linha  5 e a mudando no 'export function, serve para mudar o state ao longo da aplicação, porque estamos tipando esse estado, estamos falando
que vai ter um T que é a informação que chegou, e ele ja coloca a tipagem, e a outra é o SET.... */

type Response<T> = [T, Dispatch<SetStateAction<T>>]

export function usePersistedState<T>(
  key: string,
  initialState: any,
): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
