import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ui } from './data/ui'

export const LANGS = ['en', 'es']
const STORAGE_KEY = 'lang'

// English is the default. A visitor's explicit choice (or a shared ?lang=es link) overrides it.
function initialLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang')
    if (LANGS.includes(fromUrl)) return fromUrl
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (LANGS.includes(stored)) return stored
  } catch {
    // storage/URL unavailable: fall through to the default
  }
  return 'en'
}

/**
 * Resolve a data value for the active language.
 *  - { en, es }  -> the matching string (falls back to English)
 *  - array       -> each item resolved
 *  - anything else (plain strings, e.g. tech names) -> returned as is
 */
export function pick(value, lang) {
  if (Array.isArray(value)) return value.map((v) => pick(v, lang))
  if (value && typeof value === 'object' && 'en' in value) return value[lang] ?? value.en
  return value
}

const LangContext = createContext(null)

// `meta` = { title, description } as { en, es } objects; each page passes its own.
export function LangProvider({ children, meta = ui.meta }) {
  const [lang, setLangState] = useState(initialLang)

  const setLang = useCallback((next) => {
    if (!LANGS.includes(next)) return
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore (private mode, blocked storage)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = meta.title[lang]
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', meta.description[lang])
  }, [lang, meta])

  const value = useMemo(
    () => ({ lang, setLang, t: (v) => pick(v, lang) }),
    [lang, setLang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}
