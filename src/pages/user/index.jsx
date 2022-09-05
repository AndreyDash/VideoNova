import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { userVideoLoad } from "../../store/userVideoSlice"
// import { createTheme } from "@mui/material/styles"
import ContentUserPage from "../../components/partials/user-page-content"
import Layout from "../../layout"

function UserPage() {
  // const newFontFamily = createTheme({
  //   textTransform: "none",
  //   typography: {
  //     textTransform: "none",
  //     fontFamily: [
  //       "Plus Jakarta Display",
  //       "Roboto",
  //       "Helvetica Neue",
  //       "sans-serif",
  //     ].join(","),
  //   },
  // })
  const dispatch = useDispatch()
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetch("https://wonderful-app-lmk4d.cloud.serverless.com/video")
      .then((res) => res.json())
      .then((json) => {
        setVideos(json)
      })
      .catch((err) => {
        console.warn(err)
        alert("ошибка загрузки видео")
      })
  }, [])
  dispatch(userVideoLoad(videos))
  const siteInfo = useSelector((store) => store.siteInfo)
  const auth = useSelector((store) => store.userRegister)
  const user = useParams()
  return (
    <Layout logIn>
      <div>
        web-page signIn user path: {user.id}
        <br />
        message from store: {siteInfo.test}
        <ContentUserPage
          userName={auth.userInfo[auth.authNumber].userName}
          img={auth.userInfo[auth.authNumber].userPic}
        />
      </div>
    </Layout>
  )
}

export default UserPage
