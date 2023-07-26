import { useState, useEffect, useContext } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Client, Account } from "appwrite";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Utility/Alert";
import { LoginContext } from "../Context/Context";

export default function Login() {
  const navigate = useNavigate();

  // Getting the Login Data
  const { setLogin } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [client, setClient] = useState(null);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    // Initialize the client object only once
    const appwriteClient = new Client();

    appwriteClient
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
      .setProject("64ad05e142768fa53299"); // Your project ID

    setClient(appwriteClient);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!client) return;

    const account = new Account(client);

    try {
      // Use createEmailSession to log in an existing user
      const response = await account.createEmailSession(email, password);
      setLogin(true);
      console.log(response);
      navigate("/anime");
    } catch (error) {
      setMessage(error.message);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 5000);
    }
  };

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#6DECAF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="Login py-4">
        {alert ? <Alert message={message} /> : <></>}

        <form
          onSubmit={handleLogin}
          method="post"
          className="d-flex flex-column p-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-25 text-white mx-auto"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>

          <h1 className="text-center display-4">Login</h1>

          <label htmlFor="email" className="mx-auto mb-4">
            <TextField
              id="outlined-basic"
              className="mx-auto input "
              label="Email"
              variant="standard"
              color="secondary"
              focused
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="mx-auto mb-4">
            <TextField
              id="outlined-basic"
              className="mx-auto input"
              label="Password"
              variant="standard"
              color="secondary"
              type="password"
              autoComplete="current-password"
              focused
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="mx-auto mb-4 text-center" type="submit">
            Login
          </button>
          <Link to="/sign" className=" mx-auto mb-4 text-center">
            Go to Sign Up
          </Link>
        </form>
      </div>
    </ThemeProvider>
  );
}
