<header>
  <h2>Allan Benameur</h2>
  <nav>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="">About me</a>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="">Services</a>
    <button class="contact">Contact me</button>
  </nav>
</header>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Martian+Mono:wght@500&display=swap");
  h2 {
    font-family: "Martian Mono", monospace;
    color: white;
    margin: 15px;
    margin-left: 50px;
    font-size: 30px;
  }
  header {
    background-color: black;
    height: 11%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }
  nav {
    margin-left: auto;
    margin-right: 100px;
  }
  nav > * {
    margin: 15px;
  }
  nav > a {
    color: white;
    font-size: 17px;
  }
  nav > a:hover {
    text-decoration: none;
    color: red;
  }
  .contact {
    height: 40px;
    width: 107;
    padding-left: 9px;
    padding-right: 9px;
    border-radius: 8px;
    border-style: solid;
    border-color: black;
    border: 2px;
  }
  .contact:hover {
    background-color: black;
    color: white;
    border-color: white;
    border-right: 5px;
    border-bottom: 5px;
    border-style: solid;
    text-decoration: none;
  }
</style>
