<script>
</script>

<div class="header">
  <h1 class="title">About me</h1>
</div>
<div class="main">
  <div class="container">
    <h1>Who Am I ?</h1>
    <div class="box">
      <p>
        Hello my name is <strong>Allan</strong>,<br />I am French 🇫🇷 I can help
        you carry out your projects.
      </p>
      I can code and understand<strong /> <strong>Svelte, HTML, CSS </strong>and
      <strong>Typescript</strong>. My young age of <strong>15</strong> only reinforces
      my passion for the world of web development. Whether you need my services for
      a paid or unpaid assignment, don't hesitate to contact me.
    </div>
  </div>

  <div class="container">
    <h1>Main stack</h1>
      <div class="icon-box">
        <img alt="" src="/svelte.png" class="icon"/>
        <img alt="" src="/html.png" class="icon"/>
        <img alt="" src="/css.png"class="icon"/>
      </div>
      <img alt="" src="/ts.png" class="icon ts-icon"/>
  </div>
  <div class="rules-container container">
    <h1>Game Rules</h1>
        <div class="text">
            <p>Press space for jump</p>
            <p>Dodge the cactus</p>
            <p>Press the restart button for restart</p>
        </div>
    </div>
</div>

<style>
  .icon-box{
    height: 90%;
    width: 100%;
  }
  .icon{
    margin-top: 35px;
    width: 60px;
    height: 69px;
    margin-left: 30px;
  }
  .ts-icon{
    margin-left: 40%;
    margin-bottom: 20%;
  }
  .main {
    display: flex;
    flex-direction: row;
  }
  .box {
    margin: 20px;
    widows: 80%;
    height: 80%;
  }
  .title {
    font-size: 50px;
    margin-top: 60px;
  }
  .header {
    display: flex;
    justify-content: center;
  }
  .container {
    justify-content: center;
    display: flex;
    border-radius: 6px;
    background-color: #1B1421;
    width: 16.5%;
    margin-left: 180px;
    margin-top: 30px;
    flex-direction: column;
  }
  .container > h1 {
    margin: 8px auto;
    margin-bottom: auto;
  }
  .text>p{
        margin-bottom: 7px;
    }
    .rules-container>h1{
        margin-top: 7px;
        margin-bottom: 7px;
    }
    .rules-container>*{
        margin-left: 17px;
    }
    .rules-container{
        background-color:#1B1421 ;
        width: 30%;
        height: 160px;
    }
  
</style>
