 
import { useLoaderData } from "react-router-dom"

const GitHub = () => {
  const data = useLoaderData()
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <img src={data.avatar_url} alt="git profile pic" width={300} className="m-auto rounded-full mb-3"/>
      <h4>GitHub followers: {data.followers}</h4>
    </div>
  )
}


export default GitHub;

export const githubLoader = async () => {
  const response = await fetch('https://api.github.com/users/mrfahid')
  return response.json()
}
