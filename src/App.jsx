import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import { BlogList, BlogEntry } from './pages/Blog'
import blogs from './blogs'

// Hash-based routing keeps deep links working on GitHub Pages without a server fallback.
function useHashPath() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return hash.replace(/^#/, '').replace(/\/+$/, '') || '/'
}

function App() {
  const path = useHashPath()
  const entrySlug = path.startsWith('/blog/') ? path.slice('/blog/'.length) : null
  const isBlog = path === '/blog' || entrySlug !== null

  let page = <Home />
  let title = "Simone's Profile"
  if (entrySlug !== null) {
    const blog = blogs.find((b) => b.slug === entrySlug)
    page = <BlogEntry slug={entrySlug} />
    title = `${blog ? blog.title : 'Not found'} - Simone's Blog`
  } else if (path === '/blog') {
    page = <BlogList />
    title = "Simone's Blog"
  }

  useEffect(() => {
    document.title = title
    window.scrollTo(0, 0)
  }, [path, title])

  return <Layout active={isBlog ? 'blog' : 'home'}>{page}</Layout>
}

export default App
