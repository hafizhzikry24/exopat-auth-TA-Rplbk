import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";
import Token from "../auth/Token";
import UsersAPI from "../api/UsersApi";
// import Token from "../auth/Tokens.js";
// import UsersAPI from "../api/UsersApi.js";

function Login(props) {

    
    const token = new Token();
    const auth = new UsersAPI();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        auth.login({email, password}).then ((res) => {
            props.setToken(res.token);
            token.saveToken(res.token);

            console.log(res);
        })

     
    }

    return (
        <Box component="main" sx={{ p: 3, textAlign: 'center', mt:'50px' }}>
            <Toolbar />
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h5" component="h1"  fontWeight="bold">
                            Login User
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField label="Email" name="email" type="email" variant="outlined"
                                   onChange={(e) => setEmail(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField  type="password" label="Password" name="password"
                                    variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button type="submit" variant="contained">Sign In</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default Login