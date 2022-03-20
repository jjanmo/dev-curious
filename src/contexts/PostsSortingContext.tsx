import useQueryPosts from 'hooks/useQueryPosts'
import queryString, { ParsedQuery } from 'query-string'
import { createContext, useEffect, useState } from 'react'
import { PostType } from 'types/posts'

interface PostsSortingContextType {
  posts: PostType[]
  categories: [string, number][]
  selected: string
}

interface PostsSortingContextProviderProps {
  search: string
  children: React.ReactNode
}

const PostsSortingContext = createContext({} as PostsSortingContextType)

function PostsSortingContextProvider({ children, search }: PostsSortingContextProviderProps) {
  const { posts, categories } = useQueryPosts()
  const query: ParsedQuery<string> = queryString.parse(search)

  const [filteredPosts, setFilteredPosts] = useState<PostType[]>(posts)
  const [selected, setSelected] = useState<string>('all')

  useEffect(() => {
    const _selected = (query.category || 'all') as string
    setSelected(_selected)

    const _filteredPosts =
      _selected === 'all' ? posts : posts.filter(post => post.categories.includes(_selected))
    setFilteredPosts(_filteredPosts)
  }, [query.category])

  return (
    <PostsSortingContext.Provider value={{ posts: filteredPosts, categories, selected }}>
      {children}
    </PostsSortingContext.Provider>
  )
}

export { PostsSortingContext, PostsSortingContextProvider }
