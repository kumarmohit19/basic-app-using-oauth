import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Auth0Provider } from "@auth0/auth0-react"

const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN
const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID
const AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      redirectUri={window.location.origin}
      audience={AUDIENCE}
      scope='openid profile email'
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
