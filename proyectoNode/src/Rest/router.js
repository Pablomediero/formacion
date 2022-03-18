import user from "./Routes/me"
import music from "./Routes/music"
import auth from "./Routes/auth"

export default app => {
    app.use("/me",user)    
    app.use("/music",music)    
    app.use("/auth",auth)    
}
