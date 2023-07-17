export default function NavBar() {
    return (
      <nav>
        <ul>
          <img src={require("../assets/logo.png")}/>
          <li><a href="/login">signin</a></li>
          <button>Click to signin</button>
        </ul>
      </nav>
    )
    }