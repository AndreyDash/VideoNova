import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { userReg } from "../../store/userRegisterSlice"
import Layout from "../../layout"
import ContentHomePage from "../../components/partials/home-page-content"

function HomePage() {
  const dispatch = useDispatch()
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://wonderful-app-lmk4d.cloud.serverless.com/user")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json)
      })
      .catch((err) => {
        console.warn(err)
        alert("ошибка загрузки юзеров")
      })
  }, [])
  dispatch(userReg(users))
  const headingH1 = {
    fontFamily: "Chillax, sans-serif",
    fontWeight: 600,
    fontSize: "24px",
  }

  return (
    <Layout>
      <div style={headingH1}>
        <ContentHomePage users={users} />
      </div>
    </Layout>
  )
}
export default HomePage
