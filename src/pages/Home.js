import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"

function Home() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  function callApi() {
    axios
      .get("http://localhost:4000/")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error.message))
  }

  async function callProtectedApi() {
    try {
      const token = await getAccessTokenSilently()
      const response = await axios.get("http://localhost:4000/protected", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      console.log(response.data)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      <h3>User is {isAuthenticated ? "Logged in" : "Not logged in"} </h3>

      <ul className='list-group'>
        <li className='list-group-item'>
          <button className='btn btn-success' onClick={callApi}>
            Call API route
          </button>
        </li>
        <li className='list-group-item'>
          <button className='btn btn-success' onClick={callProtectedApi}>
            Call Protected API route
          </button>
        </li>
      </ul>
      {isAuthenticated && (
        <pre
          style={{
            textAlign: "start",
          }}
        >
          {JSON.stringify(user, null, 2)}
        </pre>
      )}
    </>
  )
}

export default Home
