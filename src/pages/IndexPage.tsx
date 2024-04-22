import { useAppStore } from "../stores/useAppStore"

const IndexPage = () => {

  useAppStore((state)=>state.categories)
  return (
    <>
        <h1>index</h1>
    </>
  )
}

export default IndexPage