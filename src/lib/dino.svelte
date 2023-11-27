<script lang="ts">
  import { onMount } from "svelte";
  import { Game, type Cactus } from "./game";
  import { fly } from "svelte/transition";
  let MAP_WIDTH = 0;

  let game: Game;
  let cactus: Cactus[] = [];
  let dinoX: number;
  let dinoY: number;
  let dino_src: string = "dino-run1";
  let isGameOver = false;

  function refreshDino() {
    if (isGameOver == true) {
      return;
    }
    if (game.getDinoY() != -40) {
      dino_src = "dino-jump";
      return;
    }
    if (dino_src == "dino-run1") {
      dino_src = "dino-run2";
      return;
    } else {
      dino_src = "dino-run1";
      return;
    }
  }

  function updateDom() {
    cactus = game.getCactus();
    dinoX = game.getDinoX();
    dinoY = game.getDinoY();
    isGameOver = game.getIsGameOver();
  }

  onMount(() => {
    game = new Game(window.innerWidth);
    window.addEventListener("keydown", (e) => {
      if (game == null) {
        return;
      }
      if (e.key === " ") {
        game.jump();
      }
    });
    const interval = setInterval(() => {
      refreshDino();
    }, 200);

    setInterval(() => {
      updateDom();
    }, 2);
  });
</script>

<div class="container">
  <img
    transition:fly={{ y: 200, duration: 2000 }}
    src="/{dino_src}.png"
    alt="dino"
    style={`height:${50}; width:${50}; height:${70}px; bottom:${dinoY}px; left:${dinoX}px; position:relative`}
    id="dino"
  />
  <img src="/track.png" alt="" class="ground" />
  {#each cactus as c}
    <img
      src="/big-cactus1.png"
      alt="cactus"
      style={`position:absolute; bottom:0; left:${c.x}px; width:${c.width}px; height:${c.height}px`}
      class="img-big-cactus"
    />
  {/each}
</div>
{#if isGameOver}
  <div class="game-over">
    <div>
      <img src="/game-over.png" alt="" class="game-over-image" />
      <button class="restart" on:click={() => game.restartGame()}
        ><img src="/reset.png" alt="" /></button
      >
    </div>
  </div>
{/if}

<style>
  .ground {
    width: 100%;
  }
  .game-over {
    margin-top: 50px;
    background-color: #120D17;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .restart {
    background-color: #120D17;
    border: 0px;
  }
  .restart > img {
    background-color: #120D17;
    width: 50px;
  }
  .container {
    position: relative;
    padding-top: 100px;
    width: 100vw;
  }
</style>
